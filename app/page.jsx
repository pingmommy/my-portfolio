import Header from "@/components/header/header";
import MainVideo from "@/components/main/mainVideo/mainVideo";
import Contact from "@/components/footer/contact";
import MainContents from "@/components/main/mainContents/mainContents";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainVideo />
        <MainContents />
      </main>
      <Contact />
    </>
  );
}
