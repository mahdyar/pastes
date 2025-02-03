import { useParams } from "react-router";
import Logo from "../components/logo/Logo";
import { useEffect, useState } from "react";
import { getSlang } from "../actions";

const SlangPage = () => {
  const { slang } = useParams();
  const [paste, setPaste] = useState<string>("");
  const getData = async (slang: string) => {
    const { paste } = await getSlang(slang);
    if (paste) {
      setPaste(paste);
    }
  };
  useEffect(() => {
    if (slang) {
      getData(slang);
    }
  }, [slang]);
  return (
    <div className="flex flex-col gap-3 h-[90%] lg:h-[92%]">
      <header className="w-full mx-auto rounded-lg h-[10%] flex items-center md:bg-white justify-between px-4 md:shadow-md">
        <Logo />
      </header>
      <main className="flex flex-col gap-3 h-[86.5%]">
        <div className="h-[70%] sm:h-[90%] md:h-[100%] bg-white w-full rounded-lg shadow-md">
          <textarea
            name="text"
            id="textarea"
            readOnly
            value={paste}
            minLength={3}
            maxLength={65536}
            className="w-full p-4 h-full disabled:opacity-70 disabled:bg-gray-300 focus:outline-1 focus:outline-black-30 rounded-lg"
            placeholder="Write whatever you want..."
          ></textarea>
        </div>
      </main>
    </div>
  );
};

export default SlangPage;
