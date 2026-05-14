import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

const options = [
  "All categories",
  "Transportation",
  "Food",
  "Entertainment",
  "Shopping",
  "Utilities",
  "Health",
];

function CategorySelect() {
  const [selected, setSelected] = useState("All categories");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-62">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex h-10 w-full items-center justify-between
          rounded-2xl bg-gray-100
          px-5 text-sm text-gray-900
          transition-all duration-200
          focus-within:ring-2
         focus-within:ring-gray-300
           "
        // "
        // flex items-center gap-3
        // h-10
        // rounded-2xl
        // bg-gray-100
        // px-5
        // transition-all duration-200

        // focus-within:ring-2
        // focus-within:ring-gray-300
        // "
      >
        {selected}

        <ChevronDown className="h-5 w-5 text-gray-500" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute left-0 top-12 z-50
            w-full max-h-[220px] overflow-y-auto
            scrollbar-hide
            rounded-2xl border-2 border-gray-300
            bg-white shadow-xl
          "
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="
                flex w-full items-center justify-between
                px-5 py-2 text-left
                text-sm text-gray-900
                border-b border-gray-200
                transition-colors duration-150
                hover:bg-gray-100
              "
            >
              {option}

              {selected === option && (
                <Check className="h-5 w-5 text-gray-700" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySelect;
