/*
** T4TLogo.js
**
** T4TLogo.js is an SVG logo for the Trees4Tigers site, wrapped in
** a react component....
**
** Eric James Foster, Fostware LLC, MIT License.
***/

import React from 'react'

const styles = {
  position: 'fixed',
  top: '12%',
  right: 0,
  left: 0,
  margin: '0 auto',
  height: '35rem',
  width: '35rem',
  opacity: .3,
  backdropFilter: 'blur(10px)',
  zIndex: 1
}

const T4TLogo =()=>
  <div>
    <svg id="tigerLogo" style={styles} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0, 0, 400,419.44444444444446">
      <g id="g">
        <path id="path" d="M176.998 32.901 C 172.653 34.617,173.221 35.990,181.673 44.181 C 186.965 49.310,192.782 57.096,194.599 61.483 L 197.902 69.459 205.475 57.646 C 209.640 51.149,215.708 43.479,218.959 40.601 C 222.209 37.723,224.200 34.286,223.382 32.962 C 220.284 27.950,211.051 30.862,205.277 38.672 L 199.276 46.788 192.447 38.672 C 185.191 30.049,184.689 29.862,176.998 32.901 M144.856 41.354 C 141.853 43.257,142.177 44.500,146.475 47.561 C 159.760 57.023,189.054 105.231,195.480 128.206 C 197.047 133.808,198.334 132.200,204.656 116.744 C 215.349 90.599,228.376 69.766,242.843 55.672 C 257.219 41.667,258.267 38.889,249.175 38.889 C 239.133 38.889,220.176 60.643,204.747 89.873 L 197.630 103.356 191.491 91.261 C 172.717 54.278,154.770 35.071,144.856 41.354 M57.639 53.000 C 39.083 63.808,42.161 105.556,61.514 105.556 C 67.019 105.556,67.017 105.488,61.313 98.237 C 47.905 81.191,58.205 56.672,75.166 65.261 C 121.531 88.740,124.302 124.425,81.449 146.176 C 50.564 161.853,38.854 174.214,39.018 190.969 L 39.148 204.167 45.836 191.325 C 54.132 175.400,64.227 166.756,87.216 155.894 C 114.622 142.946,124.742 126.485,120.929 101.059 C 117.063 75.277,74.665 43.083,57.639 53.000 M261.212 63.045 C 224.677 104.551,211.338 166.111,227.323 219.444 C 237.172 252.305,237.239 255.642,228.013 253.797 C 223.170 252.828,216.048 254.129,209.700 257.141 C 200.608 261.456,198.231 261.601,190.629 258.311 C 185.852 256.244,177.257 254.526,171.528 254.495 C 159.137 254.426,158.809 252.683,166.422 227.376 C 178.698 186.576,180.004 170.689,173.579 140.357 C 164.278 96.447,127.940 42.430,115.841 54.529 C 114.878 55.492,120.186 63.119,127.636 71.479 C 143.783 89.595,156.576 114.482,162.363 139.036 C 169.105 167.637,167.879 181.788,154.227 232.974 C 146.532 261.824,153.723 278.376,179.983 292.260 C 201.000 303.371,191.108 318.056,162.605 318.056 C 115.399 318.056,113.871 289.697,155.673 189.453 C 164.950 167.205,137.960 145.560,119.540 160.475 C 109.218 168.834,125.463 196.859,136.629 189.958 C 143.003 186.019,140.456 199.049,128.966 229.167 C 104.659 292.879,107.200 310.632,143.038 327.478 C 149.923 330.714,155.556 334.509,155.556 335.912 C 155.556 341.679,171.459 356.759,182.860 361.802 C 205.580 371.852,232.806 362.728,245.734 340.730 C 249.565 334.212,256.290 327.519,261.149 325.390 C 288.893 313.233,291.034 285.650,268.574 229.751 L 253.183 191.447 261.119 189.859 C 276.633 186.757,286.424 169.758,277.715 161.048 C 269.542 152.875,256.711 153.973,247.009 163.675 C 235.899 174.784,236.370 177.971,256.944 230.969 C 275.900 279.797,276.812 283.746,272.037 296.347 C 262.561 321.358,226.609 329.771,209.586 310.960 C 202.972 303.652,205.990 298.382,222.229 288.885 C 246.339 274.784,250.523 257.475,238.807 220.296 C 222.040 167.089,233.791 110.373,269.728 71.052 C 282.958 56.576,285.061 50.000,276.461 50.000 C 274.389 50.000,267.527 55.870,261.212 63.045 M311.111 57.114 C 263.183 84.674,261.893 129.374,308.333 153.367 C 329.654 164.382,344.399 177.681,354.064 194.614 L 359.517 204.167 360.527 196.229 C 362.825 178.183,347.431 160.540,316.010 145.208 C 278.306 126.810,275.338 98.403,308.345 71.853 C 333.238 51.828,352.805 69.197,336.142 96.528 C 329.203 107.908,335.395 109.302,345.960 98.737 C 369.637 75.060,340.475 40.228,311.111 57.114 M312.500 83.911 C 299.092 91.600,295.271 111.526,305.440 120.729 C 309.664 124.551,351.155 144.444,354.904 144.444 C 363.057 144.444,343.932 127.011,329.929 121.678 C 308.921 113.677,304.903 103.177,317.883 90.198 C 328.010 80.071,325.107 76.680,312.500 83.911 M72.222 84.579 C 72.222 85.264,75.406 89.261,79.298 93.460 C 90.647 105.705,87.811 113.702,68.916 122.740 C 54.715 129.533,47.222 136.791,47.222 143.754 C 47.222 149.511,92.949 123.535,95.479 116.340 C 98.776 106.965,95.923 96.038,88.331 88.966 C 83.046 84.041,72.222 81.094,72.222 84.579 M143.104 171.279 C 147.377 175.551,147.380 176.080,143.153 178.445 C 137.880 181.396,123.769 173.683,126.464 169.322 C 129.041 165.153,138.036 166.210,143.104 171.279 M269.444 170.736 C 269.444 175.963,260.034 181.034,254.368 178.860 C 249.136 176.852,248.858 174.475,253.333 170.000 C 258.065 165.268,269.444 165.788,269.444 170.736 M301.852 174.074 C 297.744 178.181,300.564 182.968,311.583 190.594 C 325.808 200.440,340.464 222.731,345.569 242.287 C 349.497 257.333,350.961 256.470,353.958 237.337 C 356.624 220.324,310.997 164.929,301.852 174.074 M72.470 190.276 C 54.107 209.692,46.126 226.960,48.640 241.839 C 51.363 257.952,54.107 257.186,57.805 239.282 C 61.713 220.362,73.393 200.849,87.043 190.438 C 93.016 185.882,96.293 181.367,95.371 178.963 C 92.686 171.966,87.244 174.654,72.470 190.276 M86.834 221.549 C 70.630 245.325,63.718 271.044,69.890 284.592 C 74.802 295.371,77.771 293.086,77.844 278.472 C 77.920 263.194,87.176 238.850,98.608 223.863 C 105.147 215.289,105.851 213.000,102.582 210.932 C 96.681 207.197,96.559 207.279,86.834 221.549 M298.173 212.641 C 297.244 215.060,299.029 219.629,302.243 223.058 C 311.518 232.958,321.963 258.486,323.960 276.136 C 326.156 295.543,333.388 291.550,333.267 270.997 C 333.116 245.092,304.182 196.981,298.173 212.641 M184.559 268.144 C 191.584 273.458,200.319 273.305,212.153 267.661 C 222.977 262.500,233.211 264.287,228.100 270.445 C 222.402 277.310,197.381 291.394,195.704 288.680 C 194.795 287.209,187.890 282.883,180.359 279.067 C 172.828 275.251,166.667 271.108,166.667 269.861 C 166.667 262.990,176.497 262.047,184.559 268.144 M224.306 330.682 C 238.364 334.886,238.674 336.239,227.696 345.476 C 211.825 358.830,188.894 357.580,173.855 342.542 C 165.453 334.140,164.764 330.573,171.528 330.510 C 174.201 330.485,181.389 327.569,187.500 324.031 C 198.165 317.857,198.890 317.790,205.556 322.375 C 209.375 325.001,217.812 328.740,224.306 330.682 " stroke="none" fill="#ffffff" fillRule="evenodd">
        </path>
      </g>
    </svg>
  </div>


export default T4TLogo
