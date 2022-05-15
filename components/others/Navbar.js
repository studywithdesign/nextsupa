import React from "react";
import Link from "next/link";
import { supabase } from "../../utils/supabase";
import { Router, useRouter } from "next/router";

export default function Navbar() {
  const user = supabase.auth.user();

  const router = useRouter();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    router.push("/auth");
  }

  return (
    <>
      <nav className="sticky top-0 z-[999]">
        <div className="flex justify-between p-4 bg-backgroundColor">
          {/* Logo */}
          <div className="navbar-btn bg-black hover:bg-stone-900">
            <Link href="/">
              <p>NextSupa</p>
            </Link>
          </div>
          {/* Login Button */}

          {!user ? (
            <>
              <Link href="/auth">
                <div className="bg-primaryColor navbar-btn hover:bg-blue-600">
                  <p>Login</p>
                </div>
              </Link>
            </>
          ) : (
            <>
              <div
                onClick={(e) => handleLogout(e)}
                className="bg-red-500 navbar-btn hover:bg-red-600"
              >
                <p>Logout</p>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
