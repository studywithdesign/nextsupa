import Head from "next/head";
import Image from "next/image";
import PostCard from "../components/post/PostCard";

export default function Home() {
  // image, title, desc, link, author
  const blogs = [
    {
      id: 1,
      title: "How to beat problems in daily life?",
      image:
        "https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      desc: "name",
      createdAt: "",
      author: {
        name: "Sri Guru Gobind Singh Ji",
        image:
          "https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    },
    {
      id: 2,
      title: "How to beat problems in daily life?",
      image:
        "https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      desc: "name",
      createdAt: "",
      author: {
        name: "Sri Guru Gobind Singh Ji",
        image:
          "https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    },
    {
      id: 3,
      title: "How to beat problems in daily life?",
      image:
        "https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      desc: "name",
      createdAt: "",
      author: {
        name: "Sri Guru Gobind Singh Ji",
        image:
          "https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    },
  ];

  return (
    <div className="lg:px-6 2xl:px-32 px-2 mb-8 pt-8">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-12 gap-12">
        {/* videos */}
        {blogs?.map((blog, index) => (
          <div className="lg:col-span-4 col-span-1" key={index}>
            <PostCard
              title={blog.title}
              link={`/p/${blog.id}`}
              image={blog.image}
              createdAt={blog.createdAt}
              author={blog.author}
            />
          </div>
        ))}
        {/* /videos/ */}
      </div>
    </div>
  );
}
