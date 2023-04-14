import React from "react";
import styled from "styled-components";

export default function ComponentesEstilizados(){
    let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

    const setTransitionTime = (time) =>`all ${time} ease-in-out`

    const MyH3 = styled.h3`
    padding:2rem;
    text-align:center;
    background-color:${mainColor};
    transition: ${setTransitionTime("1s")};
    &:hover{
        background-color:${mainAlphaColor80}
    }
    `
    return(
        <>
        <h2>Componentes Estilizados</h2>
        <MyH3>Soy un componente estilizado con styled-components</MyH3>
        </>
    )
}