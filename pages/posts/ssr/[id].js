import Image from 'next/image'

export default function PostDetail ({
  title,
  author,
  imageName,
  imageWidth,
  imageHeight,
  content
}) {
  return (
    <div className='container'>
      <main className='main'>
        <h1 className='title'>{title}</h1>
        <div className='post-image'>
          <picture>
            <source
              srcSet={`/images/posts/${imageName}.webp`}
              type='image/webp'
              media='(min-width: 600px)'
            />
            <Image
              src={`/images/posts/${imageName}.jpg`}
              alt='Picture of post'
              width={imageWidth}
              height={imageHeight}
            />
          </picture>
        </div>
        <div className='post-content'>{content}</div>
        <h3 className='post-author'>Escrito por: {author}</h3>
      </main>
    </div>
  )
}

export const getServerSideProps = async ctx => {
  const id = ctx.params.id
  const res = await fetch('http://localhost:3001/posts/' + id)
  const post = await res.json()

  return { props: post }
}
