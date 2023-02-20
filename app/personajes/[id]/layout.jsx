import axios from "axios";
import Link from "next/link";
import Image from "next/image.js";

//El fetching de datos lo puedo hacer a nivel de pagina como en este caso
// o a nivel de componente e importar ese componente aquí

const obtenerInfoPersonaje = async (id) => {
  try {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const resultpersonajes = result.data;
    return resultpersonajes;
  } catch (e) {
    throw new Error();
  }
};

export default async function personaje({ children, params }) {
  const { id } = params;
  const infopersonaje = await obtenerInfoPersonaje(id);

  return (
    <div>
      <h2>Nombre: {infopersonaje.name}</h2>
      <Image alt={infopersonaje.name} src={infopersonaje.image} width="150" height="150"/>
      <p>Estado: {infopersonaje.status}</p>
      <p>Genero: {infopersonaje.gender}</p>
      <p>Locación: {infopersonaje.location.name}</p>
      <Link href={`/personajes/${id}/episodios`}>Ver episodios del personaje</Link>
    {children}
    </div>
  );
}
