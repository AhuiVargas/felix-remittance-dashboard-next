import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import TransactionList from "./TransactionList";
import { Transaction } from "@/app/types";
import { LanguageProvider } from "@/context/LanguageContext";

const mockTransactions: Transaction[] = [
  {
    transaction_id: "FXP123456",
    sender_whatsapp: "+12025550123",
    receiver_whatsapp: "+50255512345",
    amount_sent: 300,
    exchange_rate: 19.5,
    amount_received: 5850,
    status: "Completed",
    payment_method: "Cash Pickup",
    date: "2024-01-15T14:45:00Z",
  },
  {
    transaction_id: "FXP123457",
    sender_whatsapp: "+12025550124",
    receiver_whatsapp: "+50255512346",
    amount_sent: 500,
    exchange_rate: 19.0,
    amount_received: 9500,
    status: "Pending",
    payment_method: "Bank Deposit",
    date: "2024-01-16T10:30:00Z",
  },
];

describe("TransactionList", () => {
  const mockOnTransactionClick = jest.fn();

  const renderWithProvider = (ui: React.ReactElement) => {
    return render(<LanguageProvider>{ui}</LanguageProvider>);
  };

  it("renders the table layout with transactions", () => {
    renderWithProvider(
      <TransactionList
        transactions={mockTransactions}
        onTransactionClick={mockOnTransactionClick}
      />
    );

    const table = screen.getByRole("table");
    expect(within(table).getByText("Sender")).toBeInTheDocument();
    expect(within(table).getByText("+12025550123")).toBeInTheDocument();
  });

  it("renders the card layout for smaller screens", () => {
    window.innerWidth = 400;

    const t = {
      transactions: {
        sender: "Sender",
        receiver: "Receiver",
        amount_sent: "Amount Sent",
        status: "Status",
        date: "Date",
      },
    };

    renderWithProvider(
      <TransactionList
        transactions={mockTransactions}
        onTransactionClick={mockOnTransactionClick}
      />
    );

    const cardContainer = screen.getByRole("region", {
      name: "mobile-transaction-cards",
    });

    const firstCard = within(cardContainer).getAllByRole("article")[0];
    expect(
      within(firstCard).getByText(`${t.transactions.sender}:`)
    ).toBeInTheDocument();
    expect(within(firstCard).getByText("+12025550123")).toBeInTheDocument();
    expect(
      within(firstCard).getByText(`${t.transactions.receiver}:`)
    ).toBeInTheDocument();
    expect(within(firstCard).getByText("+50255512345")).toBeInTheDocument();
  });

  it("handles onClick when a transaction is clicked", () => {
    renderWithProvider(
      <TransactionList
        transactions={mockTransactions}
        onTransactionClick={mockOnTransactionClick}
      />
    );

    const clickableElements = screen.getAllByText("+12025550123");
    fireEvent.click(clickableElements[0]);

    expect(mockOnTransactionClick).toHaveBeenCalledWith(mockTransactions[0]);
  });
});
