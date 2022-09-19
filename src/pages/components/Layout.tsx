import Navbar from "./Navbar";


export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )};