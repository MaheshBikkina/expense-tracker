import ExpenseItem from "./ExpenseItem";

function RecentExpensesCard() {
  return (
    <div
      className="
        rounded-3xl border border-gray-200
        bg-white p-8 min-h-10 transition-all duration-200 hover:shadow-lg
      "
    >
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-900">
          Recent Expenses
        </h2>

        <p className="mt-1 text-gray-500 text-sm">Your latest transactions</p>
      </div>
      <div className="space-y-4">
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
      </div>
    </div>
  );
}

export default RecentExpensesCard;
