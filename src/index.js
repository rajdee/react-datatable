import React from 'react';
import PropTypes from 'prop-types';

import { clx } from './clx';

import { Body } from './Body';
import { Header } from './Header';

export const DataTable = ({
    list,
    fields: {
        header = [],
        body = []
    },
    className
}) => {
    return (
        <table className={clx('c-datatable', className)}>
            <Body fields={header} />
            <Header
                list={list}
                fields={body}
            />
        </table>
    );
};

DataTable.propTypes = {
    list: PropTypes.array,
    fields: PropTypes.object,
    handleClick: PropTypes.func,
    className: PropTypes.string
};

DataTable.defaultProps = {
    list: [],
    fields: {}
};
