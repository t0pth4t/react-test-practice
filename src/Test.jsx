import React, { useState } from "react";
const Test = ({ data }) => {
  const shuffleArray = (countries) =>
    Object.keys(countries)
      .map((country) => ({ id: `country:${country}`, value: country }))
      .concat(
        Object.values(countries).map((capital) => ({
          id: `capital:${capital}`,
          value: capital,
        }))
      )
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  const [state, setState] = useState({
    countries: data,
    selected: null,
    incorrect: [],
    displayValues: shuffleArray(data),
  });

  const handleClick = (e) => {
    const [type, value] = e.target.id.split(":");
    if (!state.selected) {
      state.incorrect = [];
      setState({ ...state, selected: value });
      return;
    }
    const shouldMatch =
      type === "country"
        ? state.countries[value]
        : Object.keys(state.countries).find(
            (key) => state.countries[key] === value
          );
    if (shouldMatch === state.selected) {
      delete state.countries[
        type === "country"
          ? value
          : Object.keys(state.countries).find(
              (key) => state.countries[key] === value
            )
      ];
      state.displayValues = shuffleArray(state.countries);
      state.incorrect = [];
    } else {
      state.incorrect.push(state.selected);
      state.incorrect.push(value);
    }
    setState({ ...state, selected: null });
  };

  return (
    <div>
      {state.displayValues.map((v) => (
        <button
          style={{
            backgroundColor:
              state.selected === v.value
                ? "#000fff"
                : state.incorrect.includes(v.value)
                ? "#ff0000"
                : "",
          }}
          onClick={handleClick}
          id={v.id}
        >
          {v.value}
        </button>
      ))}
      {!Object.keys(state.countries).length && <div>Congratulations!</div>}
    </div>
  );
};

export default Test;
