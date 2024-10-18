import { MapPin } from 'lucide-react';
import meIcon from "/styles/icons/me.png";
import react from "/styles/icons/react.png"
import { Flex, Image } from '@chakra-ui/react';

export function App() {
  const linkUrlWhatsApp = "https://wa.me/5562981958251";
  const buttonTextWhatsApp = "WhatsApp";
  const linkUrlLinkedin = "https://www.linkedin.com/in/marcos-gabriel-866182303/";
  const buttonTextLinkedin = "Linkedin";
  const linkUrlGitHub = "https://github.com/Marcosskai";
  const buttonTextGitHub = "GitHub";
  const linkUrlInstagram = "https://www.instagram.com/og.mrcos/";
  const buttonTextInstagram = "Instagram";
  const linkUrlSpotify = "https://open.spotify.com/playlist/0cnHkx0WFzxnLUxdrVLrUB?si=82bee3083f324523";
  const buttonTextSpotify = "Spotify";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-9 px-4 bg-slate-900">
      <div className="flex flex-col items-center">

      <Flex align="center" gap={4}>
      <Image
        src={meIcon}
        alt="Me Icon"
        width={{ base: '20', md: '64' }} 
        height={{base: "20", 'md': '64' }}
        borderRadius="full"
        borderWidth="2px"
        borderColor="zinc.700"
  />

        <Image 
        src={react} 
        alt="react" 
        width={{ base: '28', md: '64' }} 
        height={{base: "28", 'md': '64' }}
        borderRadius="full"
        />
        </Flex>

        <h1 className="flex gap-2 mt-4 sm:mt-6 md:mt-8 font-medium text-zinc-300 text-center text-sm sm:text-lg md:text-xl">
          Marcos Gabriel - FrontEnd Developer - 
          
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
           <p className='text-sky-400 border-b-2 border-sky-400 hover:text-sky-300 transition duration-300'>
            React
           </p>
        </a>
      </h1>


      </div>

      <div className="flex flex-col items-center space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
          <a href={linkUrlWhatsApp} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto rounded-md px-4 py-1.5 bg-blue-800 hover:bg-blue-950 text-white border-none flex items-center justify-center gap-2 transition-colors duration-200">
              {buttonTextWhatsApp}
            </button>
          </a>
          <a href={linkUrlLinkedin} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto rounded-md px-6 py-1.5 bg-blue-800 hover:bg-blue-950 text-white border-none flex items-center justify-center gap-2  transition-colors duration-200">
              {buttonTextLinkedin}
            </button>
          </a>
          <a href={linkUrlGitHub} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto rounded-md px-7 py-1.5 bg-blue-800 hover:bg-blue-950 text-white border-none flex items-center justify-center gap-2 transition-colors duration-200">
              {buttonTextGitHub}
            </button>
          </a>
          <a href={linkUrlInstagram} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto rounded-md px-4 py-1.5 bg-blue-800 hover:bg-blue-950 text-white border-none flex items-center justify-center gap-2 transition-colors duration-200">
              {buttonTextInstagram}
            </button>
          </a>
          <a href={linkUrlSpotify} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto rounded-md px-7 py-1.5 bg-blue-800 hover:bg-blue-950 text-white border-none flex items-center justify-center gap-2 transition-colors duration-200">
              {buttonTextSpotify}
            </button>
          </a>
        </div>
        <span className="flex items-center gap-2 text-zinc-300">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500" />
          Goiânia - Goiás
        </span>
        <p className='text-zinc-500'>Criei esse site para treinar responsividade</p>
      </div>
    </main>
  );
}