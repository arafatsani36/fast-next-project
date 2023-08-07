import Navbar from "@/components/navbar";

const WithLayout = ({children}) => {
    return (
        <div>
        <Navbar></Navbar>
        
        {children}
        
        <footer>Copyright 2023</footer>
        </div>
    );
};

export default WithLayout;