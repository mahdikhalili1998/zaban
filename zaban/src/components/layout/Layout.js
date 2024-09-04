import Header from "@/layout/Header";
function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="m-6">{children}</div>
    </>
  );
}
export default Layout;
