import { Link } from "react-router";

function App() {
  return (
    <div className="flex flex-col gap-3">
      <header className="w-full mx-auto rounded-lg h-[10vh] flex items-center md:bg-white justify-between p-2">
        <div>
          <Link to={"/"} className="flex gap-1 items-center">
            <img src="/pastes.png" alt="" className="w-10" />
            <h1 className="font-black text-2xl sm:text-3xl">
              <span className="text-blue-500 text-3xl sm:text-4xl">P</span>astes.ir
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
      <main className="flex flex-col gap-3">
        <div className="h-[50vh] sm:h-[60vh] bg-white w-full rounded-lg">
          <textarea
            name="text"
            id="textarea"
            className="w-full p-2 h-full focus:outline-1 focus:outline-black-30 rounded-lg"
            placeholder="Write whatever you want..."
            rows={20}
            cols={33}
          ></textarea>
        </div>
        <div className="h-[20vh] sm:h-[10vh] bg-white w-full rounded-lg"></div>
      </main>
    </div>
  );
}

export default App;
