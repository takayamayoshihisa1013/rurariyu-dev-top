import { ReactNode } from "react";
import PortfolioIcon from "../components/icons/PortfolioIcon";

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
        site_explain: "ポートフォリオサイト",
        link: "https://portfolio.rurariyu.dev",
        css: {},
        icon: <PortfolioIcon />
    }
]