import { CiCircleRemove } from "react-icons/ci";
import Input from "./Input";
import Button from "./Button";
import { easeInOut, motion } from "framer-motion";
function PopupDetail({ setClick, tableData, setImpData, impData }) {
  if (!tableData) {
    return <div>loading...</div>;
  }

  function handleRemoveElement() {
    let updatedData = impData.filter((d) => d.id != tableData.id);
    setImpData(updatedData);
    setClick(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: easeInOut, duration: 1 }}
      className="fixed top-0 left-0 right-0 bottom-0 "
    >
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
                <button onClick={() => setClick(false)} className=" ">
                  <CiCircleRemove className="text-4xl text-gray-500 " />
                </button>
              </div>
            </div>
          </div>
          <hr className="border border-gray-500" />
          <div className="flex justify-between px-20">
            <div className="mt-8 ml-3 flex flex-col justify-center items-center gap-6">
              <Input title="First Name" value={tableData.firstName} />
              <Input title="Last Name" value={tableData.lastName} />
              <Input title="Email Address" value={tableData.email} />
              <Input title="Phone No." value={tableData.phoneNo} />
            </div>
            <div className="mt-8 ml-3 flex flex-col gap-6 justify-center items-center">
              <Input title="Email Category" value={tableData.emailType} />
              <Input title="Register Date" value={tableData.registerDate} />
              <Input title="Id No." value={tableData.id} />
              <Input title="Company." value="Apple" />
            </div>
          </div>
          <div className="flex flex-row mt-10 justify-center space-x-10 ">
            <div>
              <Button onclick={handleRemoveElement} title="delete" />
            </div>
            <div>
              <Button onclick={() => setClick(false)} title="cancel" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PopupDetail;
