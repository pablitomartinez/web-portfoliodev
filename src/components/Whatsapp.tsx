// src/components/WhatsAppButton.tsx
export default function WhatsAppButton() {
  const message = encodeURIComponent("¡Hola! Me gustaría conectar contigo.");
  const whatsappUrl = `https://wa.me/+TUNUMERO?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.153 23.486l4.452-2.131A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.484 0-4.789-.79-6.673-2.127l-.48-.285-3.137 1.5 1.515-3.137-.285-.48C1.79 16.789 1 14.484 1 12c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11z" />
      </svg>
    </a>
  );
}
