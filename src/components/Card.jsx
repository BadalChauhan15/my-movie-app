import { useEffect, useState } from "react";

function Card({ title }) {

    const [hasLiked, setHasLiked] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`${title} has been like: ${hasLiked}`);
    },[hasLiked]);

    return (
        <div className="card" onClick={() => setCount((prevCount) => prevCount + 1)}>
            <h2>{ title } <br/> { count || null }</h2>
            <button onClick={() => { setHasLiked((prevHasLiked) => !prevHasLiked) }}>
                { hasLiked ? "❤️" : "🤍" }
            </button>
        </div>
    );
};

export default Card;