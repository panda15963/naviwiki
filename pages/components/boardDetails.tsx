import { MessageProps, useFormFields, useMessage, useTextAreaFields } from "@/lib/utils";
import { NavBar } from "../components/NavBar";
import Footer from "../components/footer";
import classNames from "classnames";
import { supabase } from "@/lib/supabase";
import { Suspense } from "react";
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
  const [textAreaValues, handleTextAreaChange, resetTextAreaFields] =
    useTextAreaFields<boardFieldProps>(FORM_VALUES);
  const [message, handleMessage] = useMessage<MessageProps>(MESSAGE_VALUES);
  // register a user with provided details
  const register = async (payload: SupabaseboardPayload) => {
    try {
      const { error } = await supabase.from(values.platforms).insert(payload);
      if (error) {
        console.log(error);
        handleMessage({ payload: error.message, type: "error" });
      }
      if (error) {
        console.log(error);
        handleMessage({ payload: error.message, type: "error" });
      } else {
        handleMessage({
          payload:
            "Board registered!",
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
    resetTextAreaFields();
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
                    {message.payload && (
                      <div
                        className={classNames(
                          "shadow-md rounded px-3 py-2 text-shadow transition-all mt-2 text-center",
                          message.type === "error"
                            ? "bg-red-500 text-white"
                            : message.type === "success"
                              ? "bg-green-300 text-gray-800"
                              : "bg-gray-100 text-gray-800"
                        )}
                      >
                        {message?.payload}
                      </div>
                    )}
                    <div className=" p-10 text-2xl font-bold text-center">
                      <span>Write On Board</span>
                    </div>
                    <span className="p-1 text-xl font-bold text-center">
                      Title
                    </span>
                    <input name="title" className="border-2  w-[400px]" type="text" value={values.title} onChange={handleChange}/>
                    <span className="p-1 text-xl font-bold text-center">
                      Platforms
                    </span>
                    <span className="p-1 text-sm text-center">
                      Choose one of the following : "ccic", "ccnc", "ccic27", "stdw5", and "prm6"
                    </span>
                    <input name="platforms" className="border-2  w-[400px]" type="text" value={values.platforms} onChange={handleChange}/>
                    <span className="p-1 text-xl font-bold text-center">
                      Description
                    </span>
                    <textarea name="description" className="border-2 w-[400px] h-[400px]" value={textAreaValues.description} onChange={handleTextAreaChange} />
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