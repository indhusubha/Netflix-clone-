import React, { useEffect, useState } from "react";

function Watchlist() {

    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {

        const savedList =
            JSON.parse(localStorage.getItem("watchlist")) || [];

        setWatchlist(savedList);

    }, []);

    return (
        <div className="watchlist-page">

            <h2 className="watchlist-heading">
                My List
            </h2>

            <div className="watchlist-grid">

                {watchlist.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt={item.name}
                    />
                ))}

            </div>

        </div>
    );
}

export default Watchlist;