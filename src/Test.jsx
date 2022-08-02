import React,{useState} from "react";
const Test = ({data}) => {
    const [state, setState] = useState({countries:data, selected: null, incorrect:[]});

    const handleClick = (e) => {
        const [type, value] = e.target.id.split(':');
        if(state.selected){
            console.log(`Selected is ${state.selected}. Value is ${value}`);
            const shouldMatch = type === 'country' ? state.countries[value] : Object.keys(state.countries).find(key => state.countries[key] === value);
            console.log(`value ${value} should match ${shouldMatch}`);
            if(shouldMatch === state.selected){
                delete state.countries[type === 'country' ? value : Object.keys(state.countries).find(key => state.countries[key] === value)];
                state.incorrect = [];
            }
            else{
                state.incorrect.push(state.selected);
                state.incorrect.push(value);
            }
            setState({...state, selected: null});
        }else{
            console.log(`Setting selected to ${value}`)
            state.incorrect = [];
            setState({...state, selected:value});
        }
    }

    return (
        <div>
        {state.countries && <div>
        {Object.keys(state.countries).map((country) => <button style={{backgroundColor: state.selected === country ? '#000fff': state.incorrect.includes(country) ? '#ff0000' : ''}} id={`country:${country}`} onClick={handleClick}>{country}</button>)}
        {Object.values(state.countries).map((capital) => <button style={{backgroundColor: state.selected === capital ? '#000fff': state.incorrect.includes(capital) ? '#ff0000': ''}} id={`capital:${capital}`} onClick={handleClick}>{capital}</button>)}
        </div>}
        {!Object.keys(state.countries).length && <div>Congratulations!</div>}
        </div>
    );
}

export default Test;