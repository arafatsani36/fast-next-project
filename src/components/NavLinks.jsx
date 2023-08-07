"use client"
import className from "@/utils/className";
import Link from "next/link";
import{usePathName} from "next/navigation"


const NavLinks = ({children, href, activeClassName, ...props}) => {
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLinks;