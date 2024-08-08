import { useEffect } from "react";

const Player = () => {

    useEffect(() => {
        (async () => {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", "BQC4tQ2mlWDJGL0t9QTBumLA5oldOBtZOWaT6EHg0xSQ8ygVkfStAy8cWLNKjU9jgPoFiCyeCfarX-t-0B2C3bktixJhGw4-8FV-g7hJS14P0O-rV9Zpc5mO3p8g7SZqxzSvAPoO4-gq0RmN5eOjJJjxopN4ANIrsgtHTPWE8InB9zb5JD5WgupaMk9LZEeocxOMGfGZeuI");
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            try {
                const response = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=10", requestOptions);
                const result = await response.text();
                console.log(result)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

    return (
        <div className="rounded-3xl">
            Player
        </div>
    )
};

export default Player;
