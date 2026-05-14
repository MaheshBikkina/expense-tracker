import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div
      className="
    flex items-center gap-3
    h-10
    width-full
    flex-1
    rounded-2xl
    bg-gray-100
    px-5
    transition-all duration-200

    focus-within:ring-2
    focus-within:ring-gray-300
  "
    >
      <Search className="h-5 w-5 text-gray-500" />

      <input
        type="text"
        placeholder="Search expenses..."
        className="
      w-full
      bg-transparent
      text-sm text-gray-700
      placeholder:text-gray-500
      outline-none
      border-none
      ring-0
      focus:outline-gray-400
      focus:ring-0
    "
      />
    </div>
  );
}

export default SearchBar;
