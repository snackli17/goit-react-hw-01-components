




// export const TransactionList = ({ transactions }) => (
//     {transactions.map(transaction => (
//       <TransactionsHistory
//         currency={transaction.currency}
//         type={transaction.type}
//         key={transaction.id}
//         amount={transaction.amount}
//       ></TransactionsHistory>
//     ))}
// );


export const TransactionsHistory = ({type, amount, currency }) => {
  return (
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

  )
}











