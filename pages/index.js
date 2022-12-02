
import Image from 'next/image'

import Card from '../components/Card'

import styles from '../styles/Inicio.module.css'



export async function getStaticProps(){
  
  
  const maxPokemons = 12
  const api = "https://pokeapi.co/api/v2/pokemon/"
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    }
  }

}

export default function Home({pokemons}) {
  return (<>
    <div className={styles.title_container}>
      <h1 className={styles.title}><strong>Poke<span>Next</span></strong></h1>
      <Image src="/pokeball.png" width="50" height="50" alt="pokeball"/>
    </div>
    <div className={styles.pokemon_container}>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
    </>)

    
}
