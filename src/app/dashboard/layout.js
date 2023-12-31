import SideBar from "./SideBar";

export const metadata = {
    title: 'Manage Producat DashBoard || fast-next-project',
    description: 'Generated by create next app',
}

const DashBoardLayout = ({children}) => {
    return (
        <div className="flex container mx-auto">
            <SideBar></SideBar>
            <h1>{children}</h1>
        </div>
    );
};

export default DashBoardLayout;