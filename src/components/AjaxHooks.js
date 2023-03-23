import React, { useState, useEffect } from 'react';

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([])

    function Pokemon({avatar,name}){
        return(
            <figure>
                <img src={avatar} alt='name'/>
                <h3>{name}</h3>
            </figure>
        )
    }

    // useEffect(() => {
    //     let url = 'https://pokeapi.co/api/v2/pokemon/';
    //     fetch(url)
    //     .then (res=>res.json())
    //     .then((json) => {
    //         json.results.forEach((el) => {
    //             fetch(el.url).then((res) =>res.json()).then((json) =>{
    //                 // console.log(json);
    //                 let pokemon ={
    //                     id: json.id,
    //                     name:json.name,
    //                     avatar: json.sprites.front_default
    //                 };
    //                 setPokemons((pokemons) =>[...pokemons,pokemon])

    //         })
    //         })
    //     })
    // }, []);

    useEffect(() => {
        //Nota: no es recomendable hacer async el useEffect porque es un antipatrón
         const getPokemons = async (url)=>{
            let res = await fetch(url),
            json = await res.json
            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                json= await res.json();

                    // console.log(json);
                    let pokemon ={
                        id: json.id,
                        name:json.name,
                        avatar: json.sprites.front_default
                    };
                    setPokemons((pokemons) =>[...pokemons,pokemon])

            
            })
        }  //-------->esta es la manera correcta de usar async await en un useEffect
        getPokemons('https://pokeapi.co/api/v2/pokemon/')

        
        // let url = 'https://pokeapi.co/api/v2/pokemon/';
        // fetch(url)
        // .then (res=>res.json())
        // .then((json) => {
            
        // })
    }, []);
    
    return(
        <>
        <h2>
            Peticiones Asíncronas en Hooks
        </h2>
        {pokemons.length === 0 ? <h3>Cargando...</h3> :
        pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
        </>
    )
}