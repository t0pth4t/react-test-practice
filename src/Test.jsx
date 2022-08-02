import React,{useState} from "react";
const Test = ({data}) => {
    const [state, setState] = useState({countries:data});

    const handleClick = (e) => {

    }

    return (
        <div>
        {Object.keys(state.countries).map((country) => <button onClick={handleClick}>{country}</button>)}
        {Object.values(state.countries).map((capital) => <button onClick={handleClick}>{capital}</button>)}
        </div>
    );
}

export default Test;