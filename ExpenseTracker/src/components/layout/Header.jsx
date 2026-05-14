import { useState } from "react";
import AddExpenseModal from "../modal/AddExpenseModal";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between mb-6">
      <div>
        <div className="mb-1 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Expense Tracker
          </h1>
        </div>
        <h2 className="mt-1 text-gray-500 text-sm">
          Track and manage your personal expenses
        </h2>
      </div>
      <div className="flex items-center">
        <button className="bg-black text-white hover:bg-gray-800 px-3 py-2 rounded text-sm transition-all duration-200 hover:shadow-lg"
        onClick={() => setOpen(true)}>
          + Add Expense
        </button>
      </div>
      <AddExpenseModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default Header;
