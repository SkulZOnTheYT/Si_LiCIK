import express from 'express';
import axios from 'axios';
import csvParser from 'csv-parser';
import { Readable } from 'stream';

const router = express.Router();

// URL dari  ML
const CSV_URL = "https://raw.githubusercontent.com/Najiann/dataset/refs/heads/main/bank_transactions_data.csv";

// Fungsi parsing CSV
const parseCSV = async (url) => {
  const results = [];

  const response = await axios.get(url);
  const stream = Readable.from(response.data);

  return new Promise((resolve, reject) => {
    stream
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
};

// Endpoint analisis 
router.get('/analisis', async (req, res) => {
  try {
    const data = await parseCSV(CSV_URL);

    let pemasukan = 0;
    let pengeluaran = 0;

    data.forEach(item => {
        const amount = parseFloat(item.TransactionAmount);
        if (!isNaN(amount)) {
          if (item.TransactionType === "Credit") {
            pemasukan += amount;
          } else if (item.TransactionType === "Debit") {
            pengeluaran += amount;
          }
        }
      });
      

    const saldo = pemasukan - pengeluaran;

    res.json({
      success: true,
      pemasukan,
      pengeluaran,
      saldo,
    });

  } catch (error) {
    console.error("Gagal parsing CSV:", error);
    res.status(500).json({ success: false, message: "Gagal ambil data literasi." });
  }
});

export default router;
