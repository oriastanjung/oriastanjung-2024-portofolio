
import Biography from "@/components/organism/Biography";
import TechList from "@/components/organism/TechList";


export default function AboutPage() {
  return (
    <main className=" py-10  md:py-2 min-h-screen ">
        <Biography />
        <TechList />
    </main>
  );
}
