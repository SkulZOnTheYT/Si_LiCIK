// controllers/analisisController.js
import axios from 'axios';
import csvParser from 'csv-parser';
import { Readable } from 'stream';

const CSV_URL = "https://raw.githubusercontent.com/Najiann/dataset/refs/heads/main/bank_transactions_data.csv";

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

export const getRingkasanTransaksi = async (req, res) => {
  try {
    const data = await parseCSV(CSV_URL);

    let pemasukan = 0;
    let pengeluaran = 0;

    data.forEach(item => {
      const amount = parseFloat(item.TransactionAmount);
      if (!isNaN(amount)) {
        if (amount > 0) pemasukan += amount;
        else pengeluaran += Math.abs(amount);
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
    res.status(500).json({ success: false, message: "Gagal ambil data analisis." });
  }
};
