"use client";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  className?: string;
  imageClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function VehicleCard({
  name,
  image,
  className = "",
  imageClassName = "",
  imageWidth = 180,
  imageHeight = 120,
}: Props) {
  const resolvedImageClass = imageClassName
    ? `object-contain ${imageClassName}`
    : "object-contain h-[120px]";

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border
                  hover:shadow-md transition
                  flex flex-col items-center p-4 cursor-pointer ${className}`}
    >
      <Image
        src={image}
        alt={name}
        width={imageWidth}
        height={imageHeight}
        className={resolvedImageClass}
      />
      <p className="mt-3 text-[18px] font-semibold text-[#1f1f1f] text-center">
        {name}
      </p>
    </div>
  );
}
