import { ReactNode } from "react";
import PortfolioIcon from "../components/icons/PortfolioIcon";
import GlobalAnomalousActivityMonitoringOrganizationIcon from "../components/icons/GlobalAnomalousActivityMonitoringOrganizationIcon";

export type pageinfo = {
    name:         string;
    site_explain: string;
    link:         string;
    css?:         {};
    icon:         ReactNode
}

export const PageInfo: pageinfo[] = [
    {
        name: "Yoshihisa Takayama`s Portfolio Site",
        site_explain: "高山 慶久のポートフォリオサイト",
        link: "https://portfolio.rurariyu.dev",
        css: {},
        icon: <PortfolioIcon />
    },
    {
        name: "世界異常観測システム",
        site_explain: "どこかの世界の異常を観測するシステム",
        link: "https://wam-panopticon.rurariyu.dev",
        css: {},
        icon: <GlobalAnomalousActivityMonitoringOrganizationIcon />
    }
]