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
          subtitle: "Main programming language with 3.11.2 version",
          link: "https://www.python.org/ftp/python/3.11.2/python-3.11.2-amd64.exe",
        },
        {
          maintitle: "VSCode",
          subtitle: "Main IDE for programming",
          link: "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64",
        },
        {
          maintitle: "Source Tree",
          subtitle: "Git GUI with 3.4.15 version",
          link: "https://product-downloads.atlassian.com/software/sourcetree/windows/ga/SourceTreeSetup-3.4.15.exe",
        },
        {
          maintitle: "Notepad++",
          subtitle: "Text editor with 8.5.8 version",
          link: "https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.5.8/npp.8.5.8.Installer.x64.exe",
        },
        {
          maintitle: "Bandizip",
          subtitle: "File archiver",  
          link: "https://kr.bandisoft.com/bandizip/dl.php?web",
        },
      ],
    },
    {
      name: "Specific Programs for Platforms",
      items: [
        {
          maintitle: "WinSCP",
          subtitle: "FTP client with 6.1.2 version",
          link: "https://winscp.net/download/WinSCP-6.1.2-Setup.exe",
        },
        {
          maintitle: "Putty",
          subtitle: "SSH client with 0.79 version",
          link: "https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.79-installer.msi",
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
                    <div className="text-2xl font-semibold uppercase tracking-wider text-amber-700">
                      {item.name}
                    </div>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                      {item.items?.map((item, index) => (
                        <a
                          key={index}
                          className="group block space-y-1.5 rounded-lg bg-blue-500 px-5 py-3 hover:bg-sky-500"
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
