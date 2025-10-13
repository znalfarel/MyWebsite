import nodemailer from 'nodemailer';

// Konfigurasi transporter email dari .env.local
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT === '465', // true untuk port 465, false untuk port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Semua kolom harus diisi.' });
  }
  
  // Periksa format email dasar (opsional, bisa lebih ketat)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Format email tidak valid.' });
  }

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Nama pengirim diatur di sini
    to: process.env.EMAIL_RECEIVER, // Alamat email tujuan Anda
    replyTo: email, // Memudahkan Anda membalas ke email pengirim formulir
    subject: `[Kontak Website] ${subject}`,
    html: `
        <p>Anda menerima pesan baru dari formulir kontak:</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <p><strong>Pesan:</strong></p>
        <p style="white-space: pre-wrap; border-left: 3px solid #6c3a9d; padding-left: 10px;">${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 'success', message: 'Pesan terkirim.' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ status: 'error', message: 'Gagal mengirim email di server.' });
  }
}