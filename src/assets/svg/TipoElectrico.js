import * as React from "react"

const TipoElectrico = (props) => (
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
        fill: "#fbd100",
      }}
    />
    <path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
      d="m180.975 138.406-27.126-83.787H95.401l15.737 47.115H66.225l88.407 104.847-17.289-68.175z"
    />
  </svg>
)

export default TipoElectrico
