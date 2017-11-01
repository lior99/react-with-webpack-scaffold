import React from 'react';

const ItemsTable = (props) => {
    return (
        <table className="items-table">
        <tr key='key_0'>
            <th>Type</th>
            <th>Value</th>
        </tr>
        {
            props.items.map((item, index) => {
                const key = `key_${index+1}`;

                return (
                    <tr key={key} >
                        <td>{ item.type }</td>
                        <td>{ item.text }</td>
                    </tr>
                )
            })
        }
        </table>
    )
}

export default ItemsTable;