import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv'

dotenv.config();

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);

export function auth(): void {

}

export async function createPlaylist(playlist: Object): Promise<String> {


}