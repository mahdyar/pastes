import { Link, useParams } from "react-router";
import Logo from "../components/logo/Logo";
import { useLayoutEffect, useState } from "react";
import { getSlang } from "../actions";
import PasswordBox from "../components/password box/PasswordBox";
import toast from "react-hot-toast";
import axios from "axios";

const SlangPage = () => {
  const { slang } = useParams();
  const [paste, setPaste] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isProtected, setIsProtected] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const { data } = await getSlang(slang as string, password);

      setPaste(data.paste);
      setIsProtected(false);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        toast.error(error.response.data.detail || error.response.data.error);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    if (slang) {
      getData();
    }
  }, [slang]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paste).then(
      () => {
        toast.success("Copied to clipboard!");
      },
      (err) => {
        toast.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <div className="flex flex-col gap-3 h-[90%] lg:h-[92%]">
      <header className="w-full mx-auto rounded-lg h-[10%] flex items-center justify-between md:bg-white px-2 md:shadow-md">
        <div className="flex items-center">
          <Logo />
          <span className="pt-3 text-xl text-black font-bold">/</span>
          <span className="pt-3 font-bold text-lg text-gray-700 truncate max-w-[120px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[550px] overflow-hidden">
            {slang}
          </span>
        </div>
        {!isProtected && (
          <div className="items-center hidden sm:flex">
            <Link
              to={`${
                import.meta.env.VITE_API_URL
              }/${slang}/${password}?raw=true`}
              target="_blank"
            >
              <button
                type="button"
                className="m-3 py-1 tracking-widest opacity-90 hover:opacity-100 cursor-pointer duration-200 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                RAW
              </button>
            </Link>
          </div>
        )}
      </header>
      <main className="flex relative flex-col gap-3 h-[86.5%]">
        {loading ? (
          <div
            role="status"
            className="bg-white w-full h-full flex justify-center pt-20 rounded-lg"
          >
            <div>
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <div className="h-[100%] bg-white w-full rounded-lg shadow-md relative">
              {isProtected && (
                <PasswordBox
                  getData={getData}
                  setPassword={setPassword}
                  password={password}
                />
              )}
              <textarea
                name="text"
                id="textarea"
                readOnly
                value={
                  paste.length === 0
                    ? "01000100 01101111 01101110 00100111 01110100 00100000 01110100 01101000 01101001 01101110 01101011 00100000 01111001 01101111 01110101 00100111 01110010 01100101 00100000 01110011 01101111 00100000 01110011 01101101 01100001 01110010 01110100 00100001 00100000 01010111 01100101 00100000 01110100 01101000 01101111 01110101 01100111 01101000 01110100 00100000 01101111 01100110 00100000 01110100 01101000 01100001 01110100 00101110 00101110 00101110"
                    : paste
                }
                minLength={3}
                maxLength={65536}
                dir="auto"
                disabled
                className="w-full p-4 h-full disabled:bg-gray-50 focus:outline-1 focus:outline-black-30 rounded-lg"
              ></textarea>
              {!isProtected && (
                <div
                  className="absolute right-5 bottom-5"
                  onClick={copyToClipboard}
                >
                  <button
                    type="button"
                    className="text-white cursor-pointer shadow-md active:scale-95 duration-200 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none dark:focus:ring-green-800 font-medium rounded-full text-sm w-10 h-10 text-center"
                  >
                    <i className="fa-regular fa-copy text-2xl"></i>
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default SlangPage;
