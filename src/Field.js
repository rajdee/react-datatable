import React from 'react';
import PropTypes from 'prop-types';

import { clx } from './clx';

const pick = (object = {}, paths) => paths.reduce(
    (acc, key) => {
        if (key in object) {
            acc[key] = object[key];
        }
        return acc;
    }, {}
);

export const Field = ({
    data,
    field,
    index,
    className
}) => {
    const {
        keys,
        resolve
    } = field;

    const extendedData = {
        ...data,
        index
    };

    const value = typeof resolve === 'function'
        ? resolve(
            pick(
                extendedData,
                Array.isArray(keys) ? keys : [ keys ]
            )
        )
        : extendedData[keys];

    return (
        <td className={clx('c-datatable__field', className)}>
            {value}
        </td>
    );
};

Field.propTypes = {
    data: PropTypes.object,
    field: PropTypes.object,
    index: PropTypes.number,
    className: PropTypes.string
};
