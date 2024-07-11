import { FoodDetail } from "@/features/food/routes/FoodDetail";
import { MetaLayout } from "@/layouts/MetaLayout";
import React from "react";

export default function Home() {
  return (
    <MetaLayout title="Food">
      <FoodDetail />
    </MetaLayout>
  );
}
