import { useEffect } from "react";

const Player = () => {

    // http://localhost:5173/callback#access_token=BQDlNUwpH1pdbAdMUZ3fbiFeBZQr5pSPVqATUrPu-E04YqN8Y6Z-6NM-JMfQL8JSJl7CY9Evv67jYU6bhaeCWW4TUnFFNufJd03TiabHfaok5tqse4eQM4WvpoX0WIHilwIasMrsbL-A-kLF2aofsWoPe1F8srWtswhYjtY7UkzJGBGHyFFpNlnUU_5x8UCmmqa9M-L-&token_type=Bearer&expires_in=3600
    // http://localhost:5173/callback#access_token=BQB-zLdogKQFpTI4ty8c_iBsrSXynqnpmLThAMdoLIXZoDO4kpxCR5_OfZmM32TTzIYEqx1no7wRdImwfwJK9BgqRZjf_6YjAcOTwRPtkpRwF2T7m3Aql7IbPbHwppkGAtx14hC1-wGOBobo6IG3PphufHAUYu0F8Q5zAJu6I9UqPrB04BW7i9WjOn0CaDjwNXIWpM5nOciisQ&token_type=Bearer&expires_in=3600

    async function refreshAccessToken(refreshToken) {
        const clientId = '0891cff8df794061bc9ad70a423bb85d';
        const clientSecret = 'cd3a1f02977444f085255f1b7aed25d1';
        const authString = `${clientId}:${clientSecret}`;
        const authBase64 = btoa(authString);

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authBase64}`
            },
            body: new URLSearchParams({
                'grant_type': 'refresh_token',
                'refresh_token': refreshToken
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error Data:', errorData);
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data.access_token;
    }


    useEffect(() => {
        (async () => {
            try {
                var token = "BQDlNUwpH1pdbAdMUZ3fbiFeBZQr5pSPVqATUrPu-E04YqN8Y6Z-6NM-JMfQL8JSJl7CY9Evv67jYU6bhaeCWW4TUnFFNufJd03TiabHfaok5tqse4eQM4WvpoX0WIHilwIasMrsbL-A-kLF2aofsWoPe1F8srWtswhYjtY7UkzJGBGHyFFpNlnUU_5x8UCmmqa9M-L-"; // Replace with your actual token
                const refreshToken = 'your-refresh-token'; // Replace with your actual refresh token

                const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Scope': 'user-read-recently-played'
                    }
                });

                if (response.status === 401) {
                    // Access token is expired, refresh it
                    token = await refreshAccessToken(refreshToken);

                    // Retry the request with the new access token
                    const retryResponse = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Scope': 'user-read-recently-played'
                        }
                    });

                    if (!retryResponse.ok) {
                        const errorData = await retryResponse.json();
                        console.error('Error Data:', errorData);
                        throw new Error(`Error: ${retryResponse.status} - ${retryResponse.statusText}`);
                    }

                    const data = await retryResponse.json();
                    console.log(data);
                } else {
                    if (!response.ok) {
                        const errorData = await response.json();
                        console.error('Error Data:', errorData);
                        throw new Error(`Error: ${response.status} - ${response.statusText}`);
                    }

                    const data = await response.json();
                    console.log(data);
                }
            } catch (error) {
                console.log(error + '\nError While getting message');
            }
        })()
    }, []);



    return (
        <div className="rounded-3xl">
            Player
        </div>
    )
};

export default Player;
