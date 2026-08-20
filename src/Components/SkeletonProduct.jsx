import React from "react";

export default function SkeletonProduct() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden animate-pulse">

      {/* Image Skeleton */}
      <div className="bg-gray-50 p-5">
        <div className="w-full h-56 bg-gray-200 rounded-xl"></div>
      </div>

      {/* Content Skeleton */}
      <div className="p-5">

        {/* Title */}
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>

        {/* Category */}
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>

        {/* Rating */}
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>

        {/* Price */}
        <div className="h-7 bg-gray-200 rounded w-1/2 mb-5"></div>

        {/* Button */}
        <div className="h-11 bg-gray-200 rounded-xl w-full"></div>

      </div>
    </div>
  );
}