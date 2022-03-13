import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
export default function SocialMedia() {
  // const [twitter, setTwitter] = useState("");
  const onTwitter = () => {
    window.open("https://twitter.com/ak47smoker");
  };
  const onInstagram = () => {
    window.open("https://www.instagram.com/ddc_smoker/");
  };
  const onFacebook = () => {
    window.open("https://web.facebook.com/muhammadshumail.tkd.3/");
  };
  return (
    <div className="app__social">
      <div>
        <BsTwitter onClick={onTwitter} />
      </div>
      <div>
        <FaFacebookF onClick={onFacebook} />
      </div>
      <div>
        <BsInstagram onClick={onInstagram} />
      </div>
    </div>
  );
}
