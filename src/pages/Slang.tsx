import { useParams } from "react-router";
import Logo from "../components/logo/Logo";
import { useLayoutEffect, useState } from "react";
import { getSlang } from "../actions";
import PasswordBox from "../components/password box/PasswordBox";

const SlangPage = () => {
  const { slang } = useParams();
  const [paste, setPaste] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isProtected, setIsProtected] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const getData = async () => {
    try {
      setLoading(true);
      const { status, data } = await getSlang(slang as string, password);

      if (status === 200) {
        setPaste(data.paste);
        setIsProtected(false);
      } else if (status === 403) {
        setIsProtected(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  useLayoutEffect(() => {
    if (slang) {
      getData();
    }
  }, [slang]);

  return (
    <div className="flex flex-col gap-3 h-[90%] lg:h-[92%]">
      <header className="w-full mx-auto rounded-lg h-[10%] flex items-center md:bg-white px-4 md:shadow-md">
        <Logo />
        <span className="pt-3 text-xl text-black font-bold">/</span>
        <span className="pt-3 font-bold text-lg text-gray-700">{slang}</span>
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
            {isProtected && (
              <PasswordBox
                getData={getData}
                setPassword={setPassword}
                password={password}
              />
            )}
            <div className="h-[70%] sm:h-[90%] md:h-[100%] bg-white w-full rounded-lg shadow-md">
              <textarea
                name="text"
                id="textarea"
                readOnly
                value={
                  paste.length === 0
                    ? "01000100 01101111 01101110 00100111 01110100 00100000 01110100 01101000 01101001 01101110 01101011 00100000 01111001 01101111 01110101 00100111 01110010 01100101 00100000 01110011 01101111 00100000 01110011 01101101 01100001 01110010 01110100 00100001 00100000 01010111 01100101 00100000 01110100 01101000 01101111 01110101 01100111 01101000 01110100 00100000 01101111 01100110 00100000 01110100 01101000 01100001 01110100 00101110 00101110 00101110"
                    : paste
                }
                unselectable="on"
                minLength={3}
                maxLength={65536}
                disabled
                className="w-full p-4 h-full disabled:bg-gray-50 focus:outline-1 focus:outline-black-30 rounded-lg"
              ></textarea>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default SlangPage;
