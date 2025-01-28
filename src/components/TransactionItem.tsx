import { Transaction } from "@/app/types";

interface TransactionItemProps {
  transaction: Transaction;
  onClick: () => void;
}

export default function TransactionItem({ transaction, onClick }: TransactionItemProps) {
  return (
    <tr
      className="border-t cursor-pointer hover:bg-gray-100 text-center"
      onClick={onClick}
    >
      <td className="p-2">{transaction.sender_whatsapp}</td>
      <td className="p-2">{transaction.receiver_whatsapp}</td>
      <td className="p-2">${transaction.amount_sent.toFixed(2)} USD</td>
      <td className="p-2">${transaction.amount_received.toFixed(2)} MXN</td>
      <td className="p-2">{transaction.status}</td>
      <td className="p-2">{new Date(transaction.date).toLocaleString()}</td>
    </tr>
  );
}
