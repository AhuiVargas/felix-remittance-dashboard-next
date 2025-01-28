import { Transaction } from "@/app/types";

interface TransactionItemProps {
  transaction: Transaction;
  onClick: () => void;
  layout: 'table' | 'card';
}

export default function TransactionItem({ transaction, onClick, layout }: TransactionItemProps) {
  if (layout === 'table') {
    return (
      <tr
        className="cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <td className="p-2">{transaction.sender_whatsapp}</td>
        <td className="p-2">{transaction.receiver_whatsapp}</td>
        <td className="p-2">${transaction.amount_sent.toFixed(2)}</td>
        <td className="p-2">{transaction.amount_received.toFixed(2)} MXN</td>
        <td className="p-2">{transaction.status}</td>
        <td className="p-2">{new Date(transaction.date).toLocaleString()}</td>
      </tr>
    );
  }

  return (
    <div
      className="border-b p-4 flex flex-col gap-2 cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      <div>
        <strong>Sender:</strong> {transaction.sender_whatsapp}
      </div>
      <div>
        <strong>Receiver:</strong> {transaction.receiver_whatsapp}
      </div>
      <div>
        <strong>Amount Sent:</strong> ${transaction.amount_sent.toFixed(2)}
      </div>
      <div>
        <strong>Status:</strong> {transaction.status}
      </div>
      <div>
        <strong>Date:</strong> {new Date(transaction.date).toLocaleString()}
      </div>
    </div>
  );
}
