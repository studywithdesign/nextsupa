import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0">
        <div className="flex justify-between p-4 bg-backgroundColor">
          {/* Logo */}
          <div className="navbar-btn bg-black !transition-none">
            <p>NextSupa</p>
          </div>
          {/* Login Button */}
          <div className="bg-primaryColor navbar-btn hover:bg-blue-600">
            <p>Login</p>
          </div>
        </div>
      </nav>
    </>
  );
}
