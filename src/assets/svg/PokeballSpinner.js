import * as React from "react";
import { styled } from '@mui/system';

const Spinner = styled("div")`
  animation-name: spin;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const PokeballSpinner = (props) => (
  <Spinner>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Pok\xE9ball1"
    x={0}
    y={0}
    viewBox="0 0 595.3 594.1"
    width="150"
    height="150"
    style={{
      enableBackground: "new 0 0 595.3 594.1",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{".st0{fill:#fff}"}</style>
    <g id="Pok\xE9ball_1_1">
      <g id="Colours1">
        <path
          id="Down1"
          className="st0"
          d="M297.6 380.9c-40.4 0-74.1-28.6-82.1-66.6H81.1c9.5 110.5 102.2 197.2 215.1 197.2s205.7-86.7 215.1-197.2H379.7c-8 38.1-41.7 66.6-82.1 66.6z"
        />
        <path
          id="Shadow_Down1"
          d="M345.6 505.9c89.6-21 157.7-97.7 165.7-191.6h-53c-5.3 85.2-50 157.4-112.7 191.6z"
          style={{
            fill: "#fff",
          }}
        />
        <path
          id="Center1"
          className="st0"
          d="M347.1 297c-.1 0-.1 0 0 0-.1-6.1-1.2-11.9-3.2-17.3-7-18.8-25.1-32.1-46.3-32.1s-39.3 13.4-46.3 32.1c-2 5.4-3.1 11.2-3.1 17.3h.1c0 6.1 1.1 11.9 3.1 17.3 7 18.8 25.1 32.1 46.3 32.1 21.2 0 39.3-13.4 46.3-32.1 2-5.3 3.1-11.2 3.1-17.3z"
        />
        <path
          id="Up1"
          d="M297.7 213.2c40.4 0 74.1 28.6 82.1 66.6h134.4C504.7 169.2 412 82.5 299 82.5S93.4 169.2 83.9 279.7h131.7c8-38 41.7-66.5 82.1-66.5z"
          style={{
            fill: "#fff",
          }}
        />
        <path
          id="Shadow_Up1"
          d="M458.3 279.7h55.8c-8.2-95.5-78.6-173.3-170.5-192.6 63.8 33.7 109.3 106.6 114.7 192.6z"
          style={{
            fill: "#fff",
          }}
        />
      </g>
      <path
        id="Line1"
        fill="rgba(0, 0, 0, 0)"
        d="M299 82.5c113 0 205.7 86.7 215.1 197.2H379.7c-8-38-41.7-66.6-82.1-66.6-40.4 0-74.1 28.6-82.1 66.6H83.9C93.4 169.2 186.1 82.5 299 82.5zm44.9 197.2c2 5.4 3.1 11.2 3.1 17.3h.1c0 6.1-1.1 11.9-3.1 17.3-7 18.8-25.1 32.1-46.3 32.1-21.2 0-39.3-13.4-46.3-32.1-2-5.4-3.1-11.2-3.1-17.3h-.1c0-6.1 1.1-11.9 3.1-17.3 7-18.8 25.1-32.1 46.3-32.1s39.3 13.4 46.3 32.1zm-47.7 231.9c-113 0-205.7-86.7-215.1-197.2h134.4c8 38 41.7 66.6 82.1 66.6s74.1-28.6 82.1-66.6h131.7c-9.5 110.4-102.2 197.2-215.2 197.2zm1.4-470.3C156.4 41.3 41.9 155.8 41.9 297s114.5 255.7 255.7 255.7S553.4 438.3 553.4 297 438.9 41.3 297.6 41.3z"
      />
    </g>
  </svg>
  </Spinner>
)

export default PokeballSpinner
