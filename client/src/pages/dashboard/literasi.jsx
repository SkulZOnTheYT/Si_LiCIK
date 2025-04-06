"use client"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getBlogPosts } from "../../utils/blog-data"

const Literasi = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getBlogPosts()
      setPosts(data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <main className="bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Finansial Literasi Si <span className="text-primary">LiCIK</span></h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Konten edukasi tentang literasi digital dan pengelolaan keuangan untuk UMKM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold text-gray-900">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="card-actions justify-end">
                  <Link to={`/dashboard/literasi/${post.slug}`} className="btn btn-outline btn-primary">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Literasi

