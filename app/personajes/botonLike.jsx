"use client";
import { useState } from "react";

//Los componente dentro de la carpeta app son ejecutados siempre del
//lado del servidor, no es posible utilizar componentes que tengan
// interactividad con el usuario, asi tenemos que utilizar
// "use client"

export default function botonLike() {
  const [like, setLike] = useState(false);

  return (
    <div>
      <button onClick={() => setLike(!like)}>
        {like ? "Me gusta" : "No me gusta"}
      </button>
    </div>
  );
}
