import './globals.css';
import Navbar from '@/components/Navbar'; // importo el Navbar 

export const metadata = {
  title: 'Mi Recetario',
  description: 'TP1 pasado a Next.js',
}

export default function RootLayout({ children }) { //significa que este es el layout raíz, el que engloba toda la aplicación. sirve para mantener una estructura consistente en todas las páginas.
  return (
    <html lang="es"> 
      <body>
        <Navbar /> {/* aca se renderiza el Navbar en todas las páginas */}
        <main>
        {children} {/* aca se renderiza el contenido de cada página */}
      </main>
      </body>
    </html>
  );
}
