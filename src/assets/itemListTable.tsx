// ItemListTable.tsx
import React from 'react';

import ListIt from './itemListRow';

const ItemListTable = ({ items }) => (
    <table className="table table-hover w-75 m-auto">
        <thead>
            <tr>
                <th>Continent</th>
                <th>Country</th>
                <th>Travel Cost</th>
            </tr>
        </thead>
        <tbody>
            {items.map((h) => (
                <ListIt key={h.id} el={h} />
            ))}
        </tbody>
    </table>
);

export default ItemListTable;
