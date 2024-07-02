export default function AppBody() {
  return (
    <div className="app-body">
      <div className="chat left">
        That sounds great. I’d be happy with that.
      </div>
      <div className="chat left">
        Could you send over some pictures of your dog, please?
      </div>
      <div className="image-group">
        <img className="chat-image" src="./dog-image-1.jpg" />
        <img className="chat-image" src="./dog-image-2.jpg" />
        <img className="chat-image" src="./dog-image-3.jpg" />
      </div>
      <div className="chat right">
        Here are a few pictures. She’s a happy girl!
      </div>
      <div className="chat right">Can you make it?</div>
      <div className="chat left">
        She looks so happy! The time we discussed works. How long shall I take
        her out for?
      </div>
      <div className="chat left option">
        <input type="radio" />
        30 minute walk<span className="price">$29</span>
      </div>
      <div className="chat left option">
        <input type="radio" />
        60 minute walk<span className="price">$49</span>
      </div>
      <div className="input">
        <p>Type a message…</p>
        <>
          <svg
            height="1.5rem"
            width="1.5rem"
            version="1.1"
            id="right-arrow"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-108.2 -108.2 525.54 525.54"
            xmlSpace="preserve"
            fill="#ffffff"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
            stroke="#ffffff"
            strokeWidth="4.018859"
          >
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth={0}
              transform="translate(0,0), scale(1)"
            >
              <rect
                x="-108.2"
                y="-108.2"
                width="525.54"
                height="525.54"
                rx="262.77"
                fill="hsl(271, 36%, 24%)"
                strokeWidth={0}
              />
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                style={{ fill: "#ffffff" }}
                d="M112.855,154.571L240.481,26.946c2.929-2.929,2.929-7.678,0-10.606L226.339,2.197 C224.933,0.79,223.025,0,221.036,0c-1.989,0-3.897,0.79-5.303,2.197L68.661,149.268c-2.929,2.929-2.929,7.678,0,10.606 l147.071,147.071c1.406,1.407,3.314,2.197,5.303,2.197c1.989,0,3.897-0.79,5.303-2.197l14.142-14.143 c2.929-2.929,2.929-7.678,0-10.606L112.855,154.571z"
              />{" "}
            </g>
          </svg>
        </>
      </div>
    </div>
  );
}
