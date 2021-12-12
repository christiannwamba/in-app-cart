import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Cart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      d="M4.625 1 1 5.833V22.75a2.417 2.417 0 0 0 2.417 2.417h16.916a2.416 2.416 0 0 0 2.417-2.417V5.833L19.125 1h-14.5zM1 5.833h21.75m-6.042 4.834a4.833 4.833 0 1 1-9.666 0"
    />
  </Svg>
)

export default Cart
