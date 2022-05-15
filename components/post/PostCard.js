import Image from "next/image";
import Link from "next/link";
import React from "react";
import WebImage from "../others/WebImage";
import moment from "moment";

export default function PostCard({ post }) {
  return (
    <>
      <div className="flex flex-col md:block cursor-pointer md:mb-4 mb-2 relative p-2 lg:p-1 transition-all duration-300 rounded-2xl">
        <Link href={`/a/${post.author_id.id}`}>
          {/* author */}
          <div className="mb-2 flex justify-start items-center group">
            {/* images */}
            <Image
              src={post.author_id.image}
              width={40}
              height={40}
              layout="fixed"
              className="rounded-full group-hover:brightness-[.7] transition-all duration-300"
            />
            <p className="ml-2">{post.author_id.name}</p>
          </div>
        </Link>

        <Link href={`/p/${post.id}`}>
          {/*  */}
          <div className="group sm:flex-row sm:justify-between flex flex-col md:flex-col">
            <div className="sm:w-1/2 md:w-full">
              <WebImage
                src={post.image}
                quality={40}
                width={500}
                height={270}
                layout="responsive"
                className={`rounded-2xl group-hover:brightness-[.7] transition-all duration-300`}
              />
            </div>

            {/* title & other info */}
            <div className="sm:w-1/2 sm:ml-2 md:w-full">
              <h1 className="lg:my-2 my-2 md:text-2xl text-xl font-medium font-Poppins text-headingColor">
                {post.title}
              </h1>

              <h1 className="hidden sm:block md:hidden lg:my-2 my-2 md:text-2xl text-lg font-Poppins text-lightTextColor">
                {post.desc.slice(0, 50)}...
              </h1>

              <p>
                {post.views} views • Uploaded{" "}
                {moment(post.created_at).startOf("seconds").fromNow()}
              </p>
            </div>
          </div>
        </Link>
        {/*  */}
      </div>
    </>
  );
}
