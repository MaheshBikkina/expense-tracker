import { X, ChevronDown } from "lucide-react";

function AddExpenseModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40
        backdrop-blur-[2px]
      "
    >
      {/* Modal */}
      <div
        className="
          w-full max-w-xl
          rounded-3xl bg-white
          p-6 shadow-2xl
        "
      >
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Add New Expense
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Enter the details of your new expense.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-lg p-2
              transition-all duration-150
              hover:bg-gray-100
            "
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>

        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* Amount */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Amount
            </label>

            <input
              type="number"
              placeholder="0.00"
              className="
                h-12 w-full rounded-xl
                border border-gray-200
                bg-white px-4
                outline-none
                transition-all duration-150
                focus:ring-2 focus:ring-black
              "
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Category
            </label>

            <button
              className="
                flex h-12 w-full items-center justify-between
                rounded-xl border border-gray-200
                bg-white px-4
                text-gray-500
              "
            >
              Select a category

              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Description
            </label>

            <textarea
              placeholder="What was this expense for?"
              className="
                min-h-[100px] w-full rounded-xl
                border border-gray-200
                bg-white p-4
                outline-none
                resize-none
                transition-all duration-150
                focus:ring-2 focus:ring-black
              "
            />
          </div>

          {/* Date */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Date
            </label>

            <input
              type="date"
              className="
                h-12 w-full rounded-xl
                border border-gray-200
                bg-white px-4
                outline-none
                transition-all duration-150
                focus:ring-2 focus:ring-black
              "
            />
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-end gap-3">

          <button
            onClick={onClose}
            className="
              rounded-xl border border-gray-200
              px-5 py-3 text-sm font-medium
              transition-all duration-150
              hover:bg-gray-100
            "
          >
            Cancel
          </button>

          <button
            className="
              rounded-xl bg-black
              px-5 py-3 text-sm
              font-medium text-white
              transition-all duration-150
              hover:bg-gray-800
            "
          >
            Add Expense
          </button>

        </div>
      </div>
    </div>
  );
}

export default AddExpenseModal;