import Navbar from "./Navbar";
import Footer from "./Footer";
// import { Html } from "next/document";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  )};