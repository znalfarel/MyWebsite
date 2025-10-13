// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

// Import hooks React yang diperlukan
import React, { useState } from 'react';

const Contact = () => {
  // 1. Definisikan state untuk data formulir, loading, dan pesan status
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // 2. Handle perubahan input: mengupdate state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatusMessage(''); // Bersihkan pesan status saat pengguna mulai mengetik
  };

  // 3. Handle pengiriman formulir: mengirim data menggunakan Fetch API
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload/perpindahan halaman
    setLoading(true);
    setStatusMessage('');

    try {
      // Kirim data ke API Route Next.js di /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Sukses
        setStatusMessage('Email berhasil terkirim! Terima kasih. 😊');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset formulir
      } else {
        // Gagal dari balasan API Route
        setStatusMessage(`Gagal mengirim: ${data.message || 'Terjadi kesalahan saat memproses data.'}`);
      }
    } catch (error) {
      // Gagal karena masalah jaringan/fetch
      console.error('Submit Error:', error);
      setStatusMessage('Gagal mengirim email karena masalah jaringan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      {/* Jika Anda menggunakan Circles, letakkan di sini */}
      {/* <Circles /> */}
      
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='h2 text-center mb-12'>
            Let&apos;s <span className='text-accent'>Connect.</span>
          </motion.h2>

          {/* form: Tambahkan onSubmit={handleSubmit} */}
          <motion.form 
            variants={fadeIn('up', 1)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            onSubmit={handleSubmit} 
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group: Tambahkan name, value, dan onChange */}
            <div className='flex gap-x-6 w-full'>
              <input 
                type='text' 
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='name' 
                className='input'
                autoCapitalize='none'
                autoCorrect='none' 
                required
              />
              <input 
                type='email' 
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='email' 
                className='input'
                autoCapitalize='none'
                autoCorrect='none'
                required
              />
            </div>
            {/* Subject: Tambahkan name, value, dan onChange */}
            <input 
              type='text' 
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='subject' 
              className='input'
              autoCorrect='none'
              autoCapitalize='none'
              required
            />
            {/* Message: Tambahkan name, value, dan onChange */}
            <textarea 
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='message' 
              className='textarea'
              autoCapitalize='none'
              autoCorrect='none'
              required
            ></textarea>
            
            {/* Button: Tambahkan type='submit' dan disabled={loading} */}
            <button 
              type='submit'
              disabled={loading}
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all 
              duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className={`group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ${loading ? 'opacity-0' : ''}`}>
                {/* Tampilkan status loading pada tombol */}
                {loading ? 'Sending...' : "Let's Talk"}
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>

            {/* Area untuk menampilkan pesan status */}
            {statusMessage && (
                <p className={`text-center mt-4 ${statusMessage.includes('berhasil') ? 'text-green-400' : 'text-red-400'}`}>
                    {statusMessage}
                </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;