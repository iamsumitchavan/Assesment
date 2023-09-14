import { memo } from "react";

function Button({ title, onclick }) {
  return (
    <div>
      <div>
        <button
          onClick={onclick}
          className="py-2 w-28 px-2 bg-slate-300 text-black text-sm font-bold rounded-sm"
        >
          {title}
        </button>
      </div>
    </div>
  );
}

export default memo(Button);
