import { BarChart3, BookOpen, ChevronRight, CreditCard, LineChart, PieChart, Smartphone } from "lucide-react"
import { Link, useNavigate } from 'react-router-dom';

function LandingPage() {
  let navigate = useNavigate();

  const handleScroll = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay
  };

  return (
    <main className="flex min-h-screen flex-col flex-1">
      <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-yellow-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none lg:mb-4 mb-1">
                  Si <span className="text-yellow-300">LiCIK</span>
                </h1>
                <p className="text-xl text-yellow-500 font-semibold lg:mb-10 mb-6">Sistem Literasi Cerdas, Inovatif dan Keuangan</p>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Platform edukasi yang membantu UMKM memahami dan menerapkan teknologi digital dalam bisnis mereka.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-500">
                  <button onClick={() => handleScroll('daftar')}>Mulai Sekarang</button>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] overflow-hidden rounded-2xl shadow-xl bg-white">
                <img
                  src="https://i.pinimg.com/originals/89/67/92/8967925b9d9141e88ced0a9020bdbc5e.gif"
                  alt="SI LICIK Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Fitur Si <span className="text-yellow-300">LiCIK</span>
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Platform edukasi yang membantu UMKM memahami dan menerapkan teknologi digital dalam bisnis mereka.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
                <BookOpen className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Materi Pembelajaran</h3>
              <p className="text-gray-600">
                Konten edukasi tentang literasi digital dan pengelolaan keuangan untuk UMKM.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
                <BarChart3 className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Laporan Keuangan</h3>
              <p className="text-gray-600">Alat praktis untuk membuat dan mengelola laporan keuangan bisnis.</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
                <PieChart className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Perencanaan Anggaran</h3>
              <p className="text-gray-600">Fitur untuk merencanakan dan mengatur anggaran bisnis dengan efektif.</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
                <Smartphone className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transaksi Digital</h3>
              <p className="text-gray-600">Panduan tentang penggunaan dompet digital dan transaksi online.</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
                <CreditCard className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pembayaran Online</h3>
              <p className="text-gray-600">Edukasi tentang berbagai metode pembayaran digital untuk bisnis.</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 mb-4">
                <LineChart className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Analisis Bisnis</h3>
              <p className="text-gray-600">
                Alat untuk menganalisis performa bisnis dan membuat keputusan berbasis data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cara Kerja Si <span className="text-yellow-300">LiCIK</span>
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bagaimana SI LICIK membantu UMKM meningkatkan literasi digital dan pengelolaan keuangan.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Belajar</h3>
              <p className="text-gray-600">
                Akses materi pembelajaran tentang literasi digital dan pengelolaan keuangan untuk UMKM.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Praktik</h3>
              <p className="text-gray-600">
                Gunakan alat praktis untuk mengelola keuangan bisnis dan membuat laporan keuangan.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Kembangkan</h3>
              <p className="text-gray-600">
                Terapkan pengetahuan dan keterampilan baru untuk mengembangkan bisnis di era digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="daftar"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 text-black"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Siap Meningkatkan Bisnis Anda?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bergabunglah dengan SI LICIK dan tingkatkan kompetensi digital dan keuangan bisnis Anda.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2 mt-6">
              <Link to="/dashboard">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
                  lanjut ke dashboard
                </button>
                </Link>
              <p className="text-xs text-gray-600 mt-4">
                Dengan menggunakan Si LiCIK, Anda menyetujui{" "}
                <Link to="/privacy" className="text-yellow-700 underline underline-offset-2 hover:text-yellow-800">
                  Kebijakan Privasi
                </Link>{" "}
                kami.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage