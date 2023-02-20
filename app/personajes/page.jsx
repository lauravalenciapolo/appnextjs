import axios from "axios";
import Link from "next/link";
import Image from "next/image.js";
import botonLike from "./botonLike.jsx";

//El fetching de datos lo puedo hacer a nivel de pagina como en este caso
// o a nivel de componente e importar ese componente aquí

const obtenerPersonajes = async ()=>{
    try{
        const result = await axios.get(`https://rickandmortyapi.com/api/character`);
        const resultpersonajes = result.data.results
        return resultpersonajes
    }
    catch (e){
        throw new Error 
    }
}

export default async function personajes (){
    const personajes = await obtenerPersonajes()
    return (
        <>
        {personajes.map(e=>(
            <div key = {e.id}>
            <Link href={"/personajes/[id]"} as={`/personajes/${e.id}`}>
            <h4>{e.name}</h4>
            </Link>
            <p>{e.status}</p>
            <p>{e.species}</p>
            <Image alt={e.name} src={e.image} width="60" height="60"/>
            <botonLike/>
            </div>
        ))}
        </>
    )
}