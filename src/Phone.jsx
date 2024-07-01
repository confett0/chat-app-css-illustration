export default function Phone() {
  return (
    <div className="phone">
      <div className="phone-header">
        <svg
          height="0.7rem"
          width="0.7rem"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 309.143 309.143"
          xmlSpace="preserve"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              style={{ fill: "#fff" }}
              d="M112.855,154.571L240.481,26.946c2.929-2.929,2.929-7.678,0-10.606L226.339,2.197 C224.933,0.79,223.025,0,221.036,0c-1.989,0-3.897,0.79-5.303,2.197L68.661,149.268c-2.929,2.929-2.929,7.678,0,10.606 l147.071,147.071c1.406,1.407,3.314,2.197,5.303,2.197c1.989,0,3.897-0.79,5.303-2.197l14.142-14.143 c2.929-2.929,2.929-7.678,0-10.606L112.855,154.571z"
            />{" "}
          </g>
        </svg>

        <img className="avatar" src="./avatar.jpg" />
        <div>
          <h3>Samuel Green</h3>
          <p>Available to Walk</p>
        </div>
        <svg
          width="1rem"
          height="1rem"
          viewBox="0 0 24 24"
          id="three-dots"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g
              id="_20x20_three-dots--grey"
              data-name="20x20/three-dots--grey"
              transform="translate(24) rotate(90)"
            >
              {" "}
              <circle
                id="Oval"
                cx={1}
                cy={1}
                r={1}
                transform="translate(5 11)"
                stroke="#ffffff"
                strokeMiterlimit={10}
                strokeWidth="0.5"
              />{" "}
              <circle
                id="Oval-2"
                data-name="Oval"
                cx={1}
                cy={1}
                r={1}
                transform="translate(11 11)"
                stroke="#ffffff"
                strokeMiterlimit={10}
                strokeWidth="0.5"
              />{" "}
              <circle
                id="Oval-3"
                data-name="Oval"
                cx={1}
                cy={1}
                r={1}
                transform="translate(17 11)"
                stroke="#ffffff"
                strokeMiterlimit={10}
                strokeWidth="0.5"
              />{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}
