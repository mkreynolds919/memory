import Card from "./Card.jsx";
import { useState } from 'react';
import "../styles/MemoryGame.css";

export default function MemoryGame({ data, score, bestScore, setScore, setBestScore, resetData }) {
    const [seen, setSeen] = useState({});

    function handleSelection(name) {
        if (seen[name]) {
            if (score > bestScore) {
                setBestScore(score);
            }
            setSeen({});
            setScore(0);
            resetData();
        } else {
            setSeen({ ...seen, [name]: true});
            console.log(seen);
            setScore((prev) => prev + 1);
            resetData();
        }
    }

    return (
        <div className="game-container">
            {data.map(poke => {
                return <Card key={poke.name} name={poke.name} sprite={poke.sprite} handleSelection={() => handleSelection(poke.name)}></Card>
            })}
        </div>
    )
}