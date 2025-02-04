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

  const getData = async () => {
    const { status, data } = await getSlang(slang as string, password);

    if (status === 200) {
      setPaste(data.paste);
      setIsProtected(false);
    } else if (status === 403) {
      setIsProtected(true);
    }
  };
  useLayoutEffect(() => {
    if (slang) {
      getData();
    }
  }, [slang]);
  return (
    <div className="flex flex-col gap-3 h-[90%] lg:h-[92%]">
      <header className="w-full mx-auto rounded-lg h-[10%] flex items-center md:bg-white justify-between px-4 md:shadow-md">
        <Logo />
      </header>
      <main className="flex relative flex-col gap-3 h-[86.5%]">
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
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\nLorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                : paste
            }
            unselectable="on"
            minLength={3}
            maxLength={65536}
            disabled
            className="w-full p-4 h-full disabled:bg-gray-200 focus:outline-1 focus:outline-black-30 rounded-lg"
          ></textarea>
        </div>
      </main>
    </div>
  );
};

export default SlangPage;
