import { ButtonHTMLAttributes } from "react";

interface SubmitBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
const SubmitBtn: React.FC<SubmitBtnProps> = ({ className, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className={`${className} border-2 border-blue-600 text-blue-600 rounded-md px-2 py-1.5 md:py-1 cursor-pointer duration-200 hover:bg-blue-500 hover:text-white disabled:!border-gray-500 disabled:text-gray-500 disabled:hover:text-gray-500 disabled:opacity-70 disabled:hover:bg-transparent`}
      >
        <i className="fa-light fa-floppy-disk text-lg"></i>{" "}
        <span className="tracking-[2.5px] text-lg font-bold">SAVE</span>
      </button>
    </div>
  );
};
export default SubmitBtn;
