import { AiOutlineMail } from "react-icons/ai";
import { memo } from "react";
import ShowListComponent from "./ShowListComponent";

function SideBar() {
  return (
    <div className="">
      <div
        style={{ width: ["262px"], height: ["867px"] }}
        className="bg-white border border-l"
      >
        <div className="pt-10">
          <div className="bg-slate-300 w-full py-2 flex flex-row justify-center items-center gap-3 ">
            <div className="bg-white p-1 rounded-full">
              <AiOutlineMail className="text-black text-xl" />
            </div>
            <h1 className="text-2xl text-black font-mono font-bold">
              Email Module
            </h1>
          </div>
        </div>
        <div>
          <ShowListComponent name="audience" />
        </div>
        <div>
          <ShowListComponent name="campaign" />
        </div>
      </div>
    </div>
  );
}

export default memo(SideBar);
