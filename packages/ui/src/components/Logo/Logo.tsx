import React from "react"
import css from "styled-jsx/css"
import { foo } from "services/foo"

// language=scss
const style = css`
  @import "mixins";

  .logo {}
`

const Image = () => (
  <svg width="107" height="24" viewBox="0 0 107 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M18.1372 13.6094C16.7121 15.9715 15.0976 17.734 13.4643 18.9738C9.21976 22.2577 5.28718 22.5561 4.03155 21.0835C2.83475 19.6916 3.01692 16.9859 4.27955 13.9958C5.85767 14.328 7.89676 14.259 10.5286 13.5639C14.3226 12.5265 17.5855 9.16559 18.7126 5.51889C19.5912 2.73453 16.9688 1.36333 14.6474 1.35925C10.5353 1.33313 5.95545 5.39968 3.6712 8.75499C3.21915 9.40385 2.77205 10.1903 2.35486 11.0308C0.622562 8.74799 3.16334 4.75042 5.22179 2.89025C6.08788 2.08964 2.75693 2.00955 1.01647 4.93326C-0.355735 7.21095 -0.509155 10.7145 1.65917 12.6796C0.615044 15.5246 0.19734 18.679 1.55065 20.5339C6.84524 27.7647 15.1245 22.3609 18.4907 16.4347C19.5955 14.4966 18.717 12.6257 18.1372 13.6094ZM10.5004 5.7968C12.1846 4.41758 16.7433 1.31587 16.5871 3.9656C16.4479 6.31174 14.0791 8.87107 12.1723 10.2854C10.1848 11.785 7.31449 12.8463 5.00813 12.4836C6.26563 10.1272 8.13765 7.74991 10.5004 5.7968Z" fill="#3A3669" />
      <path d="M26.3844 0.406472C24.5808 2.34042 18.2303 13.1042 17.0599 15.54C16.5151 16.7153 16.6494 18.1154 17.1069 19.1741C17.2614 19.582 17.4997 19.987 17.9045 20.3589C19.496 21.8475 22.3645 20.7589 24.8239 16.8472C25.8026 15.2992 24.4425 14.0232 24.1253 14.5297C22.7465 16.6145 19.6409 20.4379 18.5949 19.3441C17.6936 18.383 19.9214 15.03 20.5559 14.017C20.5818 13.9611 20.9021 13.5371 21.3021 13.0002C24.678 8.91983 27.8327 4.13081 28.1959 3.34732C28.5342 2.64731 28.6142 1.76322 28.0568 1.03843C27.4107 0.178937 26.6797 0.0659659 26.3844 0.406472Z" fill="#3A3669" />
      <path d="M33.0446 0.177651C31.241 2.1116 24.8905 12.8754 23.7201 15.3112C23.1753 16.4864 23.3096 17.8866 23.7672 18.9452C23.9217 19.3532 24.1599 19.7582 24.5648 20.1301C26.1562 21.6186 29.0248 20.53 31.4841 16.6184C32.4628 15.0704 31.1027 13.7944 30.7855 14.3009C29.4067 16.3857 26.3011 20.2091 25.2551 19.1152C24.3538 18.1542 26.5816 14.8012 27.2161 13.7882C27.2421 13.7322 27.5623 13.3083 27.9624 12.7714C31.3383 8.69101 34.4929 3.90199 34.8561 3.1185C35.1944 2.41849 35.2744 1.5344 34.717 0.809614C34.0709 -0.0498839 33.3399 -0.162855 33.0446 0.177651Z" fill="#3A3669" />
      <path d="M35.9113 11.1217C36.1986 10.5611 34.7898 8.70838 34.2261 9.36094C34.1204 9.52978 32.9651 10.8359 31.9584 12.3848C30.2893 14.9477 28.4735 17.3227 31.7323 20.0769C32.9718 21.1091 35.7097 20.2728 38.1681 16.3336C39.1469 14.7856 37.7878 13.5371 37.4695 14.0161C36.0907 16.1009 33.0529 19.4814 32.2193 18.8485C31.6718 18.3988 32.6218 16.0531 33.7093 14.4188C34.2671 13.6012 35.4393 11.9915 35.9113 11.1217ZM38.88 4.27325C38.1669 3.88424 37.1725 4.22086 36.6726 5.09161C36.1438 5.93579 36.2653 6.97832 36.9783 7.36733C37.6644 7.78479 38.6588 7.44816 39.1866 6.57646C39.7154 5.73228 39.5661 4.69071 38.88 4.27325Z" fill="#3A3669" />
      <path d="M49.2373 13.4197C47.8669 15.7527 46.7193 16.5079 46.1247 16.3076C45.9261 16.2317 45.7766 15.9612 45.6539 15.6623C45.8366 15.298 45.9643 14.963 46.0662 14.6841C46.9389 11.7342 46.8534 10.1392 43.8037 8.56181C42.7492 8.01894 41.8023 8.13363 40.5568 9.2778C39.3393 10.421 36.8173 13.3992 36.6409 17.0418C36.5676 18.8901 38.0432 19.4739 38.531 19.8155C39.0198 20.1847 40.5911 21.0958 42.6907 19.5921C43.3732 19.1282 44.0968 18.2496 44.7076 17.3474C46.5431 19.3791 49.0129 17.2843 49.9651 15.7644C50.9942 14.049 49.4469 13.0269 49.2373 13.4197ZM39.3035 18.7424C38.6151 18.2698 39.2763 15.6577 40.3572 13.8304C41.1468 12.4537 41.9532 11.5448 42.6318 10.9708C42.4768 12.1056 42.8936 13.5792 43.3244 14.6667C43.1926 14.8915 43.0878 15.0879 42.982 15.2568C42.1096 16.6639 40.0786 19.2948 39.3035 18.7424Z" fill="#3A3669" />
      <path d="M56.2413 6.70582C55.605 6.12136 54.4111 5.58332 53.9571 6.17713C52.6998 7.7622 48.8937 14.6671 46.2776 17.3449C45.8465 17.8002 47.5004 17.9095 47.8885 17.8137C47.9483 17.9219 47.9503 17.9769 48.068 18.1382C49.3394 20.0509 51.7991 20.794 53.8911 19.8693C55.4325 19.1836 54.9711 17.2435 55.0392 16.0292C55.1585 13.1329 54.4418 11.0913 56.6819 8.06817C57.0291 7.61569 56.7031 7.10337 56.2413 6.70582ZM51.0544 18.7533C50.1586 18.7285 49.7519 17.5303 49.4419 16.6869C50.4636 15.5505 51.5602 14.1637 52.7356 12.6365C52.6976 13.1336 52.6885 13.6572 52.6515 14.1819C52.5632 16.3885 52.3711 18.8189 51.0544 18.7533Z" fill="#3A3669" />
      <path d="M62.6561 7.06051C60.1388 7.8344 56.8004 12.9887 56.9055 15.9052C56.964 17.5285 57.6024 18.1681 58.7166 18.8191C62.205 20.9324 66.8489 17.8552 68.5635 14.9873C69.6195 13.2435 68.1282 12.2196 67.8637 12.6418C65.0573 17.0343 61.149 18.7919 59.6617 17.878C59.118 17.5383 59.0454 16.3011 59.4208 15.0763C59.9116 15.5004 60.7445 16.1059 61.4659 15.9437C63.4344 15.4639 65.1897 13.724 66.0802 11.2697C66.7141 9.4576 66.6035 8.71755 64.398 7.27704C63.7955 6.85666 63.0991 6.93533 62.6561 7.06051ZM60.892 12.437C62.4838 10.0415 63.9517 8.86238 64.21 9.04648C64.4395 9.204 63.9074 10.7372 62.596 12.3793C61.6061 13.6249 60.4685 14.6552 60.0416 14.4492C59.7852 14.3202 60.2014 13.4521 60.892 12.437Z" fill="#3A3669" />
      <path d="M78.3038 9.19697C78.6723 7.77939 77.2845 7.30288 76.9193 7.26014C75.9654 7.18221 75.1937 9.05424 74.7303 10.9434C72.5703 14.6532 69.8505 18.3545 68.6694 17.4026C68.1217 16.9528 69.1928 14.8502 70.3087 13.2145L73.0714 9.15362C73.4098 8.45339 71.9485 6.71203 71.1161 7.67694C70.688 8.2149 70.0163 8.9815 68.6129 11.178C66.6267 14.2758 66.1013 16.7732 67.6934 18.2622C70.2711 20.7096 72.802 17.9791 74.6974 15.4629C76.5327 18.2661 79.2241 16.1087 80.2283 14.4768C81.2853 12.7604 79.8178 11.6253 79.5803 12.0191C78.2098 14.3522 77.0901 15.1064 76.4676 14.9071C76.1563 14.8074 75.9967 14.2618 75.8951 13.7693C77.2186 11.6857 78.2049 9.55848 78.3038 9.19697Z" fill="#3A3669" />
      <path d="M84.1654 6.32153C81.6481 7.09542 78.3097 12.2497 78.4148 15.1662C78.4733 16.7896 79.1117 17.4291 80.2259 18.0801C83.7143 20.1934 88.3582 17.1162 90.0728 14.2483C91.1288 12.5046 89.6375 11.4807 89.373 11.9028C86.5666 16.2953 82.6583 18.0529 81.171 17.139C80.6273 16.7993 80.5547 15.5621 80.9301 14.3373C81.4209 14.7615 82.2538 15.3669 82.9752 15.2047C84.9437 14.7249 86.699 12.9851 87.5895 10.5307C88.2234 8.71862 88.1128 7.97856 85.9073 6.53806C85.3048 6.11768 84.6084 6.19635 84.1654 6.32153ZM82.4013 11.698C83.9931 9.30255 85.461 8.1234 85.7193 8.30749C85.9488 8.46502 85.4167 9.99817 84.1053 11.6403C83.1154 12.8859 81.9778 13.9162 81.5508 13.7102C81.2945 13.5812 81.7107 12.7131 82.4013 11.698Z" fill="#3A3669" />
      <path d="M86.4441 17.0664C86.0538 17.8787 88.16 18.882 88.649 18.4797C89.8965 17.3904 92.5453 14.821 94.8628 12.373C94.784 12.5134 94.7051 12.6539 94.6263 12.7943C94.0782 13.8874 93.5809 15.6125 93.896 16.5938C94.8014 19.2083 98.7757 19.2666 102.084 14.0298C102.982 12.5666 101.727 11.1212 101.357 11.7124C98.9722 15.4025 96.131 17.2896 95.8137 17.0248C95.5254 16.7866 95.8618 16.0313 96.2232 15.1925C97.1297 13.178 99.4674 9.73736 100.769 7.81969C101.487 6.77594 99.0702 5.70049 98.5621 6.35141C96.7077 8.4531 93.6107 11.7816 90.8581 14.575C91.9361 12.6649 93.3007 10.1665 93.9496 8.76687C94.5995 7.39477 92.7798 5.80314 92.2768 6.59166C91.6679 7.54907 87.0171 15.8898 86.4441 17.0664Z" fill="#3A3669" />
      <path d="M105.589 14.5369C104.817 14.0672 103.741 14.4617 103.16 15.418C102.578 16.3468 102.731 17.4986 103.502 17.9408C104.274 18.383 105.378 17.9875 105.932 17.0597C106.513 16.1034 106.36 14.9791 105.589 14.5369Z" fill="#3A3669" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="107" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Logo: React.FunctionComponent = () => {
  foo()
  return (
    <div className="logo">
      <Image />
      <style jsx>{ style }</style>
    </div>
  )
}
