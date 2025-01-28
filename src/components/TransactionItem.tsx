import { Transaction } from "@/app/types";
import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en";
import es from "@/locales/es";

interface TransactionItemProps {
  transaction: Transaction;
  onClick: () => void;
  layout: "table" | "card";
}

export default function TransactionItem({
  transaction,
  onClick,
  layout,
}: TransactionItemProps) {
  const { language } = useLanguage();
  const t = language === "en" ? en : es;

  if (layout === "table") {
    return (
      <tr
        className="cursor-pointer hover:bg-gray-100 text-center"
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
      role="article"
      className="border-b p-4 flex flex-col gap-2 cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      <div>
        <strong>{t.transactions.sender}:</strong> {transaction.sender_whatsapp}
      </div>
      <div>
        <strong>{t.transactions.receiver}:</strong>{" "}
        {transaction.receiver_whatsapp}
      </div>
      <div>
        <strong>{t.transactions.amount_sent}:</strong> $
        {transaction.amount_sent.toFixed(2)}
      </div>
      <div>
        <strong>{t.transactions.status}:</strong> {transaction.status}
      </div>
      <div>
        <strong>{t.transactions.date}:</strong>{" "}
        {new Date(transaction.date).toLocaleString()}
      </div>
    </div>
  );
}
