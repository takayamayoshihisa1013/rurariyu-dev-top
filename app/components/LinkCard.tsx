import LinkCardArrow from "./icons/LinkCardArrow";
import Link from "next/link";

type card = {
    page_name: string;
    page_name_explain: string;
    icon: React.ReactNode;
    className?: string;
    link: string;
}

export default function LinkCard({ page_name, page_name_explain, icon, className, link }: card) {
    return (
        <Link href={link} target="_blank" className={`page-link-card ${className}`}>
            <div>
                {icon}
                <h3>{page_name}</h3>
                <p>{page_name_explain}</p>
            </div>
            <button>
                <p>GO</p>
                <LinkCardArrow />
            </button>
        </Link>
    )
}