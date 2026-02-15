import VehicleCard from "./VehicleCard";

interface Vehicle {
  name: string;
  image: string;
}

export default function VehicleGrid({
  vehicles,
  gridClassName = "",
  cardClassName = "",
  imageClassName = "",
  imageWidth,
  imageHeight,
}: {
  vehicles: Vehicle[];
  gridClassName?: string;
  cardClassName?: string;
  imageClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${gridClassName}`}
    >
      {vehicles.map((v) => (
        <VehicleCard
          key={v.name}
          {...v}
          className={cardClassName}
          imageClassName={imageClassName}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
      ))}
    </div>
  );
}
