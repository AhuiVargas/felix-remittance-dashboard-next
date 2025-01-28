export type Transaction = {
  transaction_id: string;
  sender_whatsapp: string;
  receiver_whatsapp: string;
  amount_sent: number;
  exchange_rate: number;
  amount_received: number;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Failed';
  payment_method: 'Bank Deposit' | 'Cash Pickup' | 'Mobile Wallet';
  date: string;
};
