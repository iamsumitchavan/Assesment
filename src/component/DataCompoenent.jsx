import { useCallback, useEffect, useState } from "react";
import Table from "./Table";
import { memo } from "react";

function DataComponent() {
  const [iClick, setIclick] = useState(false);
  const [iTitle, setItitle] = useState("");

  const handleButtonClick = () => {
    setIclick(!iClick);
    setItitle("import");
  };

  return (
    <div
      style={{ width: ["1098px"], height: ["867px"] }}
      className=" bg-white "
    >
      <div>
        <div className="w-full flex justify-end py-10 px-28">
          <button
            onClick={handleButtonClick}
            className="bg-slate-200 text-black font-mono py-2 w-36 rounded-lg"
          >
            Import contact
          </button>
        </div>

        <div className="flex justify-center">
          <hr className="w-4/5 text-gray-700" />
        </div>

        <div>
          <Table iClick={iClick} iTitle={iTitle} setIclick={setIclick} />
        </div>
      </div>
    </div>
  );
}

export default memo(DataComponent);
