// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-primary text-text py-8">
      <div className="container mx-auto px-4">
        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.56v-2.14c-3.2.7-3.87-1.44-3.87-1.44-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.68.08-.68 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.56-.3-5.25-1.28-5.25-5.7 0-1.25.44-2.27 1.17-3.07-.12-.3-.51-1.52.12-3.18 0 0 .96-.31 3.15 1.17A10.99 10.99 0 0112 6.85c1.03.01 2.07.14 3.05.41 2.18-1.48 3.14-1.17 3.14-1.17.63 1.66.24 2.88.12 3.18.73.8 1.17 1.82 1.17 3.07 0 4.43-2.7 5.4-5.27 5.68.41.35.78 1.04.78 2.09v3.11c0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.29c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.25 10.29h-3v-4.5c0-1.08-.92-2-2-2s-2 .92-2 2v4.5h-3v-9h3v1.3c.82-.97 2.09-1.3 3.29-1.3 2.17 0 4.21 1.58 4.21 4.08v5.92z" />
            </svg>
          </a>
        </div>

        {/* Texto */}
        <p className="text-center text-sm md:text-base">
          © {new Date().getFullYear()} Diseñado y desarrollado por{" "}
          <span className="font-semibold text-accent">Pablo Martinez</span>
        </p>
      </div>
    </footer>
  );
}
