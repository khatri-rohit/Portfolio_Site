/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import { loginEndpoint } from '../spotify';
import axios from 'axios'

const Player = () => {
    const Credentials = () => {
        return {
            ClientId: 'aa9d874d1f8840f0b1d837cf45caa60d',
            ClientSecret: '7eebd8ee3bb04ce184901499b4e0c7cb'
        }
    }
    const spotify = Credentials()

    // http://localhost:5173/callback#access_token=BQDlNUwpH1pdbAdMUZ3fbiFeBZQr5pSPVqATUrPu-E04YqN8Y6Z-6NM-JMfQL8JSJl7CY9Evv67jYU6bhaeCWW4TUnFFNufJd03TiabHfaok5tqse4eQM4WvpoX0WIHilwIasMrsbL-A-kLF2aofsWoPe1F8srWtswhYjtY7UkzJGBGHyFFpNlnUU_5x8UCmmqa9M-L-&token_type=Bearer&expires_in=3600
    // http://localhost:5173/callback#access_token=BQB-zLdogKQFpTI4ty8c_iBsrSXynqnpmLThAMdoLIXZoDO4kpxCR5_OfZmM32TTzIYEqx1no7wRdImwfwJK9BgqRZjf_6YjAcOTwRPtkpRwF2T7m3Aql7IbPbHwppkGAtx14hC1-wGOBobo6IG3PphufHAUYu0F8Q5zAJu6I9UqPrB04BW7i9WjOn0CaDjwNXIWpM5nOciisQ&token_type=Bearer&expires_in=3600

    // async function refreshAccessToken(refreshToken) {
    //     const clientId = '0891cff8df794061bc9ad70a423bb85d';
    //     const clientSecret = 'cd3a1f02977444f085255f1b7aed25d1';
    //     const authString = `${clientId}:${clientSecret}`;
    //     const authBase64 = btoa(authString);

    //     const response = await fetch('https://accounts.spotify.com/api/token', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             'Authorization': `Basic ${authBase64}`
    //         },
    //         body: new URLSearchParams({
    //             'grant_type': 'refresh_token',
    //             'refresh_token': refreshToken
    //         })
    //     });

    //     if (!response.ok) {
    //         const errorData = await response.json();
    //         console.error('Error Data:', errorData);
    //         throw new Error(`Error: ${response.status} - ${response.statusText}`);
    //     }

    //     const data = await response.json();
    //     return data.access_token;
    // }

    // http://localhost:5173/callback#access_token=BQBJoJUxhop9DQc7SbYj7CQHC7pdn0hojeS_-ysOznxe8XozvUTCmFvpAVZ9yTi0Z5wiYPgVsNeIM-OpyitQSMkLWtyJyp3MIvyJcBvORn3RwKUIOTNW9ruiJYzamnbFol-V2uwg4RgxURw95_AYKR80FTKjAhMvVMUsvkJG2PidS6oS6MxcpO_9nkURq4w2ycJgkhH-nEoNhdWAmTFNPMbG4bOv31Gx&token_type=Bearer&expires_in=3600

    // console.log(loginEndpoint);

    const [token, setToken] = useState("BQBJoJUxhop9DQc7SbYj7CQHC7pdn0hojeS_-ysOznxe8XozvUTCmFvpAVZ9yTi0Z5wiYPgVsNeIM-OpyitQSMkLWtyJyp3MIvyJcBvORn3RwKUIOTNW9ruiJYzamnbFol-V2uwg4RgxURw95_AYKR80FTKjAhMvVMUsvkJG2PidS6oS6MxcpO_9nkURq4w2ycJgkhH-nEoNhdWAmTFNPMbG4bOv31Gx")

    useEffect(() => {
        (async () => {
            axios('https:accounts.spotify.com/api/token', {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
                },
                data: 'grant_type=client_credentials',
                method: 'POST'
            })
                .then(tokenRes => {
                    console.log(tokenRes.data.access_token);
                    setToken("tokenRes.data.access_token")
                })
                .catch(reason => {
                    console.log(reason);

                })
        })()
        // (async () => {
        //     try {

        //     } catch (error) {
        //         console.log(error + '\nError While getting message');
        //     }
        // })()
    }, []);

    return (
        <div className="rounded-3xl">
            Player
        </div>
    )
};

export default Player;
