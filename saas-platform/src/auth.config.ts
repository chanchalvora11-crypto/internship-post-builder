import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        return null; // This will be overridden in the main auth.ts
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isGenerate = nextUrl.pathname.startsWith("/dashboard/generate");

      if (isDashboard || isGenerate) {
        if (isLoggedIn) return true;
        return false; // Redirect to login
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
