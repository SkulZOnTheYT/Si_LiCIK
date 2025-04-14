// rencananya akan berpindah ke backend

  
  // Function untuk mendapatkan semua blog posts
  export const getBlogPosts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(blogPosts)
      }, 500)
    })
  }
  
  // Function untuk mendapatkan blog post berdasarkan slug
  export const getBlogPostBySlug = (slug) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = blogPosts.find((post) => post.slug === slug)
        resolve(post || null)
      }, 500)
    })
  }
  
  