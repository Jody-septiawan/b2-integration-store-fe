import { Login } from "@/features/auth/routes/Login";
import { MetaLayout } from "@/layouts/MetaLayout";

export default function Home() {
  return (
    <MetaLayout title="Login">
      <Login />
    </MetaLayout>
  );
}
