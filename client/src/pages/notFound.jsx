import GridShape from "../component/common/GridShape";
import { Link } from "react-router-dom";
import PageMeta from "../component/common/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="Error Halaman tidak ditemukan | Si LiCIK"
        description="sepertinya anda salah tujuan..."
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
        <GridShape />
        <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
          <h1 className="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
            Maaf...
          </h1>

          <img src="/error/404.svg" alt="404" className="dark:hidden" />
          <img
            src="/error/404-dark.svg"
            alt="404"
            className="hidden dark:block"
          />

          <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
            Kami tidak menemukan halaman yang anda minta....
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            balik ke halaman utama
          </Link>
        </div>
      </div>
    </>
  );
}