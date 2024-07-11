import { SideBar } from "@/components/SideBar";
import { Foods } from "@/features/dashboard/routes/Foods";
import { Landing } from "@/features/landing/routes/Landing";
import { MetaLayout } from "@/layouts/MetaLayout";

export default function Home() {
  return (
    <MetaLayout title="Dashboard">
      <div className="flex">
        <SideBar />
        <div className="flex-1 h-full">
          <Foods />
        </div>
      </div>
    </MetaLayout>
  );
}
