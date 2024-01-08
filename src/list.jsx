import React, {useState} from "react"
import ListIt from './listRow'

const itemArray = [
    {
        id:1,
        continent:"Asia",
        country:"China",
        costTravel:1000,
    },
    {
        id:2,
        continent:"South America",
        country:"Chile",
        costTravel:2000,
    },
]
const [lista, setLista] = useState([2,3,10,14]);
const [contor,setContor] = useState(50);
function add(){
setcontor(contor+1);
}
const dec = () => {
    setContor(contor-1)
}
function res(){
    setContor(0)
}
function save(){

}

const itemList = () => {
    const [i, setItemns ] = useState(itemArray)

    const addItems = () => {
        setItemns([
        ...i,
        {
            id:3,
            continent:"Africa",
            country:"Niger",
            costTravel:500,
        },  
        {
            id:4,
            continent:"North America",
            country:"Canada",
            costTravel:3000,
        },
        ])
    }

    return (
        <>
            <h1> {contor} </h1>
            <button onclick="{add}" >+</button >
            <button onclick="{dec}">-</button>
            <button onclick="{res}">reset</button>
            <button onclick="{save}">Save</button>
            <ul>
                {
                    lista.map((el) => (
                        return (
                  <li >{el}</li>
                    )
                        ))
                }
            </ul>
        <table className="table table-hover w-75 m-auto">
    <thead>
        <th>
            <td>Continent</td>
            <td>Country</td>
            <td>Travel Cost</td>
        </th>
    </thead>
    <tbody >
        {i.map((h) => (
                <ListIt key={h.id} element={h}/>
            ))
        }
    </tbody>
        </table>
        <br />
        <div className="clear-fix">
        <button className="btn btn-primary px-3 w-25 float-right" onClick={addItems}>New</button>
        </div>
            
        </>
    )
}

export default itemList
