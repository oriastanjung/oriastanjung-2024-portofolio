
import ProjectContent from "@/components/organism/ProjectContent";
export const metadata = {
    title : "Projects O. Riastanjung",
    description : "Projects have been develop by O. Riastanjung."
  }
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10 md:px-6 md:py-2 ">
        <ProjectContent />
    </main>
  );
}
