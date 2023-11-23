import { Button } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const PRM6: React.FC = () => {
  const loadData = async () => {
    const { data, error } = await supabase.from("prm6").select("*");
    if (error) {
      console.log(error);
    } else {
      return data;
    }
  };
  const [listing, setListing] = useState([]);
 
  useEffect(() => {
    loadData().then((data: any) => {
      setListing(data);
      let id = data.length;
      for (let i = 0; i < id; i++) {
        data[i].id = i + 1;
      }
    });
  }, []);
  
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
                    PRM6
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
                          Description
                        </th>
                        <th
                          scope="col"
                          className="hover:bg-[rgba(0,0,0,0.2)] md:w-[200px]"
                        >
                          Deletion
                        </th>
                      </tr>
                    </thead>
                    <tbody>                      
                      {listing.map((item: any) => (
                        <tr
                          key={item.id}
                          className="bg-[rgba(0,0,0,0.1)] h-[45px] 2sm:h-[50px]"
                        >
                          <td className="text-center">{item.id}</td>
                          <td className="text-center">{item.title}</td>
                          <td className="text-center">{item.description}</td>
                          <td className="text-center">                            
                            <Button
                              style={{ color: "red" }}
                              onClick={async () => {
                                const { error } = await supabase
                                  .from("PRM6")
                                  .delete()
                                  .match({ title: item.title });
                                if (error) {
                                  console.log(error);
                                } else {
                                  alert("Delete Success");
                                  window.location.href =
                                    "../platforms/prm6";
                                }
                              }}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
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
};
export default PRM6;
