import { useState, useEffect } from "react";
import React  from "react";

export default function ScrollHooks (){
    const [scrollY, setScrollY] = useState(0)
    
    useEffect (() =>{
        console.log('Fase de Actualización');
        const detectarScroll = () =>setScrollY(window.pageYOffset)
        
        // detectarScroll()
        window.addEventListener('scroll',detectarScroll)
    })
    return(
        <>
        <h2>Hooks useEffect y el ciclo de vida</h2>
        <p>Scroll de navegador {scrollY}px</p>
        </>
    )
}