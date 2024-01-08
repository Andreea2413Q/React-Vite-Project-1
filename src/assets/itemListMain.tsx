// ItemListMain.tsx
import React, { useState } from 'react';
import ItemListTable from './ItemListTable';
import itemArray from './itemListInfo';


function ItemListMain() {
    const [contor, setContor] = useState(50);
    const [items, setItems] = useState(itemArray);
    const [savedNumbers, setSavedNumbers] = useState([2,3,10]);

    const add = () => {
        setContor(contor + 1);
    };

    const dec = () => {
        setContor(contor - 1);
    };

    const res = () => {
        setContor(0);
    };

    const saveNumbers = () => {
        setSavedNumbers([...savedNumbers, contor]);
    };

    const addItems = () => {
        setItems([
            ...items,
            {
                id: 3,
                continent: 'Africa',
                country: 'Niger',
                costTravel: 500,
            },
            {
                id: 4,
                continent: 'North America',
                country: 'Canada',
                costTravel: 3000,
            },
        ]);
    };

    return (
        <>
            <ItemListTable items={items} />

            <br />
            <div className="clear-fix">
                <button className="btn btn-primary px-3 w-25 float-right" onClick={addItems}>
                    New
                </button>
            </div>

            <br />
            <h1> {contor} </h1>
            <button onClick={add}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={res}>reset</button>
            <button onClick={saveNumbers}>Save</button>
            <ul>
                {savedNumbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </>
    );
}

export default ItemListMain;
