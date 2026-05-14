import { Pencil, Trash2 } from "lucide-react";
import Button from "../ui/Button";

function ExpenseTableRow() {
  return (
    <tr
      className="
        border-b border-gray-100
        transition-colors duration-150
        hover:bg-gray-50
      "
    >
      {/* Date */}
      <td className="py-2 pl-4 align-middle text-sm text-gray-900">
        Jan 27, 2025
      </td>

      {/* Description */}
      <td className="py-2 align-middle text-sm text-gray-900">
        Lunch at restaurant
      </td>

      {/* Category */}
      <td className="py-2 align-middle">
        <Button />
      </td>

      {/* Amount */}
      <td
        className="
          py-2 pr-2 align-middle
          text-right text-sm
          font-medium text-gray-900
        "
      >
        $45.50
      </td>

      {/* Actions */}
      <td className="px-2 pr-4 align-middle">
        <div className="flex items-center justify-end gap-2">

          <button
            className="
              flex h-6 w-6 items-center justify-center
              rounded-xl border border-gray-200
              bg-white
              transition-all duration-150
              hover:bg-gray-100
            "
          >
            <Pencil className="h-4 w-4 text-gray-700" />
          </button>

          <button
            className="
              flex h-6 w-6 items-center justify-center
              rounded-xl border border-gray-200
              bg-white
              transition-all duration-150
              hover:bg-gray-100
            "
          >
            <Trash2 className="h-4 w-4 text-gray-700" />
          </button>

        </div>
      </td>
    </tr>
  );
}

export default ExpenseTableRow;