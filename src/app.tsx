import { MapPin } from 'lucide-react';
import meIcon from "/styles/icons/me.png";

export function App() {
  const linkUrlWhatsApp = "https://wa.me/5562981958251";
  const buttonTextWhatsApp = "WhatsApp";
  const linkUrlLinkedin = "https://www.linkedin.com/in/marcos-gabriel-866182303/";
  const buttonTextLinkedin = "Linkedin";
  const linkUrlGitHub = "https://github.com/Marcosskai";
  const buttonTextGitHub = "GitHub";
  const linkUrlInstagram = "https://www.instagram.com/og.mrcos/";
  const buttonTextInstagram = "Instagram";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-8 px-4">
      <div className="flex flex-col items-center">
        <img
          src={meIcon}
          alt="Me Icon"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-2 border-zinc-700"
        />
        <h1 className="mt-4 sm:mt-6 md:mt-8 font-medium text-zinc-300 text-center text-sm sm:text-lg md:text-xl">
          Marcos Gabriel - Software Developer (Atualmente estudando React)
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
          <a href={linkUrlWhatsApp} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto px-4 py-1.5 bg-zinc-950 text-white border flex items-center justify-center gap-2 hover:bg-green-700 transition-colors duration-200">
              {buttonTextWhatsApp}
            </button>
          </a>
          <a href={linkUrlLinkedin} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto px-6 py-1.5 bg-zinc-950 text-white border flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-200">
              {buttonTextLinkedin}
            </button>
          </a>
          <a href={linkUrlGitHub} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto px-7 py-1.5 bg-zinc-950 text-white border flex items-center justify-center gap-2 hover:bg-zinc-300 transition-colors duration-200 hover:text-zinc-950">
              {buttonTextGitHub}
            </button>
          </a>
          <a href={linkUrlInstagram} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto px-4 py-1.5 bg-zinc-950 text-white border flex items-center justify-center gap-2 hover:bg-pink-700 transition-colors duration-200">
              {buttonTextInstagram}
            </button>
          </a>
        </div>
        <span className="flex items-center gap-2 text-zinc-300">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500" />
          Goiânia - Goiás
        </span>
      </div>
    </main>
  );
}
