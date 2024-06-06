"use client";
import React from "react";
import { CounterContextProvider } from "./counterContext/counterContext";
export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
     <CounterContextProvider>{children}</CounterContextProvider>
    </div>
  );
}
