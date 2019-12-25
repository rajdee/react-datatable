import React from 'react';
import PropTypes from 'prop-types';

import { clx } from './clx';

export const Header = ({
    fields,
    className
}) => {
    return fields
        ? (
            <thead className={clx('c-datatable__header', className)}>
                <tr>
                    {
                        fields.map((id, i) => (
                            <th key={`${id}-${i}`}>
                                { id }
                            </th>
                        ))
                    }
                </tr>
            </thead>
        )
        : null;
};

Header.propTypes = {
    fields: PropTypes.array,
    className: PropTypes.string
};
