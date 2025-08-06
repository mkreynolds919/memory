
export default function Scoreboard({ score, bestScore }) {
    return (
        <div className="scoreboard-container">
            <div className="score">
                {`Score: ${score}`}
            </div>
            <div className="best-score">
                {`Best Score: ${bestScore}`}
            </div>
        </div>
    );
}