import Logo from "../components/logo/Logo";
import SubmitBtn from "../components/submit/Submit";

function App() {
  return (
    <div className="flex flex-col gap-3 h-[90%] lg:h-[92%]">
      <header className="w-full mx-auto rounded-lg h-[10%] flex items-center md:bg-white justify-between px-4 md:shadow-md">
        <div className="flex items-center">
          <Logo />
          <form
            className="hidden md:flex md:gap-3 lg:gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
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
                minLength={3}
                maxLength={16}
                className="bg-gray-200 shadow-sm appearance-none border-2 border-gray-200 rounded w-44 lg:w-52 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="panda(Opt.)"
              />
            </div>
            <div className="flex items-center">
              <input
                type="text"
                name="custom-url"
                className="bg-gray-200 shadow-sm appearance-none border-2 border-gray-200 rounded w-48 lg:w-54 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="Password(Opt.)"
              />
            </div>
            <SubmitBtn type="submit" className="hidden md:block" />
          </form>
        </div>

        <SubmitBtn className="md:hidden" />
      </header>
      <main className="flex flex-col gap-3 h-[86.5%]">
        <div className="h-[70%] sm:h-[90%] md:h-[100%] bg-white w-full rounded-lg shadow-md">
          <textarea
            name="text"
            id="textarea"
            className="w-full p-2 h-full focus:outline-1 focus:outline-black-30 rounded-lg"
            placeholder="Write whatever you want..."
          ></textarea>
        </div>
        <div className="flex gap-3 flex-col items-center justify-center sm:flex-row h-[30%] sm:h-[15%] bg-white w-full rounded-lg md:hidden shadow-md">
          <div className="flex items-center">
            <label
              htmlFor="custom-url"
              className="text-xl block font-black mt-1"
            >
              <span className="text-blue-500 text-2xl">P</span>astes.ir/
            </label>
            <input
              type="text"
              name="custom-url"
              className="bg-gray-200 shadow-sm appearance-none border-2 border-gray-200 rounded w-44 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="panda(Opt.)"
            />
          </div>
          <div className="flex items-center">
            <input
              type="text"
              name="custom-url"
              className="bg-gray-200 shadow-sm appearance-none border-2 border-gray-200 rounded w-52 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Password(Opt.)"
            />
          </div>
          <SubmitBtn className="hidden md:block" />
        </div>
      </main>
    </div>
  );
}

export default App;
