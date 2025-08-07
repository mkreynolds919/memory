import Card from "./Card.jsx";

export default function MemoryGame({ data, setData, setScore, setBestScore }) {
    return (
        <div className="game-container">
            {data.map(poke => {
                <Card key={poke.name} name={poke.name} sprite={poke.sprite} onClick={() => handleSelection(poke.name)}></Card>
            })}
        </div>
    )
}