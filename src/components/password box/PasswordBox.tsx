import { useState } from "react";

const PasswordBox = ({
  getData,
  password,
  setPassword,
}: {
  getData: () => void;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async () => {
    setLoading(true);
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="absolute w-full h-full flex items-center justify-center backdrop-blur-xs top-0 left-0 px-4">
      <div className="bg-white w-fit px-4 sm:px-14 py-4 rounded-lg flex items-center justify-center gap-5 flex-col">
        <strong className="flex items-center justify-center text-lg font-bold">
          <img src="/lock.svg" alt="lock" className="w-7 pb-2" /> Paste
          is protected!
        </strong>
        <div>
          <input
            type="text"
            name="slang"
            minLength={4}
            maxLength={64}
            value={password ?? ""}
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
            className="invalid:border-red-500 invalid:border disabled:opacity-70 bg-gray-200 shadow-md appearance-none border-2 border-gray-200 rounded-md w-full max-w-64 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="Enter Password"
          />
        </div>
        <div>
          <button
            onClick={onSubmit}
            className="bg-green-500 shadow-md shadow-green-300/50 text-white hover:shadow-green-400/40 active:scale-95 active:shadow-md hover:shadow-lg rounded-md px-4 py-2 cursor-pointer duration-200  hover:text-white disabled:hover:shadow-none disabled:text-gray-500 disabled:!bg-gray-300 disabled:hover:scale-100 disabled:hover:text-gray-600 disabled:shadow-none disabled:hover:bg-transparent"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordBox;
