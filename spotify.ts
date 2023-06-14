import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv'
import {Playlist, Track} from "./types";

dotenv.config();

const spotifyApi = new SpotifyWebApi();
if (process.env.SPOTIFY_ACCESS_TOKEN) {
    spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);
} else {
    console.error("Please authentificate with your Spotify Account. :)")
}

export function auth(): void {

}

export async function createPlaylist(playlist: Playlist): Promise<String> {
    const userData = await spotifyApi.getMe();
    const userId = userData.body.id;

    const playlistData = await spotifyApi.createPlaylist(userId, { public: false , description: "test"});
    const playlistId = playlistData.body.id;

    for (const track of playlist) {
        try {


            const searchQuery = `${track.title} ${track.artist}`;
            const searchResults = await spotifyApi.searchTracks(searchQuery, { limit: 1 });
            const trackId = searchResults.body.tracks.items[0].id;
            await spotifyApi.addTracksToPlaylist(playlistId, [`spotify:track:${trackId}`]);
            console.log(`Playlist "${track.title}" created successfully with the track "${searchQuery}"!`);
        } catch (error) {
            console.log('Error adding track to playlist:', error);
        }
    }
    return playlistData.body.uri







}