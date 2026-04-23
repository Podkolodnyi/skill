import {PLAYLISTS} from "../../data";
import {Link, useSearchParams} from "react-router-dom";
import "./PlaylistsPage.css";
import {ChangeEvent} from "react";

export function PlaylistsPage() {
    const [searchParam, setSearchParam] = useSearchParams()

    const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target;
        setSearchParam({searchName: value.toLowerCase()});
    }

    const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target;
        setSearchParam({searchGenre: value.toLowerCase()})
    }

    const searchName = searchParam.get("searchName") || "";
    const searchGenre = searchParam.get("searchGenre") || "";

    const filteredPlaylists = PLAYLISTS.filter(({name, genre}) =>
        name.toLowerCase().includes(searchName) && genre.toLowerCase().includes(searchGenre) && genre !== "Non Music"
    );


    return (
        <div className="playlistsPage">
            <h2>PlaylistsPage</h2>
            <label>
                введите название {" "}
                <input type={"text"} value={searchName} onChange={handleSearchName}/>
            </label>
            <label>
                введите жанр {" "}
                <input type={"text"} value={searchGenre} onChange={handleSearchGenre}/>
            </label>
            <div className="playlists">
                {filteredPlaylists.map((el) => (
                    <Link to={`/playlists/${el.id}`} key={el.id}>{el.name}</Link>
                ))}
            </div>
        </div>
    )
}