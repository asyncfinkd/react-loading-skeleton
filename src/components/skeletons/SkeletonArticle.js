import React from "react";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonArticle() {
  return (
    <>
      <div className="skeleton-wrapper">
        <div className="skeleton-article">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </>
  );
}
