import {
  BarChart3,
  BookOpen,
  ChevronRight,
  CreditCard,
  FileText,
  LineChart,
  PieChart,
  ShoppingBag,
  Smartphone,
  Wallet,
} from "lucide-react"

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    SI LICIK
                  </h1>
                  <p className="text-xl text-yellow-300 font-semibold">Sistem Literasi Cerdas, Inovatif dan Keuangan</p>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Platform edukasi yang membantu UMKM memahami dan menerapkan teknologi digital dalam bisnis mereka.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="btn btn-warning gap-1">
                    Mulai Sekarang
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button className="btn btn-outline">Pelajari Lebih Lanjut</button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/src/assets/hero-image.jpg"
                  alt="SI LICIK Platform"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tantangan UMKM di Era Digital
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Banyak pelaku UMKM masih kurang memahami literasi digital dan pengelolaan keuangan secara modern.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/src/assets/umkm-challenges.jpg"
                alt="UMKM Challenges"
                width={400}
                height={400}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-300 text-black">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Pencatatan Transaksi</h3>
                      <p className="text-gray-600">
                        Kesulitan dalam mencatat dan melacak transaksi bisnis secara digital.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-300 text-black">
                      <Wallet className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Dompet Digital</h3>
                      <p className="text-gray-600">
                        Kurangnya pemahaman tentang penggunaan dompet digital dan transaksi online.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-300 text-black">
                      <ShoppingBag className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Pemasaran Online</h3>
                      <p className="text-gray-600">
                        Keterbatasan dalam memanfaatkan platform digital untuk pemasaran produk.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="fitur" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fitur SI LICIK</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Platform edukasi yang membantu UMKM memahami dan menerapkan teknologi digital dalam bisnis mereka.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-300/20">
                    <BookOpen className="h-8 w-8 text-yellow-300" />
                  </div>
                  <h3 className="card-title">Materi Pembelajaran</h3>
                  <p className="text-gray-600">
                    Konten edukasi tentang literasi digital dan pengelolaan keuangan untuk UMKM.
                  </p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-300/20">
                    <BarChart3 className="h-8 w-8 text-yellow-300" />
                  </div>
                  <h3 className="card-title">Laporan Keuangan</h3>
                  <p className="text-gray-600">Alat praktis untuk membuat dan mengelola laporan keuangan bisnis.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-300/20">
                    <PieChart className="h-8 w-8 text-yellow-300" />
                  </div>
                  <h3 className="card-title">Perencanaan Anggaran</h3>
                  <p className="text-gray-600">Fitur untuk merencanakan dan mengatur anggaran bisnis dengan efektif.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-300/20">
                    <Smartphone className="h-8 w-8 text-yellow-300" />
                  </div>
                  <h3 className="card-title">Transaksi Digital</h3>
                  <p className="text-gray-600">Panduan tentang penggunaan dompet digital dan transaksi online.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-300/20">
                    <CreditCard className="h-8 w-8 text-yellow-300" />
                  </div>
                  <h3 className="card-title">Pembayaran Online</h3>
                  <p className="text-gray-600">Edukasi tentang berbagai metode pembayaran digital untuk bisnis.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-300/20">
                    <LineChart className="h-8 w-8 text-yellow-300" />
                  </div>
                  <h3 className="card-title">Analisis Bisnis</h3>
                  <p className="text-gray-600">
                    Alat untuk menganalisis performa bisnis dan membuat keputusan berbasis data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tentang" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tentang SI LICIK</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    SI LICIK adalah platform edukasi yang dikembangkan untuk membantu UMKM memahami dan menerapkan
                    teknologi digital dalam bisnis mereka.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-300 text-black">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Pemahaman UMKM terhadap Literasi Digital</h3>
                      <p className="text-gray-600">
                        Kami meneliti sejauh mana pemahaman UMKM terhadap literasi digital dan mengidentifikasi
                        kesenjangan yang perlu diatasi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-300 text-black">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sistem Edukasi Berbasis Teknologi</h3>
                      <p className="text-gray-600">
                        Kami mengembangkan sistem edukasi berbasis teknologi yang dapat membantu UMKM dalam mengelola
                        keuangan mereka secara efektif.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/src/assets/about-image.jpg"
                  alt="About SI LICIK"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="cara-kerja" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cara Kerja SI LICIK</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bagaimana SI LICIK membantu UMKM meningkatkan literasi digital dan pengelolaan keuangan.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3">
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 text-black">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="card-title">Belajar</h3>
                  <p className="text-gray-600">
                    Akses materi pembelajaran tentang literasi digital dan pengelolaan keuangan untuk UMKM.
                  </p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 text-black">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="card-title">Praktik</h3>
                  <p className="text-gray-600">
                    Gunakan alat praktis untuk mengelola keuangan bisnis dan membuat laporan keuangan.
                  </p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 text-black">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="card-title">Kembangkan</h3>
                  <p className="text-gray-600">
                    Terapkan pengetahuan dan keterampilan baru untuk mengembangkan bisnis di era digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontak" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-300 text-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Siap Meningkatkan Bisnis Anda?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bergabunglah dengan SI LICIK dan tingkatkan kompetensi digital dan keuangan bisnis Anda.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input className="input input-bordered w-full" placeholder="Masukkan email Anda" type="email" />
                  <button type="submit" className="btn bg-black text-white hover:bg-black/80">
                    Daftar Sekarang
                  </button>
                </form>
                <p className="text-xs">
                  Dengan mendaftar, Anda menyetujui{" "}
                  <a href="#" className="underline">
                    Kebijakan Privasi
                  </a>{" "}
                  kami.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )

}

export default LandingPage
