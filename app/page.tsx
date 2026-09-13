import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalogue from "@/components/Catalogue";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Catalogue />
        <Reassurance />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}