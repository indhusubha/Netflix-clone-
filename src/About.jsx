import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function About() {
  return (
    <div id="from">

      {/* ================= HERO ================= */}

      <div className="hero">

        <div className="box box1">
          <img src="/img/vijay.jpg" alt="" />
        </div>

        <div className="box box2">
          <img src="/img/murali.png" alt="" />
        </div>

        <div className="box box3">
          <img src="/img/wid.avif" alt="" />
        </div>

      </div>


      {/* ================= CAROUSEL 1 ================= */}

      <div className="heading">
        <h4>Trending Movies</h4>
      </div>

      <div id="movieCarousel1" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-1">

              <img className="movie-img-1" src="/img/d.jpeg" alt="" />
              <img className="movie-img-1" src="/img/M2.jpeg" alt="" />
              <img className="movie-img-1" src="/img/m3.jpeg" alt="" />
              <img className="movie-img-1" src="/img/f.jpeg" alt="" />
              <img className="movie-img-1" src="/img/g.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-1">

              <img className="movie-img-1" src="/img/M1.jpeg" alt="" />
              <img className="movie-img-1" src="/img/b.jpeg" alt="" />
              <img className="movie-img-1" src="/img/c.jpeg" alt="" />
              {/* <img className="movie-img-1" src="/img/a.jpeg" alt="" /> */}
              <img className="movie-img-1" src="/img/h.jpeg" alt="" />
              <img className="movie-img-1" src="/img/i.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" 
          data-bs-target="#movieCarousel1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= CAROUSEL 2 ================= */}

      <div className="heading">
        <h4>New On netflix</h4>
      </div>

      <div id="movieCarousel2" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-2">

              <img className="movie-img-2" src="/img/a1.jpeg" alt="" />
              <img className="movie-img-2" src="/img/a2.jpeg" alt="" />
              <img className="movie-img-2" src="/img/a3.jpeg" alt="" />
              <img className="movie-img-2" src="/img/a4.jpeg" alt="" />
              <img className="movie-img-2" src="/img/a5.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-2">

              <img className="movie-img-2" src="/img/a6.jpeg" alt="" />
              <img className="movie-img-2" src="/img/a7.jpeg" alt="" />
              <img className="movie-img-2" src="/img/a8.jpeg" alt="" />
              <img className="movie-img-2" src="/img/a9.jpeg" alt="" />
              <img className="movie-img-2" src="/img/b1.jpeg" alt="" />
              <img className="movie-img-2" src="/img/b2.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= CAROUSEL 3 ================= */}

      <div className="heading">
        <h4>India Movies</h4>
      </div>

      <div id="movieCarousel3" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-3">

              <img className="movie-img-3" src="/img/b1.jpeg" alt="" />
              <img className="movie-img-3" src="/img/b2.jpeg" alt="" />
              <img className="movie-img-3" src="/img/b3.jpeg" alt="" />
              <img className="movie-img-3" src="/img/c4.jpeg" alt="" />
              <img className="movie-img-3" src="/img/b5.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-3">

              <img className="movie-img-3" src="/img/b4.jpeg" alt="" />
              <img className="movie-img-3" src="/img/c1.jpeg" alt="" />
              <img className="movie-img-3" src="/img/c2.jpeg" alt="" />
              <img className="movie-img-3" src="/img/c3.jpeg" alt="" />
              <img className="movie-img-3" src="/img/b4.jpeg" alt="" />
              <img className="movie-img-3" src="/img/c5.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel3"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel3"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= TOP 10 ================= */}

      <div className="heading">
        <h4>Top 10 Movies in india</h4>
      </div>

      <div className="another">

        <div className="rank-card">
          <span className="rank-number">1</span>
          <img className="i" src="/img/j.jpeg" alt="" />
        </div>

        <div className="rank-card">
          <span className="rank-number">2</span>
          <img className="i" src="/img/e.jpeg" alt="" />
        </div>

        <div className="rank-card">
          <span className="rank-number">3</span>
          <img className="i" src="/img/A.jpeg" alt="" />
        </div>

        <div className="rank-card">
          <span className="rank-number">4</span>
          <img className="i" src="/img/B.jpeg" alt="" />
        </div>

        <div className="rank-card">
          <span className="rank-number">5</span>
          <img className="i" src="/img/C.jpeg" alt="" />
        </div>

        <div className="rank-card">
          <span className="rank-number">6</span>
          <img className="i" src="/img/b2.jpeg" alt="" />
        </div>

        <div className="rank-card">
          <span className="rank-number">7</span>
          <img className="i" src="/img/ppt.jpg" alt="" />
        </div>

        <div className="rank-card">
          <span className="rank-number">8</span>
          <img className="i" src="/img/dark.webp" alt="" />
        </div>

        <div className="rank-card">
          <span className="rank-number">9</span>
          <img className="i" src="/img/ppt.jpg" alt="" />
        </div>

        <div className="rank-card">
          <span className="rank-number">10</span>
          <img className="i" src="/img/ppt.jpg" alt="" />
        </div>

      </div>


      {/* ================= CAROUSEL 4 ================= */}

      <div className="heading">
        <h4>Trending Movies</h4>
      </div>

      <div id="movieCarousel4" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-4">

              <img className="movie-img-4" src="/img/b3.jpeg" alt="" />
              <img className="movie-img-4" src="/img/c2.jpeg" alt="" />
              <img className="movie-img-4" src="/img/b5.jpeg" alt="" />
              <img className="movie-img-4" src="/img/b6.jpeg" alt="" />
              <img className="movie-img-4" src="/img/b7.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-4">

              <img className="movie-img-4" src="/img/C.jpeg" alt="" />
              <img className="movie-img-4" src="/img/c1.jpeg" alt="" />
              <img className="movie-img-4" src="/img/b4.jpeg" alt="" />
              <img className="movie-img-4" src="/img/c3.jpeg" alt="" />
              <img className="movie-img-4" src="/img/c4.jpeg" alt="" />
              <img className="movie-img-4" src="/img/c5.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel4"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel4"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= MOVIES ================= */}
      <h4 className="heading">Trending Movies</h4>
      <div className="anothers">

        <img className="movie" src="/img/j.jpeg" alt="" />
        <img className="movie" src="/img/e.jpeg" alt="" />
        <img className="movie" src="/img/A.jpeg" alt="" />
        <img className="movie" src="/img/B.jpeg" alt="" />
        <img className="movie" src="/img/C.jpeg" alt="" />
        <img className="movie" src="/img/b2.jpeg" alt="" />
        <img className="movie" src="/img/ppt.jpg" alt="" />
        <img className="movie" src="/img/dark.webp" alt="" />
        <img className="movie" src="/img/ppt.jpg" alt="" />
        <img className="movie" src="/img/ppt.jpg" alt="" />

      </div>


      {/* ================= CAROUSEL 5 ================= */}

      <div className="heading">
        <h4>Horrer Movies</h4>
      </div>

      <div id="movieCarousel5" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-5">

              <img className="movie-img-5" src="/img/C.jpeg" alt="" />
              <img className="movie-img-5" src="/img/c2.jpeg" alt="" />
              <img className="movie-img-5" src="/img/c3.jpeg" alt="" />
              <img className="movie-img-5" src="/img/c4.jpeg" alt="" />
              <img className="movie-img-5" src="/img/c5.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-5">

              <img className="movie-img-5" src="/img/a6.jpeg" alt="" />
              <img className="movie-img-5" src="/img/a7.jpeg" alt="" />
              <img className="movie-img-5" src="/img/a8.jpeg" alt="" />
              <img className="movie-img-5" src="/img/a9.jpeg" alt="" />
              <img className="movie-img-5" src="/img/b1.jpeg" alt="" />
              <img className="movie-img-5" src="/img/b2.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel5"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel5"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= CAROUSEL 6 ================= */}

      <div className="heading">
        <h4>Comedy Movies</h4>
      </div>

      <div id="movieCarousel6" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-6">

              <img className="movie-img-6" src="/img/m4.jpeg" alt="" />
              <img className="movie-img-6" src="/img/B.jpeg" alt="" />
              <img className="movie-img-6" src="/img/b3.jpeg" alt="" />
              <img className="movie-img-6" src="/img/A.jpeg" alt="" />
              <img className="movie-img-6" src="/img/b9.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-6">

              <img className="movie-img-6" src="/img/a6.jpeg" alt="" />
              <img className="movie-img-6" src="/img/a7.jpeg" alt="" />
              <img className="movie-img-6" src="/img/a8.jpeg" alt="" />
              <img className="movie-img-6" src="/img/a9.jpeg" alt="" />
              <img className="movie-img-6" src="/img/b1.jpeg" alt="" />
              <img className="movie-img-6" src="/img/b2.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel6"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel6"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= CAROUSEL 7 ================= */}

      <div className="heading">
        <h4>Latest Movies</h4>
      </div>

      <div id="movieCarousel7" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-7">

              <img className="movie-img-7" src="/img/a1.jpeg" alt="" />
              <img className="movie-img-7" src="/img/a2.jpeg" alt="" />
              <img className="movie-img-7" src="/img/a3.jpeg" alt="" />
              <img className="movie-img-7" src="/img/a4.jpeg" alt="" />
              <img className="movie-img-7" src="/img/a5.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-7">

              <img className="movie-img-7" src="/img/a6.jpeg" alt="" />
              <img className="movie-img-7" src="/img/a7.jpeg" alt="" />
              <img className="movie-img-7" src="/img/a8.jpeg" alt="" />
              <img className="movie-img-7" src="/img/a9.jpeg" alt="" />
              <img className="movie-img-7" src="/img/b1.jpeg" alt="" />
              <img className="movie-img-7" src="/img/b2.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel7"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel7"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= CAROUSEL 8 ================= */}

      <div className="heading">
        <h4>Dubbing Movies</h4>
      </div>

      <div id="movieCarousel8" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-8">

              <img className="movie-img-8" src="/img/m4.jpeg" alt="" />
              <img className="movie-img-8" src="/img/b3.jpeg" alt="" />
              <img className="movie-img-8" src="/img/c2.jpeg" alt="" />
              <img className="movie-img-8" src="/img/c3.jpeg" alt="" />
              <img className="movie-img-8" src="/img/c4.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-8">

              <img className="movie-img-8" src="/img/c5.jpeg" alt="" />
              <img className="movie-img-8" src="/img/a6.jpeg" alt="" />
              <img className="movie-img-8" src="/img/a7.jpeg" alt="" />
              <img className="movie-img-8" src="/img/a8.jpeg" alt="" />
              <img className="movie-img-8" src="/img/a9.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel8"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel8"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= CAROUSEL 9 ================= */}

      <div className="heading">
        <h4>Trending Movies</h4>
      </div>

      <div id="movieCarousel9" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-9">

              <img className="movie-img-9" src="/img/b1.jpeg" alt="" />
              <img className="movie-img-9" src="/img/b2.jpeg" alt="" />
              <img className="movie-img-9" src="/img/b3.jpeg" alt="" />
              <img className="movie-img-9" src="/img/b4.jpeg" alt="" />
              <img className="movie-img-9" src="/img/b5.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-9">

              <img className="movie-img-9" src="/img/b6.jpeg" alt="" />
              <img className="movie-img-9" src="/img/b7.jpeg" alt="" />
              <img className="movie-img-9" src="/img/b9.jpeg" alt="" />
              <img className="movie-img-9" src="/img/c1.jpeg" alt="" />
              <img className="movie-img-9" src="/img/c2.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel9"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel9"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= CAROUSEL 10 ================= */}

      <div className="heading">
        <h4>Trending Movies</h4>
      </div>

      <div id="movieCarousel10" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="movie-row-10">

              <img className="movie-img-10" src="/img/c1.jpeg" alt="" />
              <img className="movie-img-10" src="/img/c2.jpeg" alt="" />
              <img className="movie-img-10" src="/img/c3.jpeg" alt="" />
              <img className="movie-img-10" src="/img/c4.jpeg" alt="" />
              <img className="movie-img-10" src="/img/c5.jpeg" alt="" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="movie-row-10">

              <img className="movie-img-10" src="/img/a6.jpeg" alt="" />
              <img className="movie-img-10" src="/img/a7.jpeg" alt="" />
              <img className="movie-img-10" src="/img/a8.jpeg" alt="" />
              <img className="movie-img-10" src="/img/a9.jpeg" alt="" />
              <img className="movie-img-10" src="/img/b1.jpeg" alt="" />
              <img className="movie-img-10" src="/img/b2.jpeg" alt="" />

            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel10"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel10"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
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

export default About;