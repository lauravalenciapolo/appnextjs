import Link from "next/link"
import styles from "./Navbar.module.css"

const links = [{
  label:"Home",
  route:"/home"
},
{
  label:"Personajes",
  route:"/personajes"
}]

export default function Navbar (){
    return (
        <header className={styles.header}>
        <ul className={styles.nav}>
          {links.map(e=>(
            <li key={e.route}>
              <Link href={e.route}>
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
        </header>
    )
}