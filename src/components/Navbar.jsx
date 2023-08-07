import Link from "next/link";

const navLink = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/phofile',
        title: 'Phofile'
    },
    {
        path: '/blog',
        title: 'Blog'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
]
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto">
            <h1 className=" text-4xl">Navbar</h1>
            <ul className="flex items-center justify-center">
              {
                navLink.map(({path, title}) => (
                    <li className="m-10" key={path}>
                    <Link className=" p-10" href={path}>{title}</Link>
                    </li>))
                
              }
            </ul>
        </nav>
    );
};

export default Navbar;