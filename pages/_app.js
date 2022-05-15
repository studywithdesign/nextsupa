import "../styles/globals.css";
import Navbar from "../components/others/Navbar";
import { supabase } from "../utils/supabase";
import { RecoilRoot } from "recoil";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const [authenticatedState, setAuthenticatedState] =
    useState("not-authenticated");

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === "SIGNED_IN") {
          setAuthenticatedState("authenticated");
        }
        if (event === "SIGNED_OUT") {
          setAuthenticatedState("not-authenticated");
        }
      }
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  async function handleAuthChange(event, session) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  async function checkUser() {
    const user = await supabase.auth.user();

    if (user) {
      setAuthenticatedState("authenticated");
    }

    if (!user) {
      setAuthenticatedState("not-authenticated");
    }
  }

  return (
    <>
      <RecoilRoot>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
