import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to={"/"} className="flex gap-1 items-center">
        <img src="/pastes.png" alt="" className="w-10" />
        <h1 className="font-black text-2xl lg:text-3xl">
          <span className="text-blue-500 text-3xl lg:text-4xl">P</span>
          astes.ir
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
