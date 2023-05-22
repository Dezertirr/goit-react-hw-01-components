import PropTypes from 'prop-types';

export default function Transactions ({transacions}) {
    return (
        <section>
            <table>
            <tr>
                <td>Type</td>
                <td>Amount</td>
                <td>Currency</td>
            </tr>
            <tr>
            {transacions.map(({type, amount, currency}) =>(
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
            ))}
            </tr>
            </table>
        </section>
    )
}