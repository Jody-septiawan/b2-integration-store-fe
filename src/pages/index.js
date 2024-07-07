import { Landing } from "@/features/landing/routes/Landing";
import { MetaLayout } from "@/layouts/MetaLayout";

export default function Home() {
  return (
    <MetaLayout>
      <Landing />
    </MetaLayout>
  );
}
