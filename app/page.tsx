"use client"
import { useEffect, useRef, useState } from "react";
import LogText from "./components/LogText";
import { logs } from "./constants/Logs";

import "./css/top.css";
import LinkCardIon from "./components/icons/PortfolioIcon";
import LinkCardArrow from "./components/icons/LinkCardArrow";
import LinkCard from "./components/LinkCard";
import GlobalAnomalousActivityMonitoringOrganizationIcon from "./components/icons/GlobalAnomalousActivityMonitoringOrganizationIcon";
import { PageInfo, pageinfo } from "./constants/PageInfo";

type VisibleLogs = {
  text: string;
  type?: "command" | "success" | "info" | "error";
  elapsed: number;
}

export default function Home() {
  const [visibleLogs, setVisibleLogs] = useState<VisibleLogs[]>([]);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    let elapsed = 0;

    logs.forEach((log) => {
      elapsed += log.delay;
      const currentElapsed = elapsed;

      setTimeout(() => {
        setVisibleLogs((prev) => [
          ...prev,
          {
            ...log,
            elapsed: currentElapsed,
          },
        ]);
      }, currentElapsed);


    });
    setTimeout(() => {
      setShowContent(true);
    }, elapsed + 500);
  }, [])

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="top">
          <section className="top-log">
            {
              visibleLogs.map((log, key) => (
                <LogText key={key} text={log.text} type={log.type} elapsed={log.elapsed} />
              ))
            }
          </section>
          <section className={`contents ${showContent ? "show" : "hide"
            }`} >
            <div className="profile-img">
              <img src="/images/takayama-yoshihisa.jpg" alt="" />
            </div>
            <div className="profile-text">
              <h2>高山 慶久</h2>
              <p>このサイトをご覧いただきありがとうございます。</p>
              <p>社会人一年目、高山慶久と申します。</p>
              <p>普段はコードを書いたり、深夜徘徊したり、自由に生きています。</p>
            </div>
          </section>
        </div>
        <section className={`page-links ${showContent ? "show" : "hide"
          }`}>
          {
            PageInfo.map((page: pageinfo) => (
              <LinkCard page_name={page.name} page_name_explain={page.site_explain} icon={page.icon} link={page.link} />
            ))
          }

          <LinkCard page_name="Comming soon..." page_name_explain="お待ちください..." icon={<GlobalAnomalousActivityMonitoringOrganizationIcon />} link="" />
          <LinkCard page_name="Comming soon..." page_name_explain="お待ちください..." icon={<GlobalAnomalousActivityMonitoringOrganizationIcon />} link="" />
        </section>
      </main>
    </div>
  );
}
