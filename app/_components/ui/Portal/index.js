"use client";

import * as React from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(<>{children}</>, document.querySelector("#myportal"))
    : null;
};
export default Portal;
