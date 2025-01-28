import { Transaction } from "@/app/types";

interface TransactionModalProps {
  transaction: Transaction | null;
  onClose: () => void;
}

export default function TransactionModal({ transaction, onClose }: TransactionModalProps) {
  if (!transaction) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Transaction Details</h2>
        <p><strong>ID:</strong> {transaction.transaction_id}</p>
        <p><strong>Sender:</strong> {transaction.sender_whatsapp}</p>
        <p><strong>Receiver:</strong> {transaction.receiver_whatsapp}</p>
        <p><strong>Amount Sent:</strong> ${transaction.amount_sent.toFixed(2)} USD</p>
        <p><strong>Exchange Rate:</strong> {transaction.exchange_rate}</p>
        <p><strong>Amount Received:</strong> {transaction.amount_received.toFixed(2)} MXN</p>
        <p><strong>Status:</strong> {transaction.status}</p>
        <p><strong>Payment Method:</strong> {transaction.payment_method}</p>
        <p><strong>Date:</strong> {new Date(transaction.date).toLocaleString()}</p>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
