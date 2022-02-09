import * as React from "react"

const TipoSiniestro = (props) => (
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
        fill: "#5b5466",
      }}
    />
    <path
      d="M107.525 189.876c3.54.472 7.168.718 10.861.718 39.32 0 71.194-27.794 71.194-62.077 0-34.285-31.875-62.077-71.194-62.077a82.65 82.65 0 0 0-7.805.369c19.504 12.884 32.401 35.204 32.401 60.579-.002 26.678-14.254 49.977-35.457 62.488zm20.075 15.087c42.727 0 77.363-34.636 77.363-77.363S170.327 50.237 127.6 50.237 50.237 84.873 50.237 127.6s34.636 77.363 77.363 77.363z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
  </svg>
)

export default TipoSiniestro
