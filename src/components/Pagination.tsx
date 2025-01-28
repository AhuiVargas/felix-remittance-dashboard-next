import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en";
import es from "@/locales/es";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const { language } = useLanguage();
  const t = language === "en" ? en : es;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-l-lg bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300"
      >
        {t.pagination.prev}
      </button>
      <span className="px-4 py-2 border-t border-b bg-white">
        {t.pagination.page} {currentPage} {t.pagination.of} {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-r-lg bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300"
      >
        {t.pagination.next}
      </button>
    </div>
  );
}
