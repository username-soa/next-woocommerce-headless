"use client";

import * as React from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(<>{children}</>, document.querySelector("#popup-portal"))
    : null;
};
export default Portal;
