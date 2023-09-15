import { BsSquare } from "react-icons/bs";

import { useState } from "react";
import PopupDetail from "./PopupDetail";
import Import from "./Import";

const Data = [
  {
    id: 1,
    email: "chavansumit121@gmail.com",
    firstName: "sumit",
    lastName: "chavan",
    phoneNo: "9172640678",
    emailType: "RDM",
    registerDate: "10-10-2010",
  },
  {
    id: 2,
    email: "avinashKatta@gmail.com",
    firstName: "Avinash",
    lastName: "Katta",
    phoneNo: "8888880678",
    emailType: "RDM",
    registerDate: "10-01-2010",
  },
  {
    id: 3,
    email: "sudhirkasare22@gmail.com",
    firstName: "sudhir",
    lastName: "kasare",
    phoneNo: "7656543432",
    emailType: "RDM",
    registerDate: "01-11-2022",
  },
  {
    id: 4,
    email: "vaishnavinaik21@gmail.com",
    firstName: "vaishnavi",
    lastName: "naik",
    phoneNo: "6545321234",
    emailType: "RDM",
    registerDate: "05-07-2012",
  },
  {
    id: 5,
    email: "akhileshyadav45@gmail.com",
    firstName: "akhilesh",
    lastName: "yadav",
    phoneNo: "1234567890",
    emailType: "RDM",
    registerDate: "10-10-2010",
  },
  {
    id: 6,
    email: "suryasingh72@gmail.com",
    firstName: "surya",
    lastName: "singh",
    phoneNo: "8765453212",
    emailType: "RDM",
    registerDate: "11-02-2011",
  },
  {
    id: 7,
    email: "irfanshaikh18@gmail.com",
    firstName: "Irfan",
    lastName: "shaikh",
    phoneNo: "9172640678",
    emailType: "RDM",
    registerDate: "10-10-2010",
  },
  {
    id: 8,
    email: "Anilkadam44@gmail.com",
    firstName: "Anil",
    lastName: "kadam",
    phoneNo: "9890606677",
    emailType: "RDM",
    registerDate: "10-05-2010",
  },
  {
    id: 9,
    email: "subhasharekar33@gmail.com",
    firstName: "subhash",
    lastName: "arekar",
    phoneNo: "7788997766",
    emailType: "RDM",
    registerDate: "08-10-2010",
  },
  {
    id: 10,
    email: "priyankachaudhary44@gmail.com",
    firstName: "Priyanka",
    lastName: "chaudhary",
    phoneNo: "9878009877",
    emailType: "RDM",
    registerDate: "10-02-2010",
  },
];
function Table({ iClick, iTitle, setIclick }) {
  const [click, setClick] = useState(false);
  const [tableData, setTableData] = useState({});
  const [pTitle, setPtitle] = useState("");
  const [impData, setImpData] = useState(Data);
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
      return a.firstName < b.lastName ? -1 : 1;
    });
  } else if (sort == "email") {
    impData.sort(function (a, b) {
      return a.email < b.email ? -1 : 1;
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
