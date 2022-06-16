import React from "react";
import ReactDOM from 'react-dom';
import { GiftExpertApp } from "./GiftExpertApp";

import './index.css';


const divRoot = document.querySelector("#root");
//ReactDOM.render( <PrimeraApp saludo='Hola, soy goku'/>, divRoot );
ReactDOM.render( <GiftExpertApp/> , divRoot );



