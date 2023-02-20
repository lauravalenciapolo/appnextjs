// Importamos las rutas principales, o componentes que quiero
// que se muestren siempre
//Importamos estilos globales de la carpeta styles

import "../styles/globals.css"
import Navbar from "./Components/Navbar"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      <meta property="og:title" content="Stalak: Mi hábito"/>
      <meta property="og:image" 
      content="https://example.com/ogp.jpg"/>
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
        {/* Aplicacion de SEO */}
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
