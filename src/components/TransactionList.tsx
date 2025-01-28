import TransactionItem from './TransactionItem';
import { Transaction } from '@/app/types';
import { useLanguage } from '@/context/LanguageContext';
import en from '@/locales/en'
import es from '@/locales/es'
interface TransactionListProps {
  transactions: Transaction[];
  onTransactionClick: (transaction: Transaction) => void;
}

export default function TransactionList({ transactions, onTransactionClick }: TransactionListProps) {
  const { language } = useLanguage();
  const t = language === 'en' ? en : es;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="hidden sm:table w-full table-auto text-sm border-collapse">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="p-2">{t.transactions.sender}</th>
            <th className="p-2">{t.transactions.receiver}</th>
            <th className="p-2">{t.transactions.amount_sent}</th>
            <th className="p-2">{t.transactions.amount_received}</th>
            <th className="p-2">{t.transactions.status}</th>
            <th className="p-2">{t.transactions.date}</th>
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

      <div className="sm:hidden" role="region" aria-label="mobile-transaction-cards">
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
