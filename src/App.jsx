import SideBar from "./component/SideBar";
import DataComponent from "./component/DataCompoenent";

function App() {
  return (
    <div className="">
      <div className="p-3 bg-slate-200">
        <div className="flex flex-row justify-center shadow-2xl">
          <div>
            <SideBar />
          </div>

          <div>
            <DataComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
