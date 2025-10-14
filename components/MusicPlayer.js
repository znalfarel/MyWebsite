import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = ({ src }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Logika Global Interaksi untuk memulai Musik (Tetap)
  useEffect(() => {
    if (hasInteracted) return;

    const handleUserInteraction = () => {
      if (audioRef.current && !hasInteracted) {
        
        audioRef.current.muted = true;
        audioRef.current.loop = true;
        audioRef.current.play().then(() => {
          setHasInteracted(true);
        }).catch(error => {
          console.error("Play gagal setelah interaksi:", error);
        });
      }
      
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
}, [src, hasInteracted]);

  // Effect untuk menyinkronkan state isMuted (Tetap)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Fungsi toggle mute (Tetap)
  const toggleMute = () => {
    if (audioRef.current) {
        if (!hasInteracted) {
            setHasInteracted(true);
        }

        if (isMuted) {
            audioRef.current.play().catch(error => {
                console.log("Tidak bisa play setelah unmute:", error);
            });
        }
        setIsMuted(prev => !prev);
    }
  };

  return (
    // 1. TINGKATKAN Z-INDEX CONTAINER ke yang tertinggi (z-[999])
    <div className="fixed top-0 right-3 lg:bottom-20 lg:right-6 z-[999]"> 
      <audio ref={audioRef} src={src} preload="auto" />
      
      <button 
        onClick={toggleMute}
        // 2. Tambahkan ukuran eksplisit (w-12 h-12) dan pastikan ikon di tengah (flex items-center justify-center)
        className="
            bg-accent text-white rounded-full shadow-lg transition-all duration-300
            w-12 h-12 flex items-center justify-center hover:bg-opacity-80
            z-[999]  
        "
      >
        {/* Ikon sudah memiliki size={20} yang cukup baik */}
        {isMuted ? <FaVolumeMute size={80} className="-translate-x-[5px]"/> : <FaVolumeUp size={60} className="-translate-x-[5px]"/>}
      </button>

      {/* Perbaiki margin atas untuk teks status */}
      <p className="text-xs text-white mt-1 text-center">
          {isMuted ? "" : ""}
      </p>
    </div>
  );
};

export default MusicPlayer;