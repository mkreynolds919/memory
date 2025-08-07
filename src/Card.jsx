

export default function Card({ name, sprite }) {
    return (
        <div className="card">
            <div className="img-container">
                <img className="poke-img" src={sprite}></img>
            </div>
            <div className="poke-name">{name}</div>
        </div>
    )
}