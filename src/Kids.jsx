
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Kids.css";

function Kids() {
  return (
    <div id="kids-from">

      {/* ================= HERO ================= */}

      <div className="banner">
        <video autoPlay loop muted>
          <source src="/img/shinchan.mp4" type="video/mp4" />
        </video>
      </div>


      {/* ================= CAROUSEL 1 ================= */}

      <div className="kids-heading">
        <h4>Kids Movies</h4>
      </div>

      <div id="kidsCarousel1" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="kids-row">

              <img className="kids-im" src="/img/j5.jpeg" alt="" />
              <img className="kids-im" src="/img/j6.jpeg" alt="" />
              <img className="kids-im" src="/img/j7.jpeg" alt="" />
              <img className="kids-im" src="/img/j8.jpeg" alt="" />
              <img className="kids-im" src="/img/j9.jpeg" alt="" />

            </div>
          </div>


          <div className="carousel-item">
            <div className="kids-row">

              <img className="kids-im" src="/img/j10.jpeg" alt="" />
              <img className="kids-im" src="/img/k1.jpeg" alt="" />
              <img className="kids-im" src="/img/k2.jpeg" alt="" />
              <img className="kids-im" src="/img/k3.jpeg" alt="" />
              <img className="kids-im" src="/img/k4.jpeg" alt="" />

            </div>
          </div>

        </div>


        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#kidsCarousel1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>


        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#kidsCarousel1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= CAROUSEL 2 ================= */}

      <div className="kids-heading">
        <h4>Animated Kids Movies</h4>
      </div>

      <div id="kidsCarousel2" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="kids-row1">

              <img className="kids-im2" src="/img/k4.jpeg" alt="" />
              <img className="kids-im2" src="/img/k5.jpeg" alt="" />
              <img className="kids-im2" src="/img/k6.jpeg" alt="" />
              <img className="kids-im2" src="/img/k7.jpeg" alt="" />
              <img className="kids-im2" src="/img/k8.jpeg" alt="" />

            </div>
          </div>


          <div className="carousel-item">
            <div className="kids-row1">

              <img className="kids-im2" src="/img/k9.jpeg" alt="" />
              <img className="kids-im2" src="/img/k10.jpeg" alt="" />
              <img className="kids-im2" src="/img/l1.jpeg" alt="" />
              <img className="kids-im2" src="/img/l2.jpeg" alt="" />
              <img className="kids-im2" src="/img/l3.jpeg" alt="" />

            </div>
          </div>

        </div>


        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#kidsCarousel2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>


        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#kidsCarousel2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= TOP 10 ================= */}

      <div className="kids-heading">
        <h4>Top 10 Kids Movies</h4>
      </div>

      <div className="kids-another">

        <div className="kids-rank-card">
          <span className="kids-rank-number">1</span>
          <img className="kids-i" src="/img/v1.jpeg" alt="" />
        </div>

        <div className="kids-rank-card">
          <span className="kids-rank-number">2</span>
          <img className="kids-i" src="/img/v2.jpeg" alt="" />
        </div>

        <div className="kids-rank-card">
          <span className="kids-rank-number">3</span>
          <img className="kids-i" src="/img/v3.jpeg" alt="" />
        </div>

        <div className="kids-rank-card">
          <span className="kids-rank-number">4</span>
          <img className="kids-i" src="/img/v5.jpeg" alt="" />
        </div>

        <div className="kids-rank-card">
          <span className="kids-rank-number">5</span>
          <img className="kids-i" src="/img/v6.jpeg" alt="" />
        </div>

      </div>


      {/* ================= CAROUSEL 3 ================= */}

      <div className="kids-heading">
        <h4>Adventure Kids Movies</h4>
      </div>

      <div id="kidsCarousel3" className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="kids-row2">

              <img className="kids-im2" src="/img/l4.jpeg" alt="" />
              <img className="kids-im2" src="/img/l5.jpeg" alt="" />
              <img className="kids-im2" src="/img/l6.jpeg" alt="" />
              <img className="kids-im2" src="/img/l7.jpeg" alt="" />
              <img className="kids-im2" src="/img/l8.jpeg" alt="" />

            </div>
          </div>


          <div className="carousel-item">
            <div className="kids-row2">

              <img className="kids-im2" src="/img/l9.jpeg" alt="" />
              <img className="kids-im2" src="/img/l10.jpeg" alt="" />
              <img className="kids-im2" src="/img/s1.jpeg" alt="" />
              <img className="kids-im2" src="/img/s2.jpeg" alt="" />
              <img className="kids-im2" src="/img/s3.jpeg" alt="" />

            </div>
          </div>

        </div>


        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#kidsCarousel3"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>


        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#kidsCarousel3"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


      {/* ================= NORMAL ROW 1 ================= */}

      <div className="kids-heading">
        <h4>Funny Kids Movies</h4>
      </div>

      <div className="kids-row">

        <img className="kids-im" src="/img/v1.jpeg" alt="" />
        <img className="kids-im" src="/img/v2.jpeg" alt="" />
        <img className="kids-im" src="/img/v3.jpeg" alt="" />
        <img className="kids-im" src="/img/v4.jpeg" alt="" />
        <img className="kids-im" src="/img/v5.jpeg" alt="" />

      </div>


      {/* ================= NORMAL ROW 2 ================= */}

      <div className="kids-heading">
        <h4>Cartoon Characters</h4>
      </div>

     <div className="kids-row cartoon-row">
  <img className="kids-img" src="/img/v6.jpeg" alt="" />
  <img className="kids-img" src="/img/v7.jpeg" alt="" />
  <img className="kids-img" src="/img/v8.jpeg" alt="" />
  <img className="kids-img" src="/img/v9.jpeg" alt="" />
  <img className="kids-img" src="/img/v10.jpeg" alt="" />
  <img className="kids-img" src="/img/t2.jpeg" alt="" />
  <img className="kids-img" src="/img/t4.jpeg" alt="" />
   </div>


      {/* ================= NORMAL ROW 3 ================= */}

      <div className="kids-heading">
        <h4>Comedy Kids Movies</h4>
      </div>

      <div className="kids-row">

        <img className="kids-im" src="/img/t1.jpeg" alt="" />
        <img className="kids-im" src="/img/t2.jpeg" alt="" />
        <img className="kids-im" src="/img/t3.jpeg" alt="" />
        <img className="kids-im" src="/img/t4.jpeg" alt="" />
        <img className="kids-im" src="/img/t5.jpeg" alt="" />

      </div>


      {/* ================= NORMAL ROW 4 ================= */}

      <div className="kids-heading">
        <h4>Family Kids Movies</h4>
      </div>

      <div className="kids-row">

        <img className="kids-im" src="/img/w1.jpeg" alt="" />
        <img className="kids-im" src="/img/w2.jpeg" alt="" />
        <img className="kids-im" src="/img/w3.jpeg" alt="" />
        <img className="kids-im" src="/img/w4.jpeg" alt="" />
        <img className="kids-im" src="/img/w5.jpeg" alt="" />

      </div>


      {/* ================= NORMAL ROW 5 ================= */}

      <div className="kids-heading">
        <h4>Magical Kids Movies</h4>
      </div>

      <div className="kids-row">

        <img className="kids-im" src="/img/t6.jpeg"alt="" />
        <img className="kids-im" src="/img/t7.jpeg" alt="" />
        <img className="kids-im" src="/img/t8.jpeg" alt="" />
        <img className="kids-im" src="/img/t9.jpeg" alt="" />
        <img className="kids-im" src="/img/t10.jpeg" alt="" />

      </div>


      {/* ================= NORMAL ROW 6 ================= */}

      <div className="kids-heading">
        <h4>Animal Kids Movies</h4>
      </div>

      <div className="kids-row">

        <img className="kids-im" src="/img/l1.jpeg" alt="" />
        <img className="kids-im" src="/img/l2.jpeg" alt="" />
        <img className="kids-im" src="/img/l3.jpeg" alt="" />
        <img className="kids-im" src="/img/l4.jpeg" alt="" />
        <img className="kids-im" src="/img/l5.jpeg" alt="" />

      </div>


      {/* ================= NORMAL ROW 7 ================= */}

      <div className="kids-heading">
        <h4>Best Kids Movies</h4>
      </div>

      <div className="kids-row">

        <img className="kids-im" src="/img/l6.jpeg" alt="" />
        <img className="kids-im" src="/img/l7.jpeg" alt="" />
        <img className="kids-im" src="/img/l8.jpeg" alt="" />
        <img className="kids-im" src="/img/l9.jpeg" alt="" />
        <img className="kids-im" src="/img/l10.jpeg" alt="" />

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

export default Kids;


