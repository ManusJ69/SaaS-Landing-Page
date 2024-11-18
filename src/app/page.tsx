import { Hero } from "@/components/Home_sections/sections/Hero"
import { LogoTicker } from "@/components/Home_sections/sections/LogoTicker"
import { ProductShowcase } from "@/components/Home_sections/sections/ProductShowcase"
import { Pricing } from "@/components/Home_sections/sections/Pricing"
import { Testimonials } from "@/components/Home_sections/sections/Testimonials"
import { CallToAction } from "@/components/Home_sections/sections/CallToAction"

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
}
