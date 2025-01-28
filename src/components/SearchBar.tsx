interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by WhatsApp number or Transaction ID"
      className="border border-gray-300 rounded-lg p-2 w-full"
    />
  );
}
