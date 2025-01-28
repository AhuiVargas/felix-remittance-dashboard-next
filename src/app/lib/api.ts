import { Transaction } from "../types";

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const res = await fetch('/api/transactions');
  if (!res.ok) {
    throw new Error('Failed to fetch transactions');
  }
  return res.json();
};
