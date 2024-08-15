
import Biography from "@/components/organism/Biography";
import Education from "@/components/organism/Education";
import Experience from "@/components/organism/Experience";
import TechList from "@/components/organism/TechList";

export const metadata = {
  title : "About O. Riastanjung",
  description : "About O. Riastanjung you need to know, where he is a Frontend Developer, special in ReactJS environment code."
}

export default function AboutPage() {
  return (
    <main className=" py-10  md:py-2 min-h-screen ">
        <Biography />
        <Education />
        <TechList />
        <Experience />
    </main>
  );
}
