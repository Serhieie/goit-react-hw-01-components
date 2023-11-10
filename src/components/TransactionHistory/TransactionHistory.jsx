import PropTypes from 'prop-types';
import OneTransaction from '../OneTransaction';
import { Table } from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  const validTransactions = transactions.filter(
    transaction =>
      transaction &&
      transaction.id &&
      transaction.type &&
      transaction.amount &&
      transaction.currency
  );

  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {validTransactions.map(transaction =>
          transaction ? (
            <OneTransaction
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ) : null
        )}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
