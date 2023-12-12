"use client";
import React, { useEffect } from "react";

const BootstrapInit = () => {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return <div></div>;
};

export default BootstrapInit;
