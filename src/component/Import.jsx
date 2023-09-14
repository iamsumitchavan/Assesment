import { memo, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import InsertInput from "./InsertInput";
import Button from "./Button";
import { motion } from "framer-motion";
function Import({ setIclick, impData }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cellNo, setCellNo] = useState();
  const [date, setDate] = useState();
  const [eType, setEtype] = useState();
  const [id, setId] = useState();

  function handleInsertDetails() {
    if (email && firstName && lastName && cellNo && date && eType && id) {
      impData.push({
        id: id,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNo: cellNo,
        emailType: eType,
        registerDate: date,
      });

      setIclick(false);
    }
  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 ">
        <div className="flex h-screen justify-center items-center w-screen ml-10">
          <div
            className="border shadow-2xl rounded-t-md bg-gray-100 "
            style={{
              width: ["900px"],
              height: ["459px"],
              top: ["123px"],
              left: ["330px"],
            }}
          >
            <div className="py-3 flex justify-end">
              <div className="flex justify-between w-3/5 items-center">
                <div className="">
                  <h4 className="text-md">Edit</h4>
                </div>
                <div>
                  <button onClick={() => setIclick(false)} className=" ">
                    <CiCircleRemove className="text-4xl text-gray-500 " />
                  </button>
                </div>
              </div>
            </div>
            <hr className="border border-gray-500" />
            <div className="flex justify-between px-20">
              <div className="mt-8 ml-3 flex flex-col justify-center items-center gap-6">
                <InsertInput
                  onchange={(event) => setFirstName(event.target.value)}
                  placeholder="Enter first name"
                />
                <InsertInput
                  onchange={(event) => setLastName(event.target.value)}
                  placeholder="Enter Last name"
                />
                <InsertInput
                  onchange={(event) => setEmail(event.target.value)}
                  placeholder="Enter Email"
                />
                <InsertInput
                  onchange={(event) => setCellNo(event.target.value)}
                  placeholder="Enter mobile no"
                />
              </div>
              <div className="mt-8 ml-3 flex flex-col gap-6 justify-center items-center">
                <InsertInput
                  onchange={(event) => setDate(event.target.value)}
                  placeholder="Enter Date"
                />
                <InsertInput
                  onchange={(event) => setEtype(event.target.value)}
                  placeholder="Enter email Type"
                />
                <InsertInput
                  onchange={(event) => setId(event.target.value)}
                  placeholder="Enter Id"
                />
              </div>
            </div>
            <div className="flex flex-row mt-10 justify-center space-x-10 ">
              <div>
                <Button onclick={handleInsertDetails} title="Insert" />
              </div>
              <div>
                <Button onclick={() => setIclick(false)} title="cancel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Import;
