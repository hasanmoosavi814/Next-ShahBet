"use client";

import type { ReactNode } from "react";

import { Provider } from "react-redux";
import { store } from "@/services";

export default function FootballProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
