import axios from "axios";
import Link from "next/link";


const obtenerEpisPersonaje = async (id) => {
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

export default async function episodios({ params }) {
  const { id } = params;
  const epispersonaje = await obtenerEpisPersonaje(id);

  return (
    <div>
    <h4>Episodios:</h4>
      {epispersonaje.episode.map(e=>(
        <div>
        <a href={e}>{e}</a>
        <br />
        </div>
      ))}
    </div>
  );
}