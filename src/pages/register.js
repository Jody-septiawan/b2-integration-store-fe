import { Register } from "@/features/auth/routes/Register";
import { MetaLayout } from "@/layouts/MetaLayout";

export default function Home() {
  return (
    <MetaLayout title="Register">
      <Register />
    </MetaLayout>
  );
}
