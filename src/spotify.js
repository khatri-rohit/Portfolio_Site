const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "aa9d874d1f8840f0b1d837cf45caa60d";
const redirectUri = "http://localhost:5173/callback";
const scope = ["user-library-read", "playlist-read-private"];
// user-read-recently-played -> scope

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`