import {Link, useParams} from "react-router-dom";
import {PLAYLISTS} from "../../data";
import "./PlaylistInfoPage.css";


export function PlaylistInfoPage() {
    const {playlistId} = useParams();
    const playlist = PLAYLISTS[Number(playlistId)];

    if (!playlist) {
        return (
            <div className="playlistInfoPage">
                <h2>PlaylistInfoPage</h2>

                <div className="playlists">
                    <p>такого плейлиста нет</p>
                </div>
            </div>
        );
    }

    return (
        <div className="playlistInfoPage">
            <h2>PlaylistInfoPage</h2>

            <div className="playlist">
                <p>Жанр: <Link to={`/playlists?searchGenre=${encodeURIComponent(playlist.genre.toLowerCase())}`}>{playlist.genre}</Link></p>
                <p>Название: {playlist.name}</p>
                {playlist.songs.map((el, index) => (
                    <p key={index}>{el}</p>
                ))}
            </div>
        </div>
    )
}