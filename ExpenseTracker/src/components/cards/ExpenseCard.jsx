import { DollarSign, Calendar, TrendingUp } from "lucide-react";
// src/config/statsConfig.js

export const statsConfig = [
  {
    id: 1,
    title: 'Total Expenses',
    amount: '$1168.73',
    subtitle: 'Across 14 transactions',
    icon: DollarSign,
  },

  {
    id: 2,
    title: 'This Month',
    amount: '$0.00',
    subtitle: '0 transactions this month',
    icon: Calendar,
  },

  {
    id: 3,
    title: 'Average Expense',
    amount: '$83.48',
    subtitle: 'Per transaction',
    icon: TrendingUp,
  },
]


function ExpenseCard() {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {statsConfig.map((expense, index) => {
            const Icon = expense.icon;
            return (
                <div key={index} className="flex flex-col justify-between border border-gray-200 rounded-3xl p-8 min-h-[150px] transition-all duration-200 hover:shadow-lg">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{expense.title}</h3>
                    <Icon className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex flex-col items-start justify-between">
                <h1 className="text-md font-semibold tracking-tight text-black">{expense.amount}</h1>
                <p className="mt-1 text-gray-500 text-sm">{expense.subtitle}</p>
            </div>
            </div>
            )}
        )}
    </div>
  );
}

export default ExpenseCard;
