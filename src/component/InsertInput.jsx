function InsertInput({ placeholder, onchange, type }) {
  return (
    <div>
      <div>
        <input
          onChange={onchange}
          type={type}
          placeholder={placeholder}
          className="w-80  px-4 py-1 border border-gray-300 outline-none focus:border-gray-400"
        />
      </div>
    </div>
  );
}
export default InsertInput;
