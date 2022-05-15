import Head from "next/head";
import Image from "next/image";
import PostCard from "../components/post/PostCard";
import { supabase } from "../utils/supabase";
import { GetServerSideProps } from "next";
import { useRecoilState, useRecoilValue } from "recoil";
import { userData, userStateChanger } from "../states/states";

type posts = {
  id: number;
  title: string;
  desc: string;
  image: string;
  created_at: string;
  views: number;
  author: author;
};

type author = {
  id: number;
  name: string;
  image: string;
};

export default function Home({ users }: { users: any }) {

  return (
    <div className="lg:px-6 2xl:px-32 px-2 mb-8 pt-8">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 lg:gap-12 gap-4">
        {/* videos */}
        {/* {posts?.map((post, index) => (
          <div className="md:col-span-3 col-span-1" key={index}>
            <PostCard post={post} />
          </div>
        ))} */}
        {/* /videos/ */}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if (!user) {
    return { redirect: { permanent: false, destination: "/auth", props: {} } };
  }

  const { data: users } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return {
    props: { users: users }, // will be passed to the page component as props
  };
};
