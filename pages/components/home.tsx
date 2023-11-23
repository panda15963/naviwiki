import { NavBar } from "./NavBar";
import styles from "../../styles/index.module.scss";
import Footer from "./footer";
export default function Home() {
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
      name: "General",
      items: [
        {
          maintitle: "Download",
          subtitle: "Download and install a program for platform",
          link: "/components/download",
        },
        {
          maintitle: "Manual Guide",
          subtitle:
            "Descriptions page about the program. More details are in this page",
          link: "/components/manualGuide",
        },
      ],
    },
    {
      name: "Platforms",
      items: [
        {
          maintitle: "STD5W",
          subtitle: "Guide about STD5W",
          link: "/platforms/std5w",
        },
        {
          maintitle: "PRM6",
          subtitle: "Guide about PRM6",
          link: "/platforms/prm6",
        },
        {
          maintitle: "ccIC",
          subtitle: "Guide about ccIC",
          link: "/platforms/ccic",
        },
        {
          maintitle: "ccIC27",
          subtitle: "Guide about ccIC27",
          link: "/platforms/ccic27",
        },
        {
          maintitle: "ccNC",
          subtitle: "Guide about ccNC",
          link: "/platforms/ccnc",
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
                  ModiM Wiki
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
                          <div className="font-medium text-stone-900 font-extrabold group-hover:text-stone-100">
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
