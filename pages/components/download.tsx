import { NavBar } from "./NavBar";
import styles from "../../styles/index.module.scss";
import Footer from "./footer";
export default function Download() {
  type MainMenu = {
    name?: string;
    items?: {
      maintitle?: string;
      subtitle?: string;
      link?: any;
    }[];
  };
  const menus: MainMenu[] = [
    {
      name: "Common Programs",
      items: [
        {
          maintitle: "Python",
          subtitle: "Main programming language",
          link: "/components/download",
        },
        {
          maintitle: "VSCode",
          subtitle: "Main IDE for programming",
          link: "/components/boardDetails",
        },
        {
          maintitle: "Source Tree",
          subtitle: "Git GUI",
          link: "/components/boardDetails",
        },
        {
          maintitle: "Notepad++",
          subtitle: "Text editor",
          link: "/components/boardDetails",
        },
        {
          maintitle: "Microsoft Office",
          subtitle: "Office suite",
          link: "/components/boardDetails",
        },
        {
          maintitle: "Bandizip",
          subtitle: "File archiver",  
          link: "/components/boardDetails",
        },
        {
          maintitle: "Git Bash",
          subtitle: "Git CLI",  
          link: "/components/boardDetails",
        },
      ],
    },
    {
      name: "Specific Programs for Platforms & RamdomAiming",
      items: [
        {
          maintitle: "WinSCP",
          subtitle: "FTP client",
          link: "/components/boardDetails",
        },
        {
          maintitle: "Putty",
          subtitle: "SSH client",
          link: "/components/boardDetails",
        },
        {
          maintitle: "SatGen",
          subtitle: "GPS simulator",
          link: "/components/boardDetails",
        },
        {
          maintitle: "Google Earth Pro",
          subtitle: "Map viewer",
          link: "/components/boardDetails",
        },
      ],
    },
  ];
  return (
    <div className="wrapper">
      <div className="flex">
        <NavBar />
        <div className={styles.main_style}>
          <div className="rounded-lg bg-yellow-50 p-6">
            <div className="space-y-8">
              <div className={styles.main_title}>
                <h1 className="text-stone-900 text-4xl">
                  Downloads
                </h1>
              </div>
              <div className="space-y-10">
                {menus.map((item, index) => (
                  <div key={index}>
                    <div className="text-2xl font-semibold uppercase tracking-wider text-sky-500">
                      {item.name}
                    </div>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                      {item.items?.map((item, index) => (
                        <a
                          key={index}
                          className="group block space-y-1.5 rounded-lg bg-amber-600 px-5 py-3 hover:bg-amber-500"
                          href={item.link}
                        >
                          <div className="font-medium text-stone-900 group-hover:text-stone-100">
                            {item.maintitle}
                          </div>
                          <div className="text-sm text-stone-700 line-clamp-3 font-bold group-hover:text-gray-200">
                            {item.subtitle}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
