import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white h-[10%] 2xl:h-[8%] rounded-lg shadow-md px-4 sm:flex sm:justify-between">
      <div className="sm:flex gap-3 items-center h-full hidden font-medium">
        <span>
          <i className="fa-regular fa-copyright text-lg"></i>
        </span>
        <span>{new Date().getFullYear()}</span>
        <span>Pastes.ir</span>
      </div>
      <div className="flex items-center justify-evenly sm:gap-5 sm:justify-end h-full">
        <Link to={"https://github.com/mahdyar/pastes"} target="_blank">
          <button className="cursor-pointer flex items-center gap-2 relative group px-2">
            <img
              src="/github.png"
              alt="Github"
              className="w-9 md:group-hover:-translate-y-2 duration-200 ease-in opacity-80"
            />
            <span className="text-xs bg-black text-white px-1 py-0.5 rounded-sm md:absolute md:-bottom-4 md:left-1/2 md:-translate-x-1/2 duration-200 md:opacity-0 md:group-hover:opacity-100 group-hover:">
              Github
            </span>
          </button>
        </Link>
        <Link to={"mailto:report@pastes.ir"}>
          <button className="cursor-pointer flex items-center gap-2 relative group px-2">
            <img
              src="/mail.png"
              alt="mail"
              className="w-9 md:group-hover:-translate-y-2 duration-200 ease-in"
            />
            <span className="text-xs bg-black text-white px-1 py-0.5 rounded-sm md:absolute md:-bottom-4 md:left-1/2 md:-translate-x-1/2 duration-200 md:opacity-0 md:group-hover:opacity-100 group-hover:">
              Report
            </span>
          </button>
        </Link>
        <Link to={"https://t.me/pastesrobot"} target="_blank">
          <button className="cursor-pointer flex items-center gap-2 relative group px-2">
            <img
              src="/paper.png"
              alt="telegram"
              className="w-9 md:group-hover:-translate-y-2 duration-200 ease-in"
            />
            <span className="text-xs bg-black text-white px-1 py-0.5 rounded-sm md:absolute md:-bottom-4 md:left-1/2 md:-translate-x-1/2 duration-200 md:opacity-0 md:group-hover:opacity-100 group-hover:">
              Telegram
            </span>
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
