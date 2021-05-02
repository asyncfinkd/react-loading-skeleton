import React from "react";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonProfile() {
  return (
    <>
      <div className="skeleton-wrapper">
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
