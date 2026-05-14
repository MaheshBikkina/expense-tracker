import { PanelLeftClose, RefreshCcw } from "lucide-react";

function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        flex items-center justify-between
        border-b border-gray-200
        bg-white/50
        px-6 py-3
        backdrop-blur-md
      "
    >
         <div>
        <a
          href="/"
          className="
            text-lg font-bold
            tracking-tight text-gray-900
          "
        >
          &lt;MB /&gt;
        </a>
      </div>


      <div className="flex items-center gap-3">
        <button
          className="
            rounded-xl border border-gray-200
            bg-white p-2
            transition-all duration-200
            hover:bg-gray-100
          "
        >
          <RefreshCcw className="h-4 w-4 text-gray-700" />
        </button>

        <button
          className="
            flex items-center gap-2
            rounded-xl bg-black
            px-4 py-2
            text-sm font-medium text-white
            transition-all duration-200
            hover:bg-gray-800
          "
        >
          Remix
        </button>
      </div>
    </header>
  );
}

export default Navbar;
