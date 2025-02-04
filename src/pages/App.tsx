import { useState, useEffect } from "react";
import Logo from "../components/logo/Logo";
import SubmitBtn from "../components/submit/Submit";
import { createPaste } from "../actions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";

interface FormData {
  paste: string;
  slang: string;
  password: string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const pasteValue = watch("paste");

  useEffect(() => {
    if (errors.slang) {
      toast.error(errors.slang.message);
    }
    if (errors.password) {
      toast.error(errors.password.message);
    }
    if (errors.paste) {
      toast.error(errors.paste.message);
    }
  }, [errors]);

  const formOnSubmitHandler = async (data: FormData) => {
    setLoading(true);

    const { paste, slang, password } = data;
    const trimPaste = paste?.trim();
    const trimSlang = slang?.trim();
    const trimPassword = password?.trim();
    try {
      const { status, data } = await createPaste(
        trimPaste!,
        trimSlang!,
        trimPassword!
      );

      if (status === 200) {
        toast.success("Paste created successfully");
        setValue("paste", "");
        setValue("slang", "");
        setValue("password", "");
        setTimeout(() => {
          navigate(`/${data.slang}`);
        }, 1000);
      } else {
        toast.error("Error creating paste");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);

        if (error.response?.status === 400) {
          toast.error(`"${slang}" is already taken.`);
        } else {
          toast.error(`Error: ${error.response?.statusText}`);
        }
      }
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-3 h-[90%] lg:h-[92%]">
      <header className="w-full mx-auto rounded-lg h-[10%] flex items-center md:bg-white justify-between px-4 md:shadow-md">
        <div className="flex items-center">
          <Logo />
          <form
            className="hidden md:flex md:gap-3 lg:gap-5"
            onSubmit={handleSubmit(formOnSubmitHandler)}
          >
            <div className="flex items-center">
              <label
                htmlFor="custom-url"
                className="text-3xl block font-bold mt-1"
              >
                /
              </label>
              <input
                type="text"
                {...register("slang", {
                  minLength: {
                    value: 4,
                    message: "Slang must be at least 4 characters long",
                  },
                  maxLength: {
                    value: 64,
                    message: "Slang must be at most 64 characters long",
                  },
                })}
                disabled={loading}
                className={`${
                  errors.slang ? "border-red-500" : "border-gray-200"
                } invalid:border-red-500 invalid:border disabled:opacity-70 bg-gray-200 shadow-sm appearance-none border-2 rounded-xl w-44 lg:w-52 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`}
                placeholder="panda(Opt.)"
              />
            </div>
            <div className="flex items-center">
              <input
                type="password"
                {...register("password", {
                  minLength: {
                    value: 3,
                    message: "Password must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 64,
                    message: "Password must be at most 64 characters long",
                  },
                })}
                disabled={loading}
                className={`${
                  errors.password ? "border-red-500" : "border-gray-200"
                } invalid:border-red-500 invalid:border disabled:opacity-70 bg-gray-200 shadow-sm appearance-none border-2 rounded-xl w-48 lg:w-54 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`}
                placeholder="Password(Opt.)"
              />
            </div>
            <SubmitBtn
              type="submit"
              className="hidden md:block"
              disabled={loading || !pasteValue || pasteValue.length < 3}
            />
          </form>
        </div>

        <SubmitBtn
          className="md:hidden"
          form="mobile-form"
          disabled={loading || !pasteValue || pasteValue.length < 3}
        />
      </header>
      <main className="flex flex-col gap-3 h-[86.5%]">
        <div className="h-[70%] sm:h-[90%] md:h-[100%] bg-white w-full rounded-lg shadow-md">
          <textarea
            {...register("paste", {
              minLength: {
                value: 3,
                message: "Paste must be at least 3 characters long",
              },
              maxLength: {
                value: 65536,
                message: "Paste must be at most 65536 characters long",
              },
            })}
            disabled={loading}
            className={`${
              errors.paste ? "border-red-500" : "border-gray-200"
            } w-full p-4 h-full disabled:opacity-70 disabled:bg-gray-300 focus:outline-1 focus:outline-black-30 rounded-lg`}
            placeholder="Write whatever you want..."
            dir="auto"
          ></textarea>
        </div>
        <div className="h-[30%] sm:h-[15%] bg-white w-full rounded-lg md:hidden shadow-md">
          <form
            id="mobile-form"
            className="flex gap-3 flex-col items-center justify-center sm:flex-row h-full"
            onSubmit={handleSubmit(formOnSubmitHandler)}
          >
            <div className="flex items-center">
              <label
                htmlFor="custom-url"
                className="text-xl block font-black mt-1"
              >
                <span className="text-blue-500 text-2xl">P</span>astes.ir/
              </label>
              <input
                type="text"
                {...register("slang", {
                  minLength: {
                    value: 4,
                    message: "Slang must be at least 4 characters long",
                  },
                  maxLength: {
                    value: 64,
                    message: "Slang must be at most 64 characters long",
                  },
                })}
                disabled={loading}
                className={`${
                  errors.slang ? "border-red-500" : "border-gray-200"
                } invalid:border-red-500 invalid:border disabled:opacity-70 bg-gray-200 shadow-sm appearance-none border-2 rounded-xl w-44 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`}
                placeholder="panda(Opt.)"
              />
            </div>
            <div className="flex items-center">
              <input
                type="password"
                {...register("password", {
                  minLength: {
                    value: 3,
                    message: "Password must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 64,
                    message: "Password must be at most 64 characters long",
                  },
                })}
                disabled={loading}
                className={`${
                  errors.password ? "border-red-500" : "border-gray-200"
                } invalid:border-red-500 invalid:border disabled:opacity-70 bg-gray-200 shadow-sm appearance-none border-2 rounded-xl w-52 py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`}
                placeholder="Password(Opt.)"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
