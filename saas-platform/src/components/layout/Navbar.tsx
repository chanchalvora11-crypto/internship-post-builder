import Link from "next-auth";
import { auth, signOut } from "@/auth";
import LinkNext from "next/link";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <LinkNext href="/" className="text-xl font-bold text-primary">
              Internship Post Builder
            </LinkNext>
          </div>
          
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <LinkNext href="/dashboard" className="text-sm font-medium hover:text-primary">
                  Dashboard
                </LinkNext>
                <form action={async () => {
                  "use server";
                  await signOut();
                }}>
                  <button className="text-sm font-medium text-red-600 hover:text-red-700">
                    Sign Out
                  </button>
                </form>
              </>
            ) : (
              <>
                <LinkNext href="/login" className="text-sm font-medium hover:text-primary">
                  Login
                </LinkNext>
                <LinkNext href="/register" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90">
                  Get Started
                </LinkNext>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
