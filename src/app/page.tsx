'use client';

import { useEffect, useState } from 'react';
import TransactionList from '@/components/TransactionList';
import SearchBar from '@/components/SearchBar';
import FilterMenu from '@/components/FilterMenu';
import Pagination from '@/components/Pagination';
import TransactionModal from '@/components/TransactionModal';
import { Transaction } from './types';
import { fetchTransactions } from './lib/api';

export default function HomePage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filter, setFilter] = useState<{ status: string; dateRange: string }>({ status: '', dateRange: '' });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    fetchTransactions().then(setTransactions);
  }, []);

  function isDateInRange(transactionDate: string, dateRange: string): boolean {
    const selectedDate = new Date(dateRange).setHours(0, 0, 0, 0);
    const transaction = new Date(transactionDate).setHours(0, 0, 0, 0);
  
    return transaction === selectedDate;
  }

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.sender_whatsapp.includes(searchQuery) ||
      tx.receiver_whatsapp.includes(searchQuery) ||
      tx.transaction_id.includes(searchQuery);
  
    const matchesFilter = (!filter.status || tx.status === filter.status) &&
      (!filter.dateRange || isDateInRange(tx.date, filter.dateRange));
  
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterMenu value={filter} onChange={setFilter} />
      </div>

      <TransactionList
        transactions={filteredTransactions.slice((currentPage - 1) * 10, currentPage * 10)}
        onTransactionClick={setSelectedTransaction}
      />

      <Pagination
        currentPage={currentPage}
        totalItems={filteredTransactions.length}
        itemsPerPage={10}
        onPageChange={setCurrentPage}
      />

      {selectedTransaction && (
        <TransactionModal
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
        />
      )}
    </div>
  );
}
