
import Image from "next/image"
import Link from "next/link"

import styles from '../styles/Card.module.css'

export default function Card({pokemon}) {
    return (<>
        <div className={styles.card}>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width='120' height='120' alt={pokemon.name}/>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <div class="btn-wrapper mt-1">
                  <span class="btn btn-lg btn-verdin mb-3 mb-sm-0">#{pokemon.id}</span>
                  <Link href={`/pokemon/${pokemon.id}`} class="btn btn-lg btn-info mb-3 mb-sm-0">Detalhes
                  </Link>
            </div>


        
        </div>
    </>)}