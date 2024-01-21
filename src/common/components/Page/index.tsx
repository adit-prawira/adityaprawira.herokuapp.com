import React from "react";

import "./style.css";

interface PageProps {
  readonly children: React.ReactNode;
}

function Page({ children }: PageProps): JSX.Element {
  return <div className="page">{children}</div>;
}

export default Page;
export { Page };
