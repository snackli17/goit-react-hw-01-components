import PropTypes from 'prop-types';
import css from "./Transactions.module.css";




export const TransactionsHistory = ({items  }) => {
  return (
<table table className={css.transactions}>
  <thead className={css.headTable}>
    <tr className={css.valueTable}>
      <th className={css.nameRow}>Type</th>
      <th className={css.nameRow}>Amount</th>
      <th className={css.nameRow}>Currency</th>
    </tr>
  </thead>

  <tbody>
   {items.map(item => (
        <tr key={item.id} className={css.valueTable}>
          <td className={css.value}>{item.type}</td>
          <td className={css.value}>{item.amount}</td>
          <td className={css.value}>{item.currency}</td>
        </tr>
      ))}
  </tbody>
</table>

  )
}

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};










