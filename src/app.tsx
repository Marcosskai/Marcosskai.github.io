import { MapPin } from 'lucide-react';
import iconPathWhatsApp from "/styles/icons/icon-whatsapp.png"; 
import iconPathLinkedin from "/styles/icons/icon-linkedin.png"; 
import gitIcon from "/styles/icons/icon-github.png";
import meIcon from "/styles/icons/me.png";


export function App() {
  const linkUrlWhatsApp = "https://wa.me/5562981958251"; 
  const buttonTextWhatsApp = "WhatsApp";
  const linkUrlLinkedin = "https://www.linkedin.com/in/marcos-gabriel-866182303/";
  const buttonTextLinkedin = "Linkedin"; 
  const linkUrlGitHub = "https://github.com/Marcosskai";
  const buttonTextGitHub = "GitHub";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">
        <img
          src={meIcon}
          alt="Me Icon"
          className="w-64 h-64 rounded-full border-2 border-zinc-700"
        />
        <h1 className="flex items-center justify-center mt-6 font-medium text-zinc-300">
          Marcos Gabriel
        </h1>
      </div>
  
      <div className="flex flex-col items-center space-y-6">
        <div className="flex justify-center items-center gap-4">
          <a href={linkUrlWhatsApp} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-1.5 bg-zinc-950 text-white border flex items-center gap-2 hover:bg-green-700 transition-colors duration-200">
              <img src={iconPathWhatsApp} alt="WhatsApp Icon" className="w-5 h-5" />
              {buttonTextWhatsApp}
            </button>
          </a>
          <a href={linkUrlLinkedin} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-1.5 bg-zinc-950 text-white border flex items-center gap-2 hover:bg-blue-700 transition-colors duration-200">
              <img src={iconPathLinkedin} alt="Linkedin Icon" className="w-5 h-5" />
              {buttonTextLinkedin}
            </button>
          </a>
          <a href={linkUrlGitHub} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-1.5 bg-zinc-950 text-white border flex items-center gap-2 hover:bg-zinc-300 transition-colors duration-200">
              <img src={gitIcon} alt="GitHub Icon" className="w-5 h-5 bg-zinc-50" />
              {buttonTextGitHub}
            </button>
          </a>
        </div>
        <span className="flex items-center gap-2 text-zinc-300">
          <MapPin className="w-5 h-5 text-zinc-500" />
          Goiânia
        </span>
      </div>
    </main>
  );
}
