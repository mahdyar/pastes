import { Link, useParams } from "react-router";
import Logo from "../components/logo/Logo";
import { useLayoutEffect, useState } from "react";
import { getSlang } from "../actions";
import PasswordBox from "../components/password box/PasswordBox";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet";
import Spinner from "../components/spinner/Spinner";

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

  const pasteCopyToClipboard = () => {
    navigator.clipboard.writeText(paste).then(
      () => {
        toast.success("Copied to clipboard!");
      },
      (err) => {
        toast.error("Failed to copy: ", err);
      }
    );
  };
  const copyLinkToClipboard = () => {
    const domain = import.meta.env.VITE_DOMAIN;
    navigator.clipboard.writeText(`${domain}/${slang}`).then(
      () => {
        toast.success("Copied to clipboard!");
      },
      (err) => {
        toast.error("Failed to copy: ", err);
      }
    );
  };
  return (
    <>
      <Helmet>
        <title>{slang} | Pastes.ir</title>
        <meta name="title" content={`${slang} | Pastes.ir`} />
        <meta
          name="description"
          content={`See the ${slang} paste on Pastes.ir`}
        />
        <meta
          property="og:title"
          name="title"
          content={`${slang} | Pastes.ir`}
        />
        <meta
          property="og:description"
          name="description"
          content={`See the ${slang} paste on Pastes.ir`}
        />
      </Helmet>
      <div className="flex flex-col gap-3 h-[90%] lg:h-[92%]">
        <header className="w-full mx-auto rounded-lg h-[10%] flex items-center justify-between md:bg-white px-2 md:shadow-md">
          <div className="flex items-center">
            <Logo />
            <span className="pt-3 text-xl text-black font-bold">/</span>
            <span className="pt-3 font-bold text-lg text-gray-700 truncate max-w-[120px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[550px] overflow-hidden">
              {slang}
            </span>
            <button
              className="flex items-center justify-center rounded-full text-gray-700 text-xl cursor-pointer hover:bg-gray-400/50 h-7 w-7"
              onClick={copyLinkToClipboard}
              title="Copy link to clipboard"
            >
              <i className="fa-solid fa-copy align-middle"></i>
            </button>
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
            <Spinner />
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
                    onClick={pasteCopyToClipboard}
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
    </>
  );
};

export default SlangPage;
