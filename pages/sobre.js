import Image from 'next/image'

export default function Sobre() {
    return (<>
    <div>
        <h1><strong>Sobre o Projeto</strong></h1>
        <p>PokeNext é um app construído em Next.js para consultar pokémons através da <a href="https://pokeapi.co">PokeAPI</a>.</p>
        <Image src="/charizard.png" width="300" height="300" alt="charizard"/>
    </div>
    </>)
}