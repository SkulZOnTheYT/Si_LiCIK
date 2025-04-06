"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getBlogPostBySlug, getBlogPosts } from "../../utils/blog-data"
import { ArrowLeft, Heart, MessageCircle, Bookmark, Share2 } from "lucide-react"

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [claps, setClaps] = useState(0)
  const [hasClapped, setHasClapped] = useState(false)
  const [showClapsTooltip, setShowClapsTooltip] = useState(false)

  const handleScroll = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay
  };

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getBlogPostBySlug(slug)
      setPost(data)

      setClaps(Math.floor(Math.random() * 50) + 5)

      const allPosts = await getBlogPosts()
      const filtered = allPosts.filter((p) => p.id !== data?.id).slice(0, 3)
      setRelatedPosts(filtered)

      setLoading(false)
    }

    fetchPost()
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClap = () => {
    if (!hasClapped) {
      setClaps((prev) => prev + 1)
      setHasClapped(true)

      const clapButton = document.getElementById("clap-button")
      clapButton.classList.add("clap-animation")
      setTimeout(() => {
        clapButton.classList.remove("clap-animation")
      }, 700)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-6 h-6 border-2 border-gray-900 rounded-full animate-spin border-t-transparent"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Gk ada post nih</h2>
        <Link to="/dashboard/literasi" className="text-green-600 hover:text-green-700">
          Balik ke home
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen font-serif">
      <div className="fixed top-0 left-0 h-0.5 bg-gray-900 z-50" style={{ width: `${scrollProgress}%` }}></div>
      <div className="max-w-[700px] mx-auto px-4 pt-10 pb-20">
        <div className="mb-10">
          <Link to="/dashboard/literasi" className="inline-flex items-center text-gray-500 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Balik ke halaman utama</span>
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">{post.title}</h1>

          <section className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <img src="https://avatars.githubusercontent.com/u/92020118?v=4" alt="Author" className="w-full h-full object-cover" />
            </div>
            <div>
              <button onClick={() => handleScroll('author')} className="font-medium text-gray-900">SkulZOnTheYT</button>
              <div className="text-gray-500 text-sm flex items-center">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="mx-1">·</span>
                <span>{post.readTime} menit membaca</span>
              </div>
            </div>
          </section>
        </header>

        {/* gambar post */}
        <div className="mb-10 -mx-4 md:-mx-10">
          <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
        </div>

        {/* apresiasi sidebar */}
        <div className="hidden md:block fixed left-4 top-1/3 z-40">
          <div className="flex flex-col items-center space-y-6">
            <button
              id="clap-button"
              className="appreciation-button group relative"
              onClick={handleClap}
              onMouseEnter={() => setShowClapsTooltip(true)}
              onMouseLeave={() => setShowClapsTooltip(false)}
            >
              <div className="p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <Heart className={`w-6 h-6 ${hasClapped ? "text-green-600 fill-green-600" : "text-gray-500"}`} />
              </div>
              {showClapsTooltip && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                  {hasClapped ? "You appreciated this" : "Show appreciation"}
                </div>
              )}
            </button>
            <div className="text-sm text-gray-500 font-sans">{claps}</div>

            <button className="p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <MessageCircle className="w-6 h-6 text-gray-500" />
            </button>

            <button className="p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <Bookmark className="w-6 h-6 text-gray-500" />
            </button>

            <button className="p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <Share2 className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* isi dari blognya */}
        <article className="medium-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* tampilan mobile apresiasi */}
        <div className="md:hidden flex justify-between items-center border-t border-b border-gray-200 py-4 my-8">
          <div className="flex items-center">
            <button className="flex items-center space-x-2 mr-6" onClick={handleClap}>
              <Heart className={`w-6 h-6 ${hasClapped ? "text-green-600 fill-green-600" : "text-gray-500"}`} />
              <span className="text-sm text-gray-500">{claps}</span>
            </button>
            <button className="mr-6">
              <MessageCircle className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button>
              <Bookmark className="w-6 h-6 text-gray-500" />
            </button>
            <button>
              <Share2 className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        <section id="author" className="border-t border-b border-gray-200 py-8 my-10">
          <div className="flex items-start">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <img src="https://avatars.githubusercontent.com/u/92020118?v=4" alt="Author" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">SkulZOnTheYT</h3>
              <p className="text-gray-600 mb-3">
                Penulis finansial literasi Si LiCIK serta merupakan Web Developer yang berpengalaman 1+ tahun di front-end.
              </p>
              <a href='https://github.com/SkulZOnTheYT' className="px-4 py-1 border border-gray-900 text-gray-900 rounded-full text-sm hover:bg-gray-900 hover:text-white transition-colors">
                Profile Penulis
              </a>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6 font-serif">Artikel Lainnya dari Si <span className="text-primary">LiCIK</span></h2>
          <div className="space-y-8">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="flex flex-col md:flex-row gap-4">
                <div className="md:w-2/3">
                  <Link to={`/dashboard/literasi/${relatedPost.slug}`} className="block">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 hover:underline font-serif">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-2">{relatedPost.excerpt}</p>
                    <div className="text-gray-500 text-sm">
                      <span>
                        {new Date(relatedPost.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="mx-1">·</span>
                      <span>{relatedPost.readTime} menit membaca</span>
                    </div>
                  </Link>
                </div>
                <div className="md:w-1/3">
                  <Link to={`/dashboard/literasi/${relatedPost.slug}`} className="block">
                    <img
                      src={relatedPost.coverImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-36 h-24 md:h-20 object-cover rounded"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default BlogPost