interface FilterMenuProps {
  value: { status: string; dateRange: string };
  onChange: (value: { status: string; dateRange: string }) => void;
}

export default function FilterMenu({ value, onChange }: FilterMenuProps) {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...value, status: e.target.value });
  };

  const handleDateRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, dateRange: e.target.value });
  };

  return (
    <div className="flex space-x-4">
      <select
        value={value.status}
        onChange={handleStatusChange}
        className="border border-gray-300 rounded-lg p-2"
      >
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Failed">Failed</option>
      </select>

      <input
        type="date"
        value={value.dateRange}
        onChange={handleDateRangeChange}
        className="border border-gray-300 rounded-lg p-2"
      />
    </div>
  );
}
