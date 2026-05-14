import SearchBar from "./SearchBar";
import FilterSelect from "./FilterSelect";
import ExpenseTableRow from "./ExpenseTableRow";

function ExpenseTable() {
  return (
    <div
      className="
        rounded-3xl border border-gray-200
        bg-white p-8
        transition-all duration-200
        hover:shadow-md
      "
    >
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">All Expenses</h2>

        <p className="mt-1 text-sm text-gray-500">
          Manage and view all your expenses
        </p>
      </div>

      {/* Search + Filter */}
      <div className="mb-6 flex items-center gap-4">
        <SearchBar />
        <FilterSelect />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* Header */}
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 pl-4 text-left text-sm font-medium text-gray-700">
                  Date
                </th>

                <th className="py-2  text-left text-sm font-medium text-gray-700">
                  Description
                </th>

                <th className="py-2 pr-2 text-left text-sm font-medium text-gray-700">
                  Category
                </th>

                <th className="py-2 text-right text-sm font-medium text-gray-700">
                  Amount
                </th>

                <th className="py-2 pr-10 text-right text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              <ExpenseTableRow />
              <ExpenseTableRow />
              <ExpenseTableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTable;
