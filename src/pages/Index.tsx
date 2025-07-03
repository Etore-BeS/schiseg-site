import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div id="inicio">
        <Hero />
      </div>
      <div id="produtos">
        <ProductsSection />
      </div>
      <div id="sobre">
        <AboutSection />
      </div>
      <div id="contato">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
