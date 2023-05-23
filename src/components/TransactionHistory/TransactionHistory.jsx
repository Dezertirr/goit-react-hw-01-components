import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

export default function Transactions ({transacions}) {
    return (
        <section>
            <table className={styles.tableTrans}>
            <tbody>
            <tr>
                <td className={styles.cellType}>Type</td>
                <td className={styles.cellType}>Amount</td>
                <td className={styles.cellType}>Currency</td>
            </tr>
            {transacions.map(({type, amount, currency, id}) =>(
            <tr key={id}>
                <td className={styles.cellValue}>{type}</td>
                <td className={styles.cellValue}>{amount}</td>
                <td className={styles.cellValue}>{currency}</td>
            </tr>
            ))}
            </tbody>
            </table>
        </section>
    )
}

Transactions.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
  };