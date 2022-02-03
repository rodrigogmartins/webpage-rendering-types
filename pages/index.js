import { useEffect, useState } from 'react'

export default function Home () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData () {
      try {
        const res = await fetch('http://localhost:3001/posts')
        const posts = await res.json()

        setPosts(posts)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='container'>
      <main className='main'>
        <h1 className='title'>Bem vindo ao Blog do Zé</h1>
        <div className='grid'>
          {posts.map(post => (
            <a href={`/posts/static-site-generation/${post.id}`} key={post.id} className='card'>
              <h2>{post.title} &rarr;</h2>
              <p>{post.summary}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
