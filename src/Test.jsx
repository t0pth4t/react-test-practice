import React,{useState} from "react";
const Test = ({data}) => {
    const [state, setState] = useState({countries:data, selected: null});

    const handleClick = (e) => {
        const [type, value] = e.target.id.split(':');
        if(state.selected){
            console.log(`Selected is ${state.selected}. Value is ${value}`);
            const shouldMatch = type === 'country' ? state.countries[value] : Object.keys(state.countries).find(key => state.countries[key] === value);
            console.log(`value ${value} should match ${shouldMatch}`);
            if(shouldMatch === state.selected){
                delete state.countries[type === 'country' ? value : Object.keys(state.countries).find(key => state.countries[key] === value)];
            }
            else{
                console.log('incorrect')
                //mark e.target as red
            }
            setState({...state, selected: null});
        }else{
            console.log(`Setting selected to ${value}`)
            setState({...state, selected:value});
        }
    }

    return (
        <div>
        {state.countries && <div>
        {Object.keys(state.countries).map((country) => <button style={{backgroundColor: state.selected === country ? '#000fff': ''}} id={`country:${country}`} onClick={handleClick}>{country}</button>)}
        {Object.values(state.countries).map((capital) => <button id={`capital:${capital}`} onClick={handleClick}>{capital}</button>)}
        </div>}
        {!Object.keys(state.countries).length && <div>Congratulations!</div>}
        </div>
    );
}

export default Test;