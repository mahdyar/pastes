import { FormEvent, useState } from "react";

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
  const formOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="absolute w-full h-full flex items-center justify-center backdrop-blur-md top-0 left-0 px-4 rounded-2xl">
      <div className="glass-card w-fit px-4 sm:px-14 py-6 rounded-2xl flex items-center justify-center gap-5 flex-col shadow-2xl">
        <strong className="flex items-center justify-center text-lg font-bold text-white">
          <img src="/lock.svg" alt="lock" className="w-7 pb-2 drop-shadow-lg" />{" "}
          <span className="m-1">Paste is protected!</span>
        </strong>
        <form
          onSubmit={formOnSubmit}
          className="flex items-center flex-col gap-5"
        >
          <div>
            <input
              type="password"
              name="slang"
              minLength={3}
              maxLength={64}
              value={password ?? ""}
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
              className="glass-input disabled:opacity-50 rounded-xl w-full max-w-64 py-2 px-3 text-white placeholder-white/60 leading-tight focus:outline-none transition-all duration-300"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="glass-button text-white shadow-lg hover:shadow-xl active:scale-95 hover:scale-105 rounded-xl px-6 py-2 cursor-pointer duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordBox;
