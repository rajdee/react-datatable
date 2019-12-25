import React from 'react';
import PropTypes from 'prop-types';

import { clx } from './clx';

import { Field } from './Field';

export const Body = ({
    list = [],
    fields,
    handleClick,
    className
}) => {

    return list
        ? (
            <tbody className={clx('c-datatable__body', className)}>
                {
                    list.map((item, index) => {
                        const onClick = typeof handleClick === 'function'
                            ? { onClick: handleClick(index) }
                            : {};

                        return (
                            <tr
                                key={index}
                                {...onClick}
                            >
                                {
                                    fields.map((field, i) => {
                                        return (
                                            <Field
                                                key={i}
                                                data={item}
                                                field={field}
                                                index={index}
                                            />
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        )
        : null;
};

Body.propTypes = {
    list: PropTypes.array,
    fields: PropTypes.array,
    className: PropTypes.string,
    handleClick: PropTypes.func
};
