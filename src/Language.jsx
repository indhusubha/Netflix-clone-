import React from "react";

function Language() {
  return (
    <div id="language-main">

      <div className="language-title">
        <h4>Browse by Language</h4>

        <div className="language-options">
          <h4>Select Your Preference</h4>
          <select className="language-select-one">
            <option selected>Original Language</option>
            <option>Dubbing</option>
            <option>Subtitles</option>
            
          </select>

          <select className="language-select-two">
            <option selected>English</option>
            <option>Indosia</option>
            <option>Malay</option>
            <option>Turkish</option>
            <option>English</option>
            <option>Japanese</option>
            <option>Spanish</option>
            <option>Hindi</option>
            <option>Korean</option>
            <option>German</option>
            <option>Italin</option>
            <option>Cantonese</option>
            <option>Dutch</option>
            <option>Swedish</option>
            <option>Portuguese</option>
            <option>Filipino</option>
            <option>Polish</option>
          </select>
        </div>
      </div>

      <div className="language-pic">
        <img className="language-img" src="/img/a1.jpeg" alt="" />
        <img className="language-img" src="/img/a4.jpeg" alt="" />
        <img className="language-img" src="/img/a5.jpeg" alt="" />
        <img className="language-img" src="/img/a7.jpeg" alt="" />
      </div>

      <div className="language-pic">
        <img className="language-img" src="/img/a9.jpeg" alt="" />
        <img className="language-img" src="/img/a8.jpeg" alt="" />
        <img className="language-img" src="/img/d9.jpeg" alt="" />
        <img className="language-img" src="/img/d8.jpeg" alt="" />
      </div>

    </div>
  );
}

export default Language;