import { useRouter } from "next/router";
import Image from "next/image";

export default function PostDetail({
  title,
  author,
  imageName,
  imageWidth,
  imageHeight,
  content,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">{title}</h1>
        <div className="post-image">
          <Image
            src={`/images/posts/${imageName}.jpg`}
            alt="Picture of post"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        <div className="post-content">{content}</div>
        <h3 className="post-author">Author: {author}</h3>
      </main>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const res = await fetch("http://localhost:3001/posts/" + id);
  const post = await res.json();
  
  return {
    props: post,
    revalidate: 3,
  };
};

export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [],
  };
};
