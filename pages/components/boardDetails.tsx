import { MessageProps, useFormFields, useMessage } from "@/lib/utils";
import { NavBar } from "../components/NavBar";
import Footer from "../components/footer";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
type boardFieldProps = {
  id: number;
  title: string;
  platforms: string;
  description: string;
};
type SupabaseboardPayload = boardFieldProps; // type alias
const FORM_VALUES: boardFieldProps = {
  id: 0,
  title: "",
  platforms: "",
  description: "",
};
const MESSAGE_VALUES: MessageProps = {
  type: "default",
  payload: "",
};
const BoardDetails: React.FC = () => {
  const [values, handleChange, resetFormFields] =
    useFormFields<boardFieldProps>(FORM_VALUES);
  const [message, handleMessage] = useMessage<MessageProps>(MESSAGE_VALUES);
  // sign-up a user with provided details
  const register = async (payload: SupabaseboardPayload) => {
    try {
      const { error } = await supabase.from("boards").insert(payload);
      if (error) {
        console.log(error);
        handleMessage({ payload: error.message, type: "error" });
      } else {
        handleMessage({
          payload: "Signup successful!",
          type: "success",
        });
      }
    } catch (error: unknown) {
      console.log(error);
      handleMessage({ payload: (error as Error).message, type: "error" });
    }
  };
  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault();
    await register(values);
    resetFormFields();
  };
  return (
    <>
      <div className="wrapper">
        <div className="flex">
          <NavBar />
          <div className="flex-1">
            <form method="post" onSubmit={handleSumbit}>
              <div className="flex flex-col h-full justify-center w-full p-5 rounded-lg">
                <div className="container w-[500px] mx-auto border-solid border-2 border-gray-600 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className=" p-10 text-2xl font-bold text-center">
                      <span>Write On Board</span>
                    </div>
                    <span className="p-1 text-xl font-bold text-center">
                      Title
                    </span>
                    <input className="border-2  w-[400px]" type="text" value={values.title} onChange={handleChange}></input>
                    <span className="p-1 text-xl font-bold text-center">
                      Platforms
                    </span>
                    <input className="border-2  w-[400px]" type="text"></input>
                    <span className="p-1 text-xl font-bold text-center">
                      Description
                    </span>
                    <textarea className="border-2 w-[400px] h-[400px]"></textarea>
                    <div className="mt-5 flex items-center   justify-center">
                      <button className=" h-10 w-64 rounded-xl bg-gray-300 text-sm font-medium text-white">
                        Register
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default BoardDetails;
/*export default function CCIC() {
  return (
    <>
      <div className="wrapper">
        <div className="flex">
          <NavBar />
          <div className="flex-1">
            <div className="flex flex-col h-full justify-center w-full p-5 rounded-lg">
              <div className="container w-[500px] mx-auto border-solid border-2 border-gray-600 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className=" p-10 text-2xl font-bold text-center">
                    <span>Write On Board</span>
                  </div>
                  <span className="p-1 text-xl font-bold text-center">
                    Title
                  </span>
                  <input className="border-2  w-[400px]" type="text"></input>
                  <span className="p-1 text-xl font-bold text-center">
                    Platforms
                  </span>
                  <input className="border-2  w-[400px]" type="text"></input>
                  <span className="p-1 text-xl font-bold text-center">
                    Description
                  </span>
                  <textarea className="border-2 w-[400px] h-[400px]"></textarea>
                  <div className="mt-5 flex items-center   justify-center">
                    <button className=" h-10 w-64 rounded-xl bg-gray-300 text-sm font-medium text-white">
                      Register
                    </button>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}*/
