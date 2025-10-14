import '../styles/globals.css';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

//router
import { useRouter } from 'next/router';

//framer motion
import { AnimatePresence, motion } from 'framer-motion';
import MusicPlayer from '../components/MusicPlayer';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <MusicPlayer src="/payphone.mp3" />
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      
    </Layout>
  )
}

export default MyApp;
