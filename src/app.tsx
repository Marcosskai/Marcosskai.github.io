import { MapPin } from 'lucide-react'
import meIcon from "/styles/icons/me.png"

export function App() {
    const linkUrlWhatsApp = "https://wa.me/5562981958251"
    const buttonTextWhatsApp = "WhatsApp"
    const linkUrlLinkedin = "https://www.linkedin.com/in/marcos-gabriel-866182303/"
    const buttonTextLinkedin = "Linkedin"
    const linkUrlGitHub = "https://github.com/Marcosskai"
    const buttonTextGitHub = "GitHub"
    const linkUrlInstagram = "https://www.instagram.com/og.mrcos/"
    const buttonTextInstagram = "Instagram"

    return (
      <main className="flex flex-col items-center justify-center min-h-screen space-y-8">
    <div className="flex flex-col items-center">
      <img
        src={meIcon}
        alt="Me Icon"
        className="w-64 h-64 rounded-full border-2 border-zinc-700"
      />
      <h1 className="mt-8 font-medium text-zinc-300 text-center">
        Marcos Gabriel - Software Developer (Junior)
      </h1>
    </div>

    <div className="flex flex-col items-center space-y-6">
      <div className="flex justify-center items-center gap-4">
        <a href={linkUrlWhatsApp} target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-1.5 bg-zinc-950 text-white border flex items-center gap-2 hover:bg-green-700 transition-colors duration-200">
            {buttonTextWhatsApp}
          </button>
        </a>
        <a href={linkUrlLinkedin} target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-1.5 bg-zinc-950 text-white border flex items-center gap-2 hover:bg-blue-700 transition-colors duration-200">
            {buttonTextLinkedin}
          </button>
        </a>
        <a href={linkUrlGitHub} target="_blank" rel="noopener noreferrer">
          <button className="px-7 py-1.5 bg-zinc-950 text-white border flex items-center gap-2 hover:bg-zinc-300 transition-colors duration-200 hover:text-zinc-950">
            {buttonTextGitHub}
          </button>
        </a>
        <a href={linkUrlInstagram} target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-1.5 bg-zinc-950 text-white border flex items-center gap-2 hover:bg-pink-700 transition-colors duration-200">
            {buttonTextInstagram}
          </button>
        </a>
      </div>
      <span className="flex items-center gap-2 text-zinc-300">
        <MapPin className="w-5 h-5 text-zinc-500" />
        Goiânia - Goiás
      </span>
    </div>
    </main>
  );
}
