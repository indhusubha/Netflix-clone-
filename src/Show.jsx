import React, { useState } from "react";

function Show() {
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState("");
  const [activeVideo, setActiveVideo] = useState("/img/ma.mp4");

  const [addedShows, setAddedShows] = useState(() => {
    const oldList = JSON.parse(localStorage.getItem("watchlist")) || [];
    return oldList.map((item) => item.name);
  });

  // 8 ROWS × 5 IMAGES
  const rows = [
    [
      { name: "Wednesday", image: "/img/c4.jpeg" },
      { name: "Stranger Things", image: "/img/a9.jpeg" },
      { name: "Witcher", image: "/img/a7.jpeg" },
      { name: "Witcher 2", image: "/img/a1.jpeg" },
      { name: "Idhayam", image: "/img/idhayam.jpg" },
    ],

    [
      { name: "Money Heist", image: "/img/d1.jpeg" },
      { name: "Money Heist 2", image: "/img/d2.jpeg" },
      { name: "Inception", image: "/img/d3.jpeg" },
      { name: "Lucifer", image: "/img/d5.jpeg" },
      { name: "Lucifer 2", image: "/img/d6.jpeg" },
    ],

    [
      { name: "Lucifer 3", image: "/img/d8.jpeg" },
      { name: "Money Heist 3", image: "/img/d9.jpeg" },
      { name: "Lucifer 4", image: "/img/d10.jpeg" },
      { name: "Lucifer 5", image: "/img/e.jpeg" },
      { name: "Lucifer 6", image: "/img/e1.jpeg" },
    ],

    [
      { name: "Lucifer 7", image: "/img/e2.jpeg" },
      { name: "Money Heist 4", image: "/img/e3.jpeg" },
      { name: "Lucifer 8", image: "/img/e4.jpeg" },
      { name: "Lucifer 9", image: "/img/e5.jpeg" },
      { name: "Lucifer 10", image: "/img/e6.jpeg" },
    ],

    [
      { name: "Movie 21", image: "/img/b1.jpeg" },
      { name: "Movie 22", image: "/img/b3.jpeg" },
      { name: "Movie 23", image: "/img/b5.jpeg" },
      { name: "Movie 24", image: "/img/b6.jpeg" },
      { name: "Movie 25", image: "/img/b7.jpeg" },
    ],

    [
      { name: "Movie 26", image: "/img/d8.jpeg" },
      { name: "Movie 27", image: "/img/d9.jpeg" },
      { name: "Movie 28", image: "/img/d10.jpeg" },
      { name: "Movie 29", image: "/img/e.jpeg" },
      { name: "Movie 30", image: "/img/e1.jpeg" },
    ],

    [
      { name: "Movie 31", image: "/img/c4.jpeg" },
      { name: "Movie 32", image: "/img/a9.jpeg" },
      { name: "Movie 33", image: "/img/a7.jpeg" },
      { name: "Movie 34", image: "/img/a1.jpeg" },
      { name: "Movie 35", image: "/img/idhayam.jpg" },
    ],

    [
      { name: "Movie 36", image: "/img/e2.jpeg" },
      { name: "Movie 37", image: "/img/e3.jpeg" },
      { name: "Movie 38", image: "/img/e4.jpeg" },
      { name: "Movie 39", image: "/img/e5.jpeg" },
      { name: "Movie 40", image: "/img/e6.jpeg" },
    ],
  ];

  // ADD TO WATCHLIST
  const addToWatchlist = (name, image) => {
    const oldList =
      JSON.parse(localStorage.getItem("watchlist")) || [];

    // already irundha again add aagadhu
    const alreadyExists = oldList.some(
      (item) => item.name === name
    );

    if (alreadyExists) {
      return;
    }

    const newMovie = {
      name: name,
      image: image,
    };

    const updatedList = [...oldList, newMovie];

    localStorage.setItem(
      "watchlist",
      JSON.stringify(updatedList)
    );

    setAddedShows((prev) => [...prev, name]);
  };

  const handleMouseEnter = (name) => {
    setMovie(name);
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div className="movies-page">

      {/* ================= MAIN VIDEO ================= */}

      <div className="main-video-section">

        <video
          className="video"
          autoPlay
          loop
          key={activeVideo}
        >
          <source
            src={activeVideo}
            type="video/mp4"
          />
        </video>

        {/* SMALL THUMBNAILS */}

        <div className="hero-thumbnails">

          <div
            className="hero-thumbnail"
            onClick={() =>
              setActiveVideo("/img/WEDNESDAY.mp4")
            }
          >
            <img
              src="/img/c4.jpeg"
              alt="Wednesday"
            />
          </div>

          <div
            className="hero-thumbnail"
            onClick={() =>
              setActiveVideo("/img/ma.mp4")
            }
          >
            <img
              src="/img/a9.jpeg"
              alt="Stranger Things"
            />
          </div>

          <div
            className="hero-thumbnail"
            onClick={() =>
              setActiveVideo("/img/WEDNESDAY.mp4")
            }
          >
            <img
              src="/img/a7.jpeg"
              alt="Witcher"
            />
          </div>

          <div
            className="hero-thumbnail"
            onClick={() =>
              setActiveVideo("/img/ma.mp4")
            }
          >
            <img
              src="/img/a1.jpeg"
              alt="Witcher 2"
            />
          </div>

        </div>
      </div>


      {/* ================= 8 ROWS ================= */}

      {rows.map((row, rowIndex) => (

        <div className="movie-row" key={rowIndex}>

          {row.map((item) => (

            <div
              className="movie-card"
              key={item.name}
              onMouseEnter={() =>
                handleMouseEnter(item.name)
              }
              onMouseLeave={handleMouseLeave}
            >

              {/* POSTER IMAGE */}

              <img
                src={item.image}
                alt={item.name}
              />


              {/* ================= POPUP ================= */}

              {show && movie === item.name && (

                <div className="popup">

                  <div className="pop-info">

                    {/* POPUP VIDEO */}

                    <video
                      autoPlay
                      loop
                      muted
                    >
                      <source
                        src="/img/WEDNESDAY.mp4"
                        type="video/mp4"
                      />
                    </video>


                    {/* WATCH NOW */}

                    <button className="button">
                      Watch Now
                    </button>


                    {/* WATCHLIST */}

                    <button
                      className="but"
                      onClick={(e) => {
                        e.stopPropagation();

                        addToWatchlist(
                          item.name,
                          item.image
                        );
                      }}
                    >
                      {addedShows.includes(item.name)
                        ? "✓"
                        : "+"}
                    </button>


                    {/* DESCRIPTION */}

                    <p>
                      Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                      Incidunt voluptatibus asperiores
                      saepe, soluta perferendis.
                    </p>

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      ))}
  <div>
        
        <footer class="footer">

    <div class="footer-box">
        <h3>Company</h3>
        <p>About Us</p>
        <p>Careers</p>
    </div>

    <div class="footer-box">
        <h3>View Website in</h3>
        <p>✓ &nbsp; English</p>
    </div>

    <div class="footer-box">
        <h3>Need Help?</h3>
        <p>Visit Help Center</p>
        <p>Share Feedback</p>
    </div>
    <div class="footer-box">
        <h3>connect with us</h3>
        <span>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-x-twitter"></i>
        </span>

    </div>

    <div class="footer-last">
        <p>© 2026 STAR. All Rights Reserved.</p>
        <p>Terms Of Use &nbsp;&nbsp; Privacy Policy &nbsp;&nbsp; FAQ</p>
    </div>

</footer>
</div>
    </div>
  );
}

export default Show;