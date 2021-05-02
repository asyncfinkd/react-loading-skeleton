import React from "react";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonProfile({ theme }) {
  const themeClass = theme || "light";
  return (
    <>
      <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-profile">
          <div>
            <SkeletonElement type="avatar" />
          </div>
          <div>
            <SkeletonElement type="title" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
          </div>
        </div>
      </div>
    </>
  );
}
