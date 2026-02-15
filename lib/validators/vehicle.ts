export function validateVehicle(data: any) {
  if (!data) throw new Error("No data received");

  const requiredFields = [
    "plateNumber",
    "modelNumber",
    "year",
    "batteryCapacity",
    "rcNumber",
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      throw new Error(`Missing field: ${field}`);
    }
  }

  return {
    plateNumber: String(data.plateNumber).toUpperCase(),
    modelNumber: String(data.modelNumber),
    year: Number(data.year),
    connectorType: data.connectorType || "All Type",
    batteryCapacity: String(data.batteryCapacity),
    rcNumber: String(data.rcNumber),
    image: data.image || "",
    createdAt: new Date(),
  };
}
