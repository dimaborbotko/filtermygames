import React from "react";

export default function ContainerCard({children}) {
  return (
    <div className="grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 grid-flow-row gap-1  mt-8">
      {children}
    </div>
  );
}
