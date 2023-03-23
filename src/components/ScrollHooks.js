import { useState, useEffect } from "react";
import React  from "react";

export default function ScrollHooks (){
    const [scrollY, setScrollY] = useState(0)
    const [name, setName]= useState('Abi')
    useEffect (() =>{
        // console.log('Moviendo el scroll');
        const detectarScroll = () =>setScrollY(window.pageYOffset)
        
        // detectarScroll()
        window.addEventListener('scroll',detectarScroll)
        
        return () => window.removeEventListener('scroll', detectarScroll)
    },[scrollY])//cuando scrolly cambie


    useEffect(() => {
        // console.log('Fase de Montaje')
    }, []);//parametro vacio indica que se va a ejecutar en la fase de desmontaje 
    
    useEffect(() => {
        // console.log('Fase de Actualización')
    }, );
    
    useEffect(() =>{
        return() =>{
            // console.log('Fase de desmontaje')
        }
    })
    return(
        <>
        <h2>Hooks useEffect y el ciclo de vida</h2>
        <p>Scroll de navegador {scrollY}px</p>
        </>
    )
}