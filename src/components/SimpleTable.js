import React from 'react';
import PropTypes from 'prop-types';

const SimpleTable = props => (
    <div className="simple-table">
        <div key="key_0" className="table-head">
            <div>Type</div>
            <div>Value</div>
        </div>
        {
            props.items.map((item, index) => {
                const key = `key_${index + 1}`;

                return (
                    <div key={key} className="table-row">
                        <div>{ item.type }</div>
                        <div>{ item.text }</div>
                    </div>
                );
            })
        }
    </div>
);

SimpleTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
}

export default SimpleTable;
