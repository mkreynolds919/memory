import { useState, useEffect } from 'react'; 

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [data, setData] = useState([]);

  async function fetchData(pokemon) {
    const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokeJson = await pokeData.json();
    const name = pokeJson["name"];
    const picture = pokeJson["sprites"]["front_default"];
    return {
      "name": name,
      "sprite": picture,
    }
  }

  function shuffle(array) {
    let currentIndex = array.length;

  
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  useEffect(() => {
    const names = ["charizard", "gengar", "gardevoir", "umbreon", "lucario", "rayquaza", "metagross", "flygon", "bulbasaur", "swampert", "garchomp", "tyranitar"];
    const loadData = async () => {
      const results = [];
      for (const name of names) {
        const result = await fetchData(name);
        results.push(result);
      }
      setData(results);
    }

    loadData();
  }, []);
  
}