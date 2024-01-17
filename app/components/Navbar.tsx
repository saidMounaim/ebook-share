import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-slate-900 py-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl text-white font-bold">
          E-Book Share
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link
              href="/book/create"
              className="bg-slate-100 text-primary font-medium"
            >
              Post a book
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
