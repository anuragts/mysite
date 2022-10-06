import Navbar from "./Navbar";
import Footer from "./Footer";
import {motion} from 'framer-motion'

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        {children}
        <Footer />
      </motion.div>
    </>
  );
}
