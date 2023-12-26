import moneyFormater from "../adjusting/moneyFormater"

const listIt = ({element}) => {
    return (
        <tr >
            <td>{ element.continent }</td>
            <td>{ element.country }</td>
            <td>{ moneyFormater.format(element.costTravel) }</td>
        </tr>
    )
}

export default listIt