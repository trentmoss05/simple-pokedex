import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 6, name: "Charizard", type: "fire", base_experience: 209 },
      { id: 9, name: "Blastoise", type: "water", base_experience: 210 },
      { id: 3, name: "Venusaur", type: "grass", base_experience: 208 },
      { id: 65, name: "Alakazam", type: "psychic", base_experience: 186 },
      { id: 68, name: "Machamp", type: "fighting", base_experience: 193 },
      { id: 107, name: "Hitmonchan", type: "fighting", base_experience: 140 },
      { id: 125, name: "Electabuzz", type: "electric", base_experience: 156 },
      { id: 149, name: "Dragonite", type: "dragon", base_experience: 174 }
    ]
  };

  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIndex = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIndex, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
