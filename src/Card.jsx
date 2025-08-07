

export default function Card({ name, sprite, handleSelection }) {
    return (
        <div className="card" onClick={handleSelection}>
            <div className="img-container">
                <img className="poke-img" src={sprite}></img>
            </div>
            <div className="poke-name">{name}</div>
        </div>
    )
}