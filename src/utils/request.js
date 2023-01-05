import axios from "axios";

const steamUrl = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.REACT_APP_STEAM_API_KEY}`;

export const steamAPI = {
  fetchById: (userId) => {
    const response = axios.get(
      `${steamUrl}&steamid=${userId}&format=json&include_appinfo=1`
    );
    return response.data.response.games;
  },
};
