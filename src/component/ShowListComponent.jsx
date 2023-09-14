import { IoIosPeople } from "react-icons/io";
import { HiMiniChevronDown, HiChevronUp } from "react-icons/hi2";
import { MdOutlineCampaign } from "react-icons/md";
import { useState } from "react";
import { memo } from "react";
function ShowListComponent(listName) {
  const [audiClick, setAudiClick] = useState(false);
  let list;
  let lname;
  let Icon;
  if (listName.name == "audience") {
    list = ["All contact", "Email subscriber list"];
    lname = "Audience";
    Icon = IoIosPeople;
  } else if (listName.name == "campaign") {
    list = ["All campaign list"];
    lname = "Campaign";
    Icon = MdOutlineCampaign;
  }

  return (
    <div>
      <div className="pt-9 flex  flex-col justify-center items-center">
        <div className="bg-slate-300 w-4/5 py-2 flex flex-row justify-center items-center gap-3 rounded-sm ">
          <div className="bg-white p-1 rounded-full">
            <Icon className="text-black text-xl" />
          </div>
          <h1 className="text-lg font-mono font-normal">{lname}</h1>
          <div className="flex items-center">
            <button onClick={() => setAudiClick(!audiClick)}>
              {audiClick ? (
                <HiChevronUp className="text-md text-black" />
              ) : (
                <HiMiniChevronDown className="text-md text-black" />
              )}
            </button>
          </div>
        </div>
        {audiClick && (
          <div className="flex flex-col">
            {list.map((a, i) => (
              <div key={i}>{a}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(ShowListComponent);
