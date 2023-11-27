import { useState } from "react";
import Link from "next/link";
import {
  BsWikipedia,
  BsDownload,
  BsFillHouseFill,
  BsListUl,
} from "react-icons/bs";
import { AiFillCaretLeft } from "react-icons/ai";
import { BiNavigation } from "react-icons/bi";
import { RiNavigationLine } from "react-icons/ri";
import { FiNavigation2 } from "react-icons/fi";
import { TbNavigation } from "react-icons/tb";
import { RiGuideFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
export function NavBar() {
  const SignOut = () => {
    setTimeout(() => (window.location.href = "/"), 1000);
  };
  const logoFont = {
    FontFace: {
      fontFamily: "InkLipquid",
      fontWeight: "bold",
      src: "url(/fonts/Playfair_Italic_VariableFont) format(truetype)",
    },
  };
  type SideMenus = {
    name?: string;
    items?: {
      icon?: any;
      title?: string;
      link?: any;
    }[];
  };
  const data: SideMenus[] = [
    {
      name: "General",
      items: [
        {
          icon: BsFillHouseFill,
          link: <Link href="/components/home">Home</Link>,
        },
        {
          icon: BsDownload,
          link: <Link href="/components/download">Download</Link>,
        },
        {
          icon: RiGuideFill,
          link: <Link href="/components/boardDetails">Board</Link>,
        },
      ],
    },
    {
      name: "Platforms",
      items: [
        {
          icon: BiNavigation,
          link: <Link href="/platforms/std5w">STD5W</Link>,
        },
        {
          icon: RiNavigationLine,
          link: <Link href="/platforms/prm6">PRM6</Link>,
        },
        { icon: FiNavigation2, link: <Link href="/platforms/ccic">CCIC</Link> },
        {
          icon: FiNavigation2,
          link: <Link href="/platforms/ccic27">CCIC27</Link>,
        },
        { icon: TbNavigation, link: <Link href="/platforms/ccnc">CCNC</Link> },
      ],
    },
  ];
  const [open, setOpen] = useState(true);
  const toggleMenu = {
    open: () => setOpen(!open),
  };
  return (
    <>
      <div className="flex">
        <div
          className={`bg-yellow-50 h-screen p-5 pt-5 ${
            open ? "w-72" : "w-20 "
          } relative duration`}
        >
          <AiFillCaretLeft
            className={`text-orange-500 text-4xl absolute -right-3 top-9 cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={toggleMenu.open}
          />
          <BsWikipedia className="text-4xl cursor-pointer block float-left mr-2" />
          <h1
            className={`text-black origin-left font-medium text-2xl ${
              !open && "hidden"
            }`}
            style={logoFont.FontFace}
          >
            <div>ModiM Wiki</div>
          </h1>
          <div className="grow">
            {data.map((group, index) => (
              <div key={index} className="my-12">
                <BsListUl className="text-3xl float-left mr-2 mx-1 cursor-pointer text-blue-700" />
                <div
                  className={`mb-2 ml-4 font-bold text-xl text-sky-500 ${
                    !open && "hidden"
                  }`}
                  style={logoFont.FontFace}
                >
                  {group.name}
                </div>
                {group.items?.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center mb-2 ml-4 text-m font-bold text-orange-500 px-5 ${
                      !open && "hidden"
                    }`}
                  >
                    <item.icon className="mr-2 text-blue-500" />
                    {item.link}
                  </div>
                ))}
              </div>
            ))}
            <CiLogout
              className="text-3xl float-left mr-2 mx-1 cursor-pointer text-blue-700"
              onClick={SignOut}
            />            
            <Link className={`flex items-center mb-2 ml-4 text-m font-bold text-orange-500 px-5 ${!open && "hidden"}`} href="/">
                LogOut
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}
