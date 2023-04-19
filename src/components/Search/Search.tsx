import { FC } from "react";
import search from '../../image/Search.svg';

export const Search: FC = () => {
    return (
        <div className="search">
            <img src={search}
                alt="search icon"
                className="search__icon"
            />
            <input
                className="search__input"
                placeholder="Try &quot;Cabernet Sauvignon&quot;"
                type="text"
            />
        </div>
    )
}