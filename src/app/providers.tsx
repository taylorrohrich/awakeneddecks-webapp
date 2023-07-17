"use client";

import { PropsWithChildren } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const Providers = ({ children }: PropsWithChildren) => (
  <UserProvider>{children}</UserProvider>
);