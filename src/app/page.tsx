import AILaptop from "@/components/ai-laptop";
import BenefitsSection from "@/components/benefits";
import WhyChooseUs from "@/components/why-choose-us";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-12 px-4">
      <div className="flex flex-col gap-4 mx-3 mt-20 text-center">
        <h1 className="text-3xl font-bold">Elevate your business with <span className="gradient-text">Automation</span></h1>
        <p className="text-sm text-slate-500">We use AI to create viral content, social posts, and emails to grow your brand effortlessly.</p>
      </div>
      <div className="">
        <AILaptop />
      </div>
      <div>
        <WhyChooseUs />
      </div>
    </div>
  );
}
