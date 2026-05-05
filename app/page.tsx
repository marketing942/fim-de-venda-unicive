import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Checklist from "@/components/Checklist";
import Credibility from "@/components/Credibility";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Checklist />
        <Credibility />
      </main>
      <Footer />
    </div>
  );
}
