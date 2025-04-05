import { ArrowRight } from "lucide-react"
import url from "../utils/url"
import PageMeta from "../component/common/PageMeta"

function Login() {
    const handleGoogleLogin = () => {
      window.location.href = `${url.apiUrl}/auth/google`
    }
  
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-4">
        <PageMeta title="Login | SiLiCIK" description="Login page" />
        <div className="w-full max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="p-8">
                <h2 className="mb-2 text-center text-2xl font-bold text-black">Login ke Aplikasi</h2>
                <p className="mb-6 text-center text-sm text-gray-600">Silakan login menggunakan akun Google Anda</p>

                <button
                    onClick={handleGoogleLogin}
                    className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-black transition-all hover:bg-yellow-300 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                >
                    <img
                    src="https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png"
                    alt="Google logo"
                    className="h-5 w-5"
                    />
                    <span className="font-medium">Login dengan Google</span>
                    <ArrowRight className="ml-auto h-4 w-4" />
                </button>
            </div>
        </div>
    </div>
    )
  }
  
  export default Login