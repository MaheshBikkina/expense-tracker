import Header from "./Header.jsx";
import ExpenseCard from "../cards/ExpenseCard";
import MonthlySpendingChart from "../charts/MonthlySpendingChart.jsx";
import RecentExpensesCard from "../cards/RecentExpensesCard";
import Navbar from "../navbar/Navbar.jsx";
import ExpenseTable from "../table/ExpenseTable.jsx";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      <div className="bg-white max-w-6xl mx-auto px-6 py-6">
        <div className="p-4">
          <Header />
          <ExpenseCard />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <MonthlySpendingChart />
            <RecentExpensesCard />
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
          <ExpenseTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;


