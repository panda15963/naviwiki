/* eslint-disable react/jsx-key */
import { Button } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { GiArchiveRegister } from "react-icons/gi";

type tableHead = {
  name?: string;
}
const tableHead: tableHead[] = [
  {
    name: "ID",
  },
  {
    name: "Title",
  },
  {
    name: "Description",
  },
  {
    name: "Deletion",
  },
];

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
              <div className="rounded-lg bg-yellow-50 container max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-bold mt-5 mb-3 text-center">
                  CCIC
                </h1>
                <div className="text-xl font-bold mt-5 mb-3 text-center p-5">
                  <table className="table-fixed w-full border-separate">
                    <thead>
                      <tr className="bg-[rgba(0,0,0,0.1)] h-[45px] 2sm:h-[50px]">
                        {tableHead.map((item: any) => (
                          <th
                            scope="col"
                            className="hover:bg-[rgba(0,0,0,0.2)] md:w-[200px]"
                          >
                            {item.name}
                          </th>
                        ))}
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
                                  .from("ccic")
                                  .delete()
                                  .match({ title: item.title });
                                if (error) {
                                  console.log(error);
                                } else {
                                  alert("Delete Success");
                                  window.location.href = "../platforms/ccic";
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
                    className="bg-blue-500 hover:bg-blue-500 text-white font-bold my-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    colorScheme="blue"
                    onClick={() => {
                      window.location.href = "../components/boardDetails";
                    }}
                  >
                    <GiArchiveRegister className="inline-block w-6 h-6 mr-2" />
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
