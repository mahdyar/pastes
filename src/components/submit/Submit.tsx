import { ButtonHTMLAttributes } from "react";

interface SubmitBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
const SubmitBtn: React.FC<SubmitBtnProps> = ({ className, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className={`${className} bg-blue-500 shadow-md shadow-blue-300/50 text-white hover:shadow-blue-400/40 active:scale-95 active:shadow-md hover:shadow-lg rounded-xl px-2 py-1 cursor-pointer duration-200  hover:text-white disabled:!border-gray-500 disabled:text-gray-500 disabled:hover:text-gray-500 disabled:opacity-70 disabled:hover:bg-transparent`}
      >
        <i className="fa-light fa-floppy-disk text-lg"></i>{" "}
        <span className="tracking-[2.5px] text-lg font-bold">SAVE</span>
      </button>
    </div>
  );
};
export default SubmitBtn;
