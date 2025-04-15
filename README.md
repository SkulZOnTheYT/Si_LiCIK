# A Fintech Literacy Web with Machine Learning

_**UMKM (Usaha Mikro, Kecil, dan Menengah)** memiliki peran penting dalam perekonomian Indonesia._ Namun, banyak pelaku **UMKM** yang masih kurang memahami literasi digital dan pengelolaan keuangan secara modern. Kurangnya pemahaman ini membuat mereka kesulitan dalam mengembangkan bisnis, terutama dalam hal pencatatan transaksi, penggunaan dompet digital, dan pemasaran online.

Melihat permasalahan tersebut, tim kami mengembangkan _**SI LICIK (Sistem Literasi Cerdas, Inovatif dan Keuangan)**, sebuah platform edukasi yang membantu **UMKM** memahami dan menerapkan teknologi digital dalam bisnis mereka._ Sistem ini akan menyediakan materi pembelajaran tentang pencatatan keuangan digital, transaksi online, serta cara mengelola keuangan dengan lebih efektif. Selain itu, platform ini juga dilengkapi dengan fitur pengelolaan keuangan praktis yang dapat langsung digunakan oleh pelaku **UMKM** untuk membuat laporan keuangan, dan merencanakan anggaran.

## How To Reproduce | Bagaimana cara menjalankan?

- Jalankan secara Localhost (web & backend berjalan pada komputer user)
```
git clone https://github.com/SkulZOnTheYT/Si_LiCIK.git
cd client
npm run dev
cd ~
cd server
npm run dev
```

- Jalankan secara Local + API (menggunakan localhost pada front-end dan api backend online)
```
git clone https://github.com/SkulZOnTheYT/Si_LiCIK.git
cd client
npm run dev
```

> ubah kode pada client/src/utils/url.js untuk menggunakan url backend online Si LiCIK atau ubah .env pada folder client

```diff
const url = {
    apiUrl: import.meta.env.PROD 
+     ? 'https://silicik-api.up.railway.app'
-     : 'http://localhost:5000',
    clientUrl: import.meta.env.PROD
-     ? 'https://silicik.vercel.app'
+     : 'http://localhost:5173'
  };
  
  export default url;
```

- jalankan secara langsung dari web Si LiCIK

> Kunjungi website Si LiCIK [client](https://silicik.vercel.app/) & [backend](https://silicik-api.up.railway.app/)
