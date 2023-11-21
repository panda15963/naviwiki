import { Button } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/footer";
export default function CCIC() {
  return (
    <>
      <div className="wrapper">
        <div className="flex">
          <NavBar />
          <div className="flex-1">
            <div className="flex flex-col h-full justify-center w-full p-5 rounded-lg">
              <div className="container max-w-screen-lg mx-auto">
                <div className="text-xl font-bold mt-5 mb-3 text-center">
                  <h1 className="text-4xl font-bold mt-5 mb-3 text-center">
                    CCIC
                  </h1>
                  <table className="table-fixed w-full border-separate">
                    <thead>
                      <tr className="bg-[rgba(0,0,0,0.1)] h-[45px] 2sm:h-[50px]">
                        <th
                          scope="col"
                          className="hover:bg-[rgba(0,0,0,0.2)] md:w-[200px]"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="hover:bg-[rgba(0,0,0,0.2)] md:w-[200px]"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="hover:bg-[rgba(0,0,0,0.2)] md:w-[200px]"
                        >
                          Create At
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                  </table>
                  <Button
                    className="mt-5"
                    colorScheme="blue"
                    onClick={() => {
                      window.location.href = "../components/boardDetails";
                    }}
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
