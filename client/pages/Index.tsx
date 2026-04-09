import { MainLayout } from "@/components/layout/main-layout";
import { ResumeCanvas } from "@/components/resume/resume-canvas";
import { SectionsPanel } from "@/components/resume/sections-panel";

export default function Index() {
  return (
    <MainLayout>
      <div className="flex h-full">
        <ResumeCanvas />
        <SectionsPanel />
      </div>
    </MainLayout>
  );
}
