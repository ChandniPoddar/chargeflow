"use client";

import { useRouter } from "next/navigation";
import SelectVehicleTypeModal from "./SelectVehicleTypeModal";

export default function SelectVehiclePage() {
  const router = useRouter();

  return (
    <SelectVehicleTypeModal
      open={true}
      onClose={() => router.push("/")}
    />
  );
}
