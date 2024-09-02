import Header from "@/layout/Header";
function Layout({ children }) {
    return(
        <>
        <Header/>
        <div>
            {children}
        </div>
        </>
    );
}
export default Layout;