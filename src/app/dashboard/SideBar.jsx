import Link from "next/link";

const navLinks = [
    {
        path:'/dashboard',
        title: 'Dashboard'
    },
    {
        path:'/dashboard/add-producat',
        title: 'Add Producat'
    },
    {
        path:'/dashboard/manage-producat',
        title: 'Manage producat'
    },
    {
        path:'/',
        title: 'Home'
    }
]
const SideBar = () => {
    return (
        <aside className=" mr-10 container mx-auto">
            <h1>Sidebar</h1>
            <ul>
                {
                    navLinks.map(({ path, title}) => (
                        <li key={path}>
                        <Link href={path}>{title}</Link>
                    </li>
                    ))
                }
            </ul>
        </aside>
    );
};

export default SideBar;