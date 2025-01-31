import Logo from "../components/logo/Logo";
import SubmitBtn from "../components/submit/Submit";

function App() {
  return (
    <div className="flex flex-col gap-3 h-[92%] mt-4">
      <header className="w-full mx-auto rounded-lg h-[10%] md:h-[10%] flex items-center md:bg-white justify-between p-4">
        <div className="flex items-center">
          <Logo />
          <div className="hidden md:flex md:gap-3 lg:gap-5">
            <div className="flex items-center">
              <label
                htmlFor="custom-url"
                className="text-3xl block font-bold mt-1"
              >
                /
              </label>
              <input
                type="text"
                name="custom-url"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-44 py-1.5 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="panda(Opt.)"
              />
            </div>
            <div className="flex items-center">
              <input
                type="text"
                name="custom-url"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-52 py-1.5 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="Password(Opt.)"
              />
            </div>
            <SubmitBtn className="hidden md:block" />
          </div>
        </div>

        <SubmitBtn className="md:hidden" />
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
