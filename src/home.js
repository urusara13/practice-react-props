import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return <div style={{marginLeft : "50px"}}>
        <Link to='/pay'>
            <button>Pay</button>
        </Link>
    </div>;
};

export default Home;
