import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompletePay from './completePay'

const Header = () => {
	const [point, setPoint] = useState(100);
  function handlePoint (data) {
    setPoint(data)
  }
  
	return (
		<header style={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box", padding: "0 50px" }}>
			<Link to='/'>
				<button>Home</button>
			</Link>
			<div>Point : {point}</div>
		</header>
	);
};

export default Header;


