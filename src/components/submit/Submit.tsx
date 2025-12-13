import { ButtonHTMLAttributes } from "react";

interface SubmitBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
const SubmitBtn: React.FC<SubmitBtnProps> = ({ className, ...props }) => {
  return (
    <div className="flex items-center">
      <button
        {...props}
        className={`${className} glass-button text-white hover:scale-105 active:scale-95 duration-300 rounded-xl px-3 py-1.5 cursor-pointer font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
      >
        <i className="fa-light fa-floppy-disk text-lg"></i>{" "}
        <span className="tracking-[2.5px] font-bold">SAVE</span>
      </button>
    </div>
  );
};
export default SubmitBtn;
