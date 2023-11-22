import { Button } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useFormFields, MessageProps, useMessage } from "../../lib/utils";

const CCIC: React.FC = () => {
  const loadData = async () => {
    const { data, error } = await supabase.from("ccic").select("*");
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
      data.map((item: any) => {
        for(let i = 0; i < item.id; i++){
          if (item.inserted_at.toString().includes("T") && item.inserted_at.toString().includes(".")){
            item.inserted_at = item.inserted_at.toString().replace("T", " ");
            item.inserted_at = item.inserted_at.toString().split(".")[i];
            console.log(item.inserted_at);
          }
        }
        
      });
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
                          Description
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
                      {listing.map((item: any) => (
                        <tr
                          key={item.id}
                          className="bg-[rgba(0,0,0,0.1)] h-[45px] 2sm:h-[50px]"
                        >
                          <td className="text-center">{item.id + 1}</td>
                          <td className="text-center">{item.title}</td>
                          <td className="text-center">{item.description}</td>
                          <td className="text-center">{item.inserted_at}</td>
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
export default CCIC;
