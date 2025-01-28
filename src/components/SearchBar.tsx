
import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en";
import es from "@/locales/es";
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const { language } = useLanguage();
  const t = language === "en" ? en : es;

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={t.filters.placeholder}
      className="border border-gray-300 rounded-lg p-2 w-full"
    />
  );
}
