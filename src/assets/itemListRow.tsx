const ListIt = ({ el }) => (
    <tr key={el.id}>
        <td>{el.continent}</td>
        <td>{el.country}</td>
        <td>{el.costTravel}</td>
    </tr>
);

export default ListIt