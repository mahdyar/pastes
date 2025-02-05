import { FormEvent, useState } from "react";
import Logo from "../components/logo/Logo";
import SubmitBtn from "../components/submit/Submit";
import { createPaste } from "../actions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import axios from "axios";

function App() {
  const [paste, setPaste] = useState<string | null>("");
  const [slang, setSlang] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const formOnSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimPaste = paste?.trim();
    const trimSlang = slang?.trim();
    const trimPassword = password?.trim();

    if (!trimPaste || trimPaste?.length < 3 || trimPaste?.length >= 65536) {
      toast.error("Paste must be between 3 and 65,536 characters.");
      return false;
    }

    if (trimSlang && (trimSlang.length < 4 || trimSlang.length >= 64)) {
      toast.error("Slang must be between 4 and 64 characters.");
      return false;
    }

    if (
      trimPassword &&
      (trimPassword.length < 3 || trimPassword.length >= 64)
    ) {
      toast.error("Password must be between 3 and 64 characters.");
      return false;
    }

    try {
      setLoading(true);
      const { status, data } = await createPaste(
        trimPaste!,
        trimSlang!,
        trimPassword!
      );

      if (status === 200) {
        toast.success("Paste created successfully");
        setPaste(null);
        setSlang(null);
        setPassword(null);

        navigate(`/${data.slang}`);
      } else {
        toast.error("Error creating paste");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);

        if (error.response?.status === 400) {
          toast.error(`"${slang}" is already taken.`);
        } else {
          toast.error(`Error: ${error.response?.statusText}`);
        }
      }
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-3 h-[90%] lg:h-[92%]">
      <header className="w-full mx-auto rounded-lg h-[10%] flex items-center md:bg-white justify-between px-4 md:shadow-md">
        <div className="flex items-center">
          <Logo />
          <form
            className="hidden md:flex md:gap-3 lg:gap-5"
            onSubmit={formOnSubmitHandler}
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
                name="slang"
                minLength={4}
                maxLength={64}
                value={slang ?? ""}
                disabled={loading}
                onChange={(e) => setSlang(e.target.value)}
                className="invalid:border-red-500 invalid:border disabled:opacity-70 bg-gray-200 shadow-sm appearance-none border-2 border-gray-200 rounded-xl w-44 lg:w-52 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="panda(Opt.)"
              />
            </div>
            <div className="flex items-center">
              <input
                type="password"
                name="password"
                minLength={3}
                maxLength={64}
                value={password ?? ""}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="invalid:border-red-500 invalid:border disabled:opacity-70 bg-gray-200 shadow-sm appearance-none border-2 border-gray-200 rounded-xl w-48 lg:w-54 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="Password(Opt.)"
              />
            </div>
            <SubmitBtn
              type="submit"
              className="hidden md:block"
              disabled={
                loading || (paste ? (paste.length >= 3 ? false : true) : true)
              }
            />
          </form>
        </div>

        <SubmitBtn
          className="md:hidden"
          form="mobile-form"
          disabled={loading || (paste ? false : true)}
        />
      </header>
      <main className="flex flex-col gap-3 h-[86.5%]">
        <div className="h-[70%] sm:h-[90%] md:h-[100%] bg-white w-full rounded-lg shadow-md">
          <textarea
            name="text"
            id="textarea"
            onChange={(e) => setPaste(e.target.value)}
            value={paste ?? ""}
            minLength={3}
            maxLength={65536}
            disabled={loading}
            className="w-full p-4 h-full disabled:opacity-70 disabled:bg-gray-300 focus:outline-1 focus:outline-black-30 rounded-lg"
            placeholder="Write whatever you want..."
            dir="auto"
          ></textarea>
        </div>
        <div className="h-[30%] sm:h-[15%] bg-white w-full rounded-lg md:hidden shadow-md">
          <form
            id="mobile-form"
            className="flex gap-3 flex-col items-center justify-center sm:flex-row h-full"
            onSubmit={formOnSubmitHandler}
          >
            <div className="flex items-center">
              <label
                htmlFor="custom-url"
                className="text-xl block font-black mt-1"
              >
                <span className="text-blue-500 text-2xl">P</span>astes.ir/
              </label>
              <input
                type="text"
                name="slang"
                minLength={4}
                maxLength={64}
                value={slang ?? ""}
                disabled={loading}
                onChange={(e) => setSlang(e.target.value)}
                className="invalid:border-red-500 invalid:border disabled:opacity-70 bg-gray-200 shadow-sm appearance-none border-2 border-gray-200 rounded-xl w-44 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="panda(Opt.)"
              />
            </div>
            <div className="flex items-center">
              <input
                type="password"
                name="password"
                minLength={3}
                maxLength={64}
                value={password ?? ""}
                disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
                className="invalid:border-red-500 invalid:border disabled:opacity-70 bg-gray-200 shadow-sm appearance-none border-2 border-gray-200 rounded-xl w-52 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                placeholder="Password(Opt.)"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
