function InsertInput({ placeholder, onchange }) {
  return (
    <div>
      <div>
        <input
          onChange={onchange}
          placeholder={placeholder}
          className="w-80  px-4 py-1 border border-gray-300 outline-none focus:border-gray-400"
          type="text"
        />
      </div>
    </div>
  );
}
export default InsertInput;
