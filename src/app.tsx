import { Box } from '@chakra-ui/react';
import Navbar from './navbar';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import {Home} from './home'

export function App() {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true, 
  });

  return (
    <main className="bg-slate-900">
      <div className="flex flex-col items-center justify-center h-screen space-y-9 px-4">
        <Navbar />
        <Home/>
      </div>
      <section className="relative flex flex-col items-center justify-center w-full h-[500px] bg-slate-800 -mt-28">
        < Box
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-slate-900">
        </Box>
  
      <p className="text-zinc-500 relative -top-36">
        Criei esse site para treinar responsividade
      </p>
      
      <motion.div
        className="text-center text-zinc-100"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">PROJETOS</h2>
          <p className="text-md sm:text-lg text-zinc-100">Alguns componentes que já fiz</p>
      </motion.div>
    </section>
    </main>
  );
}
