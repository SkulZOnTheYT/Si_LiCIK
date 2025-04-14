import PageMeta from "../../component/common/PageMeta";

import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <main>
            <PageMeta title="Dashboard | SiLiCIK" description="Halaman dashboard financial" />
            <Outlet />
            <div className="container mx-auto p8 pad ml-5 mt-10">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
                    <h2 className="text-xl font-bold">Penggeluaran</h2>
                    <p className="text-gray-700 text-md">Rp . 0</p>
                    <h2 className="text-xl font-bold">Pemasukan</h2>
                    <p className="text-gray-700 text-md">Rp 0</p>
                </div>
    <form className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-6 mt-5 space-y-4">
  <h2 className="text-2xl font-bold">Buat Nota Keuangan!</h2>
  <h3 className="text-lg font-semibold">Pemasukan</h3>

  <div>
    <label className="block text-sm font-medium mb-1">Nama Pemasukan</label>
    <input
      type="number"
      placeholder="0"
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Deskripsi Pemasukan</label>
    <textarea
      placeholder="Deskripsi Pemasukan"
      className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows={3}
    ></textarea>
  </div>
  <input
  type="submit"
  value="Buat Nota Keuangan"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px
  -4 rounded"
  />
</form>
<form className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-6 mt-5 space-y-4">
  <h3 className="text-lg font-semibold">pengeluaran</h3>

  <div>
    <label className="block text-sm font-medium mb-1">Nama pengeluaran</label>
    <input
      type="number"
      placeholder="0"
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Deskripsi pengeluaran</label>
    <textarea
      placeholder="Deskripsi pengeluaran"
      className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows={3}
    ></textarea>
  </div><input
  type="submit"
  value="Buat Nota Keuangan"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px
  -4 rounded"
  />
</form>

            </div>
        </main>
    )
}