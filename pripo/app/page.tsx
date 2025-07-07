import ContactSection from "@/components/contact";
import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
        <HeroSection />
        <Features />
        <Testimonials />
        <FAQsThree />
        <ContactSection />
        <FooterSection />
    </>
  );
}
