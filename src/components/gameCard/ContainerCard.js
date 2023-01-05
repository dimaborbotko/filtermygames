import React from "react";

export default function ContainerCard({children}) {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-flow-row gap-1  mt-8">
      {children}
    </div>
  );
}
