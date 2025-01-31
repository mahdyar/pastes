import { Link } from "react-router";

function App() {
  return (
    <div className="flex flex-col gap-3 h-[92%] mt-4">
      <header className="w-full mx-auto rounded-lg h-[10%] md:h-[10%] flex items-center md:bg-white justify-between p-4">
        <div>
          <Link to={"/"} className="flex gap-1 items-center">
            <img src="/pastes.png" alt="" className="w-10" />
            <h1 className="font-black text-2xl sm:text-3xl">
              <span className="text-blue-500 text-3xl sm:text-4xl">P</span>
              astes.ir
            </h1>
          </Link>
        </div>
        <div>
          <button className="border-2 border-blue-600 text-blue-600 rounded-md px-2 py-1.5 cursor-pointer duration-200 hover:bg-blue-500 hover:text-white">
            <i className="fa-light fa-floppy-disk text-lg"></i>{" "}
            <span className="tracking-[2.5px] text-lg font-bold">SAVE</span>
          </button>
        </div>
      </header>
      <main className="flex flex-col gap-3 h-[90%] md:h-[90%]">
        <div className="h-[70%] sm:h-[88%] md:h-[100%] bg-white w-full rounded-lg">
          <textarea
            name="text"
            id="textarea"
            className="w-full p-2 h-full focus:outline-1 focus:outline-black-30 rounded-lg"
            placeholder="Write whatever you want..."
            rows={20}
            cols={33}
          ></textarea>
        </div>
        <div className="h-[30%] sm:h-[12%] bg-white w-full rounded-lg md:hidden"></div>
      </main>
    </div>
  );
}

export default App;
