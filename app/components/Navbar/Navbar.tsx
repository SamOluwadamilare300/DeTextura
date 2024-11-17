
import { buttonVariants } from "@/components/ui/button";
import MaxWithWrapper from "../MaxWithWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;




  return (
       
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWithWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <h5>
              <span className="text-orange-600">Textura</span>
            </h5>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </Link>

                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}

              
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>

                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
              </>
            )}

            {/* Display the Create link for both logged in and logged out users */}
            <Link
              href="/main"
              className={buttonVariants({
                size: "sm",
                className: "hidden sm:flex items-center gap-1",
              })}
            >
              Create
              <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWithWrapper>
    </nav>
  );
};

export default Navbar;
