"use client";

import { useEffect, useState } from "react";
import TransactionList from "@/components/TransactionList";
import SearchBar from "@/components/SearchBar";
import FilterMenu from "@/components/FilterMenu";
import Pagination from "@/components/Pagination";
import TransactionModal from "@/components/TransactionModal";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Transaction } from "./types";
// import { fetchTransactions } from './lib/api';

function isDateInRange(transactionDate: string, dateRange: string): boolean {
  const selectedDate = new Date(dateRange).setHours(0, 0, 0, 0);
  const transaction = new Date(transactionDate).setHours(0, 0, 0, 0);

  return transaction === selectedDate;
}

export default function HomePage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<{ status: string; dateRange: string }>({
    status: "",
    dateRange: "",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const res = await fetch("/api/transactions");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setTransactions(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch transactions.");
      } finally {
        setIsLoading(false);
      }
    };

    loadTransactions();
  }, []);

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.sender_whatsapp.includes(searchQuery) ||
      tx.receiver_whatsapp.includes(searchQuery) ||
      tx.transaction_id.includes(searchQuery);

    const matchesFilter =
      (!filter.status || tx.status === filter.status) &&
      (!filter.dateRange || isDateInRange(tx.date, filter.dateRange));

    return matchesSearch && matchesFilter;
  });

  if (isLoading) {
    return <p className="text-center mt-10">Loading transactions...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterMenu value={filter} onChange={setFilter} />
      </div>

      <ErrorBoundary
        hasError={filteredTransactions.length === 0}
        errorMessage="No data found"
      >
        <TransactionList
          transactions={filteredTransactions.slice(
            (currentPage - 1) * 10,
            currentPage * 10
          )}
          onTransactionClick={setSelectedTransaction}
        />
        <Pagination
          currentPage={currentPage}
          totalItems={filteredTransactions.length}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
        />
      </ErrorBoundary>

      {selectedTransaction && (
        <TransactionModal
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
        />
      )}
    </div>
  );
}
