[@bs.val] external requireAssetURI : string => string = "require";

let fbIcon = requireAssetURI("./rsc/fb_icon.svg");
let instaIcon = requireAssetURI("./rsc/instagram.svg");

[@react.component]
let make = () => {
    <div className="social">
      <a href=("https://www.facebook.com/JulienCorderochRestaurantLouise/") target="_blank" className="fb-link">
        <div className="fb-icon-container">
          <img alt="fb" className="fb-icon" src=fbIcon />
        </div>
      </a>
        <a href=("https://www.instagram.com/restaurant_louise/") target="_blank" className="insta-link">
        <div className="fb-icon-container">
          <img alt="insta" className="insta-icon" src=instaIcon />
        </div>
      </a>
    </div>
};
