import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState("");
  const [activeVideo, setActiveVideo] = useState("/img/youth.mp4");

  const navigate = useNavigate();

  const handleWatchNow = () => {
    if (localStorage.getItem("subscribed") === "true") {
      navigate("/WatchMovie");
    } else {
      navigate("/Subscribe");
    }
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

      {/* MAIN VIDEO */}
      <div className="main-video-section">

        <video
          className="video"
          autoPlay
          loop
          key={activeVideo}
          width="600"
        >
          <source src={activeVideo} type="video/mp4" />
        </video>

        {/* SMALL THUMBNAILS */}
        <div className="hero-thumbnails">

          <div
            className="hero-thumbnail"
            onClick={() => setActiveVideo("/img/WEDNESDAY.mp4")}
          >
            <img src="/img/c4.jpeg" alt="Wednesday" />
          </div>

          <div
            className="hero-thumbnail"
            onClick={() => setActiveVideo("/img/ma.mp4")}
          >
            <img src="/img/a9.jpeg" alt="Stranger Things" />
          </div>

          <div
            className="hero-thumbnail"
            onClick={() => setActiveVideo("/img/29.mp4")}
          >
            <img src="/img/a7.jpeg" alt="Witcher" />
          </div>

          <div
            className="hero-thumbnail"
            onClick={() => setActiveVideo("/img/ann.mp4")}
          >
            <img src="/img/a1.jpeg" alt="Witcher 2" />
          </div>

        </div>
      </div>


      {/* ROW 1 */}

      <div className="movie-row">

        {/* Wednesday */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("wednesday")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/c4.jpeg" alt="Wednesday" />

          {show && movie === "wednesday" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/youth.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        {/* Stranger Things */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("stranger")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/a9.jpeg" alt="Stranger Things" />

          {show && movie === "stranger" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        {/* Witcher */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("witcher")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/a7.jpeg" alt="Witcher" />

          {show && movie === "witcher" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        {/* Witcher 2 */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("witcher2")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/a1.jpeg" alt="Witcher 2" />

          {show && movie === "witcher2" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        {/* Witchers */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("witchers")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/idhayam.jpg" alt="Witchers" />

          {show && movie === "witchers" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>

      </div>


      {/* ROW 2 */}

      <div className="movie-row">

        {/* Money Heist */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("money")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d1.jpeg" alt="Money Heist" />

          {show && movie === "money" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button className="button">
                  Notify Me
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        {/* Money 1 */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("money1")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d2.jpeg" alt="Money Heist" />

          {show && movie === "money1" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        {/* Inception */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("inception")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d3.jpeg" alt="Inception" />

          {show && movie === "inception" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        {/* Lucifer */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d5.jpeg" alt="Lucifer" />

          {show && movie === "lucifer" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        {/* Lucifer 2 */}
        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer2")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d6.jpeg" alt="Lucifer 2" />

          {show && movie === "lucifer2" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>

      </div>


      {/* ROW 3 */}

      <div className="movie-row">

        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer3")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d8.jpeg" alt="Lucifer 3" />

          {show && movie === "lucifer3" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("money3")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d9.jpeg" alt="Money Heist" />

          {show && movie === "money3" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer4")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d10.jpeg" alt="Lucifer 4" />

          {show && movie === "lucifer4" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores saepe, soluta perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer5")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/e.jpeg" alt="Lucifer 5" />

          {show && movie === "lucifer5" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer6")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/e1.jpeg" alt="Lucifer 6" />

          {show && movie === "lucifer6" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>

      </div>


      {/* ROW 4 */}

      <div className="movie-row">

        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer7")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/e2.jpeg" alt="Lucifer 7" />

          {show && movie === "lucifer7" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("money")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/e3.jpeg" alt="Money Heist" />

          {show && movie === "money" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer8")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/e4.jpeg" alt="Lucifer 8" />

          {show && movie === "lucifer8" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer9")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/e5.jpeg" alt="Lucifer 9" />

          {show && movie === "lucifer9" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer10")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/e6.jpeg" alt="Lucifer 10" />

          {show && movie === "lucifer10" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>

      </div>


      {/* ROW 5 */}

      <div className="movie-row">

        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucif7")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/b1.jpeg" alt="Lucifer 7" />

          {show && movie === "lucif7" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("mone")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/b3.jpeg" alt="Money Heist" />

          {show && movie === "mone" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucife")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/b5.jpeg" alt="Lucifer 8" />

          {show && movie === "lucife" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicingi elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucif1")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/b6.jpeg" alt="Lucifer 9" />

          {show && movie === "lucif1" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucife2")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/b7.jpeg" alt="Lucifer 10" />

          {show && movie === "lucife2" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>

      </div>


      {/* ROW 6 */}

      <div className="movie-row">

        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer3")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d8.jpeg" alt="Lucifer 3" />

          {show && movie === "lucifer3" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("money3")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d9.jpeg" alt="Money Heist" />

          {show && movie === "money3" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer4")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/d10.jpeg" alt="Lucifer 4" />

          {show && movie === "lucifer4" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer5")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/e.jpeg" alt="Lucifer 5" />

          {show && movie === "lucifer5" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>


        <div
          className="movie-card"
          onMouseEnter={() => handleMouseEnter("lucifer6")}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/img/e1.jpeg" alt="Lucifer 6" />

          {show && movie === "lucifer6" && (
            <div className="popup">
              <div className="pop-info">

                <video autoPlay loop muted>
                  <source src="/img/WEDNESDAY.mp4" type="video/mp4" />
                </video>

                <button
                  className="button"
                  onClick={handleWatchNow}
                >
                  Watch Now
                </button>

                <button className="but">+</button>

                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt voluptatibus
                  asperiores often, solita perferendis.
                </p>

              </div>
            </div>
          )}
        </div>

      </div>


      {/* FOOTER */}

      <div>

        <footer className="footer">

          <div className="footer-box">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Careers</p>
          </div>

          <div className="footer-box">
            <h3>View Website in</h3>
            <p>✓ &nbsp; English</p>
          </div>

          <div className="footer-box">
            <h3>Need Help?</h3>
            <p>Visit Help Center</p>
            <p>Share Feedback</p>
          </div>

          <div className="footer-box">
            <h3>Connect with us</h3>

            <span>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </span>

          </div>

          <div className="footer-last">

            <p>
              © 2026 STAR. All Rights Reserved.
            </p>

            <p>
              Terms Of Use &nbsp;&nbsp;
              Privacy Policy &nbsp;&nbsp;
              FAQ
            </p>

          </div>

        </footer>

      </div>

    </div>
  );
}

export default Movies;