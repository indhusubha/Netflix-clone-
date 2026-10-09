import React from "react";

function WatchMovie() {
  return (
    <div className="watch-movie">

      <h1>Now Watching</h1>

      <video
        controls
        autoPlay
        width="900"
      >
        <source
          src="/img/youth.mp4"
          type="video/mp4"
        />
      </video>

    </div>
  );
}

export default WatchMovie;