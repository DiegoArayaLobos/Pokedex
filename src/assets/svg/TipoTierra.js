import * as React from "react"

const TipoTierra = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 260 240"
    width={15}
    height={15}
    style={{
      enableBackground: "new 0 0 255.1 255.1",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <circle
      cx={127.6}
      cy={127.6}
      r={121.6}
      style={{
        fill: "#e87236",
      }}
    />
    <path
      d="M83.051 173.856a.062.062 0 0 1-.059-.083L123.28 70.938a.062.062 0 0 1 .059-.041h51.007c.026 0 .05.017.059.042l39.689 102.835a.062.062 0 0 1-.059.082H83.051zm-47.692.446a.062.062 0 0 1-.058-.084l31-80.093a.062.062 0 0 1 .058-.04h26.067c.043 0 .073.043.058.083l-30.009 80.093a.063.063 0 0 1-.058.041H35.359z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
  </svg>
)

export default TipoTierra
