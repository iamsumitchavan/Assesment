import { BsSquare } from "react-icons/bs";
import { data } from "./DummyData";
import { useState } from "react";
import PopupDetail from "./PopupDetail";
import Import from "./Import";
function Table({ iClick, iTitle, setIclick }) {
  const [click, setClick] = useState(false);
  const [tableData, setTableData] = useState({});
  const [pTitle, setPtitle] = useState("");
  const [impData, setImpData] = useState(data);
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = impData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(impData.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  if (click && pTitle == "tableRow") {
    return (
      <PopupDetail
        setClick={setClick}
        tableData={tableData}
        setImpData={setImpData}
        impData={impData}
      />
    );
  } else if (iClick && iTitle == "import") {
    return <Import setIclick={setIclick} impData={impData} />;
  }

  if (sort == "name") {
    impData.sort(function (a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    });
  }

  if (sort == "email") {
    impData.sort(function (a, b) {
      if (a.email < b.email) {
        return -1;
      }
      if (a.email > b.email) {
        return 1;
      }
      return 0;
    });
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function NextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-5 px-5 w-4/5 justify-end border border-gray-500">
        <select
          className="border border-gray-200 py-1 w-40 outline-none"
          value={sort}
          onChange={handleSortChange}
          name=""
          id=""
        >
          <option value="default">sort by default</option>
          <option value="name">sort by name</option>
          <option value="email">sort by email</option>
        </select>
      </div>
      <div className="border border-gray-500 " style={{ width: ["880px"] }}>
        <table>
          <tr style={{ width: ["880px"] }} className="">
            <th className="w-7 border"></th>
            <th className="px-3 py-4 w-1/6 border text-sm">Email Address</th>
            <th className="px-3 py-4 border text-sm w-1/6">First name</th>
            <th className="px-3 py-4 border text-sm w-1/6">Last name</th>
            <th className="px-3 py-4 border text-sm w-1/6">Phone no.</th>
            <th className="px-3 py-4 border text-sm w-1/6">Eamil type</th>
            <th className="px-3 py-4 border text-sm w-1/5">Register Date</th>
          </tr>

          <tbody>
            {records.map((d, i) => {
              return (
                <tr
                  onClick={() => {
                    setClick(!click);
                    setTableData(d);
                    setPtitle("tableRow");
                  }}
                  key={i}
                >
                  <td className="px-3">
                    <BsSquare className="text-md" values={d.id} />
                  </td>
                  <td className="px-3 py-4 w-1/6 border text-sm">{d.email}</td>
                  <td className=" text-center py-4 border text-sm ">
                    {d.firstName}
                  </td>
                  <td className=" text-center py-4 border text-sm ">
                    {d.lastName}
                  </td>
                  <td className=" text-center py-4 border text-sm ">
                    {d.phoneNo}
                  </td>
                  <td className=" text-center py-4 border text-sm ">
                    {d.emailType}
                  </td>
                  <td className=" text-center py-4 border text-sm ">
                    {d.registerDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div>
          <a
            className="hover:cursor-pointer py-1 px-3 bg-slate-400 text-black font-bold"
            onClick={prePage}
            href="#"
          >
            Prev
          </a>
        </div>
        <div className="flex gap-2 py-5">
          {numbers.map((n) => (
            <a
              className={
                currentPage == n
                  ? " hover:cursor-pointer py-1 px-3 bg-black text-white "
                  : "hover:cursor-pointer py-1 px-3 bg-slate-300 text-black "
              }
              onClick={() => changePage(n)}
            >
              {n}
            </a>
          ))}
        </div>
        <div>
          <a
            className="hover:cursor-pointer py-1 px-3 bg-slate-400 text-black font-bold"
            onClick={NextPage}
            href="#"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}

export default Table;
