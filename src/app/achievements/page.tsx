
import AchievementsHead from "@/components/organism/AchievementsHead";
import SectionAchievements from "@/components/organism/SectionAchievements";
import { FrontendAchievements, CollegeAchievement } from "@/constants/achievementLists";

export const metadata = {
  title: "Achievements O. Riastanjung",
  description:
    "Achievements O. Riastanjung you need to know, where he is a Frontend Developer, special in ReactJS environment code.",
};

export default function AchievementsPage() {
  return (
    <main className=" py-10  md:py-2 min-h-screen ">
      <AchievementsHead />
      <SectionAchievements sectionTitle="Developer Achievements" data={FrontendAchievements} direction="left"/>
      <SectionAchievements sectionTitle="College Achievements" data={CollegeAchievement} direction="right"/>
    </main>
  );
}
