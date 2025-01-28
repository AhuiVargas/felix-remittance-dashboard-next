import TransactionItem from './TransactionItem';
import { Transaction } from '@/app/types';

interface TransactionListProps {
  transactions: Transaction[];
  onTransactionClick: (transaction: Transaction) => void;
}

export default function TransactionList({ transactions, onTransactionClick }: TransactionListProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="hidden sm:table w-full table-auto text-sm border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Sender</th>
            <th className="p-2">Receiver</th>
            <th className="p-2">Amount Sent</th>
            <th className="p-2">Amount Received</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.transaction_id}
              transaction={transaction}
              onClick={() => onTransactionClick(transaction)}
              layout="table"
            />
          ))}
        </tbody>
      </table>

      <div className="sm:hidden">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.transaction_id}
            transaction={transaction}
            onClick={() => onTransactionClick(transaction)}
            layout="card"
          />
        ))}
      </div>
    </div>
  );
}
