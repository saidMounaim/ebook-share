import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-slate-900 py-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl text-white font-bold">
          E-Book Share
        </Link>
        <div className="flex items-center gap-2">
          {!session && (
            <>
              <Button variant="outline" asChild>
                <Link
                  href="/login"
                  className="bg-slate-100 text-primary font-medium"
                >
                  Login
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="/register"
                  className="bg-slate-800 text-white font-medium"
                >
                  Register
                </Link>
              </Button>
            </>
          )}
          {session && (
            <>
              <Button variant="outline" asChild>
                <Link
                  href="/user/profile"
                  className="bg-slate-100 text-primary font-medium"
                >
                  My Profile
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="/book/create"
                  className="bg-slate-100 text-primary font-medium"
                >
                  Post a book
                </Link>
              </Button>
              <LogoutButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
