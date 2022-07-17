import { useRouter } from 'next/router'
import Image from 'next/image'

export default function PostDetail ({
  title,
  author,
  imageName,
  imageWidth,
  imageHeight,
  content
}) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className='container'>
      <main className='main'>
        <h1 className='title'>{title}</h1>
        <div className='post-image'>
          <Image
            src={`/images/posts/${imageName}.webp`}
            alt='Picture of post'
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        <div className='post-content'>{content}</div>
        <h3 className='post-author'>Author: {author}</h3>
      </main>
    </div>
  )
}

export const getStaticProps = async ctx => {
  const id = ctx.params.id
  const res = await fetch('http://localhost:3001/posts/' + id)
  const post = await res.json()

  return { props: post }
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3001/posts')
  const posts = await res.json()

  const paths = posts.map(post => {
    return { params: { id: post.id.toString() } }
  })

  return {
    fallback: false,
    paths
  }
}
