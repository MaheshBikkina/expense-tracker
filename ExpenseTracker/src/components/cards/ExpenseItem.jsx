import Button from "../ui/Button";
// Tailwind color utility classes

const categoryColors = {
  food: {
    bg: "bg-red-100",
    text: "text-red-700",
  },

  transportation: {
    bg: "bg-teal-100",
    text: "text-teal-700",
  },

  entertainment: {
    bg: "bg-blue-100",
    text: "text-blue-700",
  },

  shopping: {
    bg: "bg-green-100",
    text: "text-green-700",
  },

  utilities: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },

  health: {
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
};


function ExpenseItem() {
  return (
    <div className="flex flex-row justify-between min-h-[70px] border border-gray-300 rounded-2xl px-4 py-2 transition-all duration-200 hover:shadow-lg">
      <div className="space-y-2">
        <div>
          <Button ></Button>
          <span className="text-[10px] text-gray-500 px-2"> May 12, 2026</span>
        </div>

        <div>
          <h2 className="text-[12px] tracking-tight">Went to Bangalore</h2>
        </div>
      </div>
      <div className="flex items-center">
        <h1 className="text-sm text-black tracking-tight font-semibold ">$150.00</h1>
      </div>
    </div>
  );
}

export default ExpenseItem;
