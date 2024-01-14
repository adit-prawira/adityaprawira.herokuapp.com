import React from "react";
import "./styles/Page.css";

interface PageProps {
  readonly children: React.ReactNode;
}

export default function Page({ children }: PageProps): JSX.Element {
  return <div className="page">{children}</div>;
}
