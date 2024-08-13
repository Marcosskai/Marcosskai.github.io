export function App() {
  const linkUrl = "https://wa.me/5562981958251"; 
  const buttonText = "WhatsApp";
  const iconPath = "/styles/icons/icon-whatsapp.png"; 

  return (
    <div className="flex justify-center items-center h-screen">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-1.5 bg-green-500 text-white rounded flex items-center gap-2 hover:bg-green-700 transition-colors duration-200">
          <img src={iconPath} alt="WhatsApp Icon" className="w-5 h-5" />
          {buttonText}
        </button>
      </a>
    </div>
  );
}
