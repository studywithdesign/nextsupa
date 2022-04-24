import Image from "next/image";
import Link from "next/link";
import React from "react";
import WebImage from "../others/WebImage";

export default function PostCard({ image, title, desc, link, author }) {
  return (
    <>
      <Link href={`${link}`}>
        <div className="sm:flex sm:justify-between md:block group cursor-pointer lg:mb-10 md:mb-4 mb-2 relative p-2 transition-all duration-300 rounded-2xl">
          <div className="sm:w-1/2 md:w-full">
            <WebImage
              src={image}
              quality={40}
              width={500}
              height={270}
              layout="responsive"
              className={`rounded-2xl group-hover:brightness-[.7] transition-all duration-300`}
            />
          </div>

          {/* author */}
          <div className="sm:w-1/2 sm:ml-2 md:w-full">
            <h1 className="lg:my-2 my-2 md:text-2xl text-xl font-medium font-Poppins text-headingColor">
              {title}
            </h1>

            {/* author */}
            <div className="flex justify-start items-center">
              {/* images */}
              <Image src={author.image} width={40} height={40} layout="fixed" className="rounded-full" />
              <p className="ml-2">{author.name}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
