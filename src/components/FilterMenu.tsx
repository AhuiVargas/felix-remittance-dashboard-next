
import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en";
import es from "@/locales/es";
interface FilterMenuProps {
  value: { status: string; dateRange: string };
  onChange: (value: { status: string; dateRange: string }) => void;
}

export default function FilterMenu({ value, onChange }: FilterMenuProps) {
  const { language } = useLanguage();
  const t = language === "en" ? en : es;

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
        <option value="">{t.filters.all_statuses}</option>
        <option value="Pending">{t.filters.pending}</option>
        <option value="In Progress">{t.filters.in_progress}</option>
        <option value="Completed">{t.filters.completed}</option>
        <option value="Failed">{t.filters.failed}</option>
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
