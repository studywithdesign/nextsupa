import React from "react";
import { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { supabase } from "../utils/supabase";
import { Toaster, toast } from "react-hot-toast";
import Router, { useRouter } from "next/router";
import LoadingSpin from "react-loading-spin";

const auth: NextPage = ({ forSignUpQuery }: { forSignUpQuery: boolean }) => {
  const [forSignUp, setForSignUp] = useState(forSignUpQuery);

  //
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  // private
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    if (email !== null && password !== null && name !== null) {
      const { user, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
        },
        {
          data: { username },
        }
      );

      if (!error) {
        toast("Please check your mail inbox", { icon: "📭" });
      } else if (error) {
        toast.error(error.message);
      } else {
        toast("Error", { icon: "⛔" });
      }
    } else {
      toast("Please enter all inputs");
    }

    setLoading(false);
  }

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    if (email !== null && password !== null) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });

      if (!error) {
        toast.success("Signed In!");
        router.push("/");
      } else if (error) {
        toast.error(error.message);
      } else {
        toast("Error", { icon: "⛔" });
      }
    } else {
      toast("Please enter all inputs");
    }

    setLoading(false);
  }

  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center">
      {/* start */}
      <>
        {/* form */}
        <div className="bg-backgroundColor p-10 rounded-lg">
          {/* signIn form */}
          <form
            onSubmit={(e) => (forSignUp ? handleSignUp(e) : handleSignIn(e))}
          >
            {/* sign in heading */}
            <h1 className="text-xl lg:text-3xl mb-3 text-primaryColor font-bold">
              {forSignUp ? "Sign Up" : "Sign In"}
            </h1>

            {/* name input box */}
            {forSignUp ? (
              <>
                <div className="input-div">
                  <label htmlFor="" className="input-label">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-box"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </>
            ) : null}

            {/* email input box */}
            <div className="input-div">
              <label htmlFor="" className="input-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* password input box */}
            <div className="input-div mt-2">
              <label htmlFor="" className="input-label">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="input-box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* forgot password? */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <p className="mt-4 mb-2 cursor-pointer">Forgot Password?</p>
              <p
                className="mt-4 mb-6 cursor-pointer"
                onClick={(e) =>
                  forSignUp ? setForSignUp(false) : setForSignUp(true)
                }
              >
                Go to {forSignUp ? "Sign In" : "Sign Up"}
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`input-submit ${
                loading ? "bg-white !text-black" : "bg-primaryColor"
              }`}
            >
              {loading ? (
                <LoadingSpin size="15px" primaryColor="#4E4E4E" width="2px" />
              ) : (
                <>{forSignUp ? "Sign Up" : "Sign In"}</>
              )}
            </button>
          </form>
        </div>

        {/* end */}
      </>
    </div>
  );
};

export default auth;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if (user) {
    return {
      props: {},
      redirect: { destination: "/", permanent: false },
    };
  }

  const forSignUpQuery = context.query.forSignUp === "true" ? true : false;

  return {
    props: { forSignUpQuery: forSignUpQuery }, // will be passed to the page component as props
  };
};
