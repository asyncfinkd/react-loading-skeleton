import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonArticle({ theme }) {
  const themeClass = theme || "light";

  return (
    <>
      <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-article">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <Shimmer />
      </div>
    </>
  );
}
