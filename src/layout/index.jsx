import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children, page, setPage }) {
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {children}
      <Footer />
    </>
  );
}
