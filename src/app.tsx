export function App() {
  const linkUrlWhatsApp = "https://wa.me/5562981958251"; 
  const buttonTextWhatsApp = "WhatsApp";
  const iconPathWhatsApp = "/styles/icons/icon-whatsapp.png"; 
  const linkUrlLinkedin = "https://www.linkedin.com/in/marcos-gabriel-866182303/";
  const buttonTextLinkedin = "Linkedin"; 
  const iconPathLinkedin = "/styles/icons/icon-linkedin.png"; 

  return (
    <div className="flex justify-center items-center h-screen gap-2">
      <a href={linkUrlWhatsApp} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-1.5 bg-green-500 text-white rounded flex items-center gap-2 hover:bg-green-700 transition-colors duration-200">
          <img src={iconPathWhatsApp} alt="WhatsApp Icon" className="w-5 h-5" />
          {buttonTextWhatsApp}
        </button>
      </a>
      <a href={linkUrlLinkedin} target="_blank" rel="noopener noreferrer">
        <button className="px-6 py-1.5 bg-blue-500 text-white rounded flex items-center gap-2 hover:bg-blue-700 transition-colors duration-200">
          <img src={iconPathLinkedin} alt="Linkedin" className="w-5 h-5" />
          {buttonTextLinkedin}
        </button>
      </a>
    </div>
  );
}
