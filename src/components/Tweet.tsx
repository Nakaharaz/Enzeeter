import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from 'react-router-dom';
import "./Tweet.css";

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/Status" className="tweet">
      <img src="https://github.com/nakaharaz.png" alt="Enzo Nakahara" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Nakahara, 7!</strong>
          <span>@Nakaharazzz</span>
        </div>
        
        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />7
          </button>

          <button type="button">
            <ArrowsClockwise />7
          </button>

          <button type="button">
            <Heart />7
          </button>
        </div>
      </div>
    </Link>
  );
}
