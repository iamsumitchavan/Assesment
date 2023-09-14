import Button from "./Button";
function Input({ value, title }) {
  function handleInputChange(event) {
    value = event.target.value;
  }
  return (
    <div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <div className="w-28">
          <span className="font-serif font-normal">{title}</span>
        </div>

        <div className="w-40">
          <input
            onChange={handleInputChange}
            value={value}
            className="bg-slate-200 py-1 w-36 rounded-sm text-sm px-2 text-center"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
