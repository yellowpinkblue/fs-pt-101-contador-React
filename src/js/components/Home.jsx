import React from "react";
import { Digitos } from "./digitos.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = ({counter}) => {

	const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);

	return (
		<div className= "contenedorPlus container bg-black ">

			<div className="row row-col-7 text-center fs-3">

			<div className="card myCards bg-black bg-opacity-75 w-100 col"><Digitos dataValue= {<i className="fa-solid fa-clock"></i>} /></div>
			<div className="card myCards bg-black bg-opacity-75 w-100 col"><Digitos dataValue= {0} /></div>
			<div className="card myCards bg-black bg-opacity-75 w-100 col"><Digitos dataValue= {0} /></div>
			<div className="card myCards bg-black bg-opacity-75 w-100 col"><Digitos dataValue= {four % 10} /></div>
			<div className="card myCards bg-black bg-opacity-75 w-100 col"><Digitos dataValue= {three % 10} /></div>
			<div className="card myCards bg-black bg-opacity-75 w-100 col"><Digitos dataValue= {two % 10} /></div>
			<div className="card myCards bg-black bg-opacity-75 w-100 col"><Digitos dataValue= {one % 10} /></div>

			</div>
		</div>
	);
};

export default Home;