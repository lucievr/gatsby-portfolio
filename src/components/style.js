import { css } from "@emotion/core"
import bgUrl from "@images/background.svg"
import bgLightUrl from "@images/background-light.svg"

const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  body.light-mode {
    margin: 0;
    text-align: center;
    font-size: calc(11px + 0.5vw);
    line-height: 1.5;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    color: white;
    background-color: #112f41;
    transition: background-color 0.6s ease;
  }

  body.dark-mode {
    margin: 0;
    text-align: center;
    font-size: calc(11px + 0.5vw);
    line-height: 1.5;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    background-color: #dee9ed;
    transition: background-color 0.6s ease;

    nav#navbar {
      background: rgb(73,73,171);
      background: linear-gradient(90deg, rgba(73,73,171,1) 0%, rgba(85,86,200,1) 50%, rgba(73,73,171,1) 100%);
      transition: background-color 0.6s ease;
    }

    ul.nav__wrapper li {
      a {
        color: white;
      :hover {
      color: #ff7f50;
    }
  }
      &.is-active {
    a {
      color: #ff7f50;
      }
      }
    }

    section.section--dark {
      background-color: #dee9ed;
      transition: background-color 0.6s ease;
    }

    section.section--light {
      background-image: url(${bgLightUrl});
      transition: background-image 0.6s ease;
    }

    h2 {
      color: #4d4d4d;
      transition: color 0.6s ease;
    }

    div.title__top {
      color: #4d4d4d;
      transition: color 0.6s ease;
    }

    .Typist .Cursor {
      color: #ff7f50;
    }

    div.title__bottom {
      color: rgba(80, 80, 242, 0.9);
      transition: color 0.6s ease;
    }

    span.title__name {
      color: #ff7f50;
      transition: color 0.6s ease;
    }

    span.title__dev {
      color: #4d4d4d;
      transition: color 0.6s ease;
    }

    hr {
      border-top: 2px dashed #ffa280;
      transition: border-top 0.6s ease;
    }

    .div--circle {
      background: rgb(73,73,171);
      background: radial-gradient(circle, rgba(73,73,171,1) 0%, rgba(85,86,200,1) 50%, rgba(73,73,171,1) 100%);
      border: 3px solid #ffa280;
      transition: all 0.6s ease;
    }

    .icon--contact {
      color: #ff7f50;
    }
    .icon--contact:hover {
      color: #666;
    }

    .btn--submit {
      background: rgba(85,86,200,1);
      background: linear-gradient(90deg, rgba(85,86,200,1) 0%, rgba(73,73,171,1) 50%, rgba(85,86,200,1) 100%);
      transition: all 0.6s ease;
      font-weight: 500;
      color: white;
    }

    .btn--submit:hover {
      font-weight: 500;
      background: #666;
    }

    footer {
      background-color: #dee9ed;
      transition: background-color 0.6s ease;
      padding-bottom: 20px;
  }
    
  .dark-mode-toggle > button {
    color: #a6a6a6;
    &:last-child {
      color: #ffe600;
    }
  }
}

.dark-mode-toggle {
  display: flex;
  margin: 0 auto;
  & > button {
    font-size: 1.2em;
    background: none;
    border: none;
    color: #262626;
    cursor: pointer;
    transition: color 0.5s ease;
    &:last-child {
      color: #a6a6a6;
    }

    &:focus {
      outline: none;
    }
  }
}

.toggle-control {
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
}

input[type='checkbox'].dmcheck {
  width: 40px;
  height: 10px;
  background: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;

  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px white;
  }

  & + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.5s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.8;
    background-color: rgba(255,255,255,0.9);
  }
}

  .nav__wrapper {
  list-style: none;
  margin: 0 20px 10px auto;
  padding: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    margin: 0 auto 10px auto;
  }
  }

  /* common styles */

  section {
    padding: 5px;
    padding-top: calc(25px + 1.5vw);
    padding-bottom: calc(35px + 1.5vw);
    width: 100%;
  }

  section.section--dark {
    background-color: #112f41;
    transition: background-color 0.6s ease;
  }

  section.section--light {
    background-image: url(${bgUrl});
    transition: background-image 0.6s ease;
  }

  h2 {
    color: white;
    transition: color 0.6s ease;
    font-size: calc(16px + 2vw);
    padding: 10px 10px 30px;
    font-family: "Playfair Display", serif;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .heading--teal {
    color: #4fb99f;
  }

  hr {
    margin: 0;
    border: 0;
    border-top: 2px dashed #f2b134;
  }

  .symbol--orange {
    color: #ff7f50;
  }

  /* home section */

  .title__top {
    color: white;
    transition: color 0.6s ease;
    font-size: calc(18px + 2.5vw);
    letter-spacing: 1px;
    font-weight: 700;
    font-family: "Playfair Display", serif;
    padding-top: calc(60px + 3vw);
  }

  .title__bottom {
    color: #4fb99f;
    transition: color 0.6s ease;
    font-size: calc(14px + 1.2vw);
    font-weight: 700;
    font-family: "Playfair Display", serif;
    letter-spacing: 1.5px;
    padding-top: 20px;
    padding-bottom: calc(60px + 3vw);
  }

  .title__name {
    color: #f2b134;
    transition: color 0.6s ease;
    font-weight: 700;
  }

  .title__dev {
    color: #ff7f50;
    transition: color 0.6s ease;
    font-weight: 700;
  }

  .Typist .Cursor {
    display: inline-block;
    color: #f2b134;
    font-size: calc(20px + 2.5vw);
  }
  .Typist .Cursor--blinking {
    opacity: 1;
    animation: blink 1s linear infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .div--laptop {
    width: calc(220px + 10vw);
    margin: 0 auto;
    padding-bottom: 20px;
  }

  /* about section  */

  .div--circle {
    width: calc(280px + 15vw);
    height: calc(280px + 15vw);
    min-width: 280px;
    min-weight: 280px;
    max-width: 90vw;
    max-weight: 90vw;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #068587;
    transition: background-color 0.6s ease;
    color: white;
    padding: 2px;
    border: 3px solid #f2b134;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }

  .img--avatar {
    width: calc(55px + 6vw);
    border-radius: 50%;
    margin: 0;
    padding-top: calc(5px + 1vw);
  }

  .par--top {
    font-size: calc(9px + 0.5vw);
    line-height: 1.7;
    margin: 0 auto;
    width: 80%;
    padding-top: calc(5px + 1.3vw);
  }

  .par--bottom {
    font-size: calc(9px + 0.5vw);
    line-height: 1.7;
    margin: 0 auto;
    width: 71%;
  }

  /* projects section */

  .card--main {
    width: calc(260px + 7vw);
    max-width: 90vw;
    margin: 20px auto;
    margin-top: calc(20px + 1vw);
    margin-bottom: calc(20px + 1vw);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    background-color: #1a5365;
    position: relative;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }

  .card__title {
    color: #f2b134;
    font-weight: 500;
    font-size: calc(13px + 0.5vw);
    font-family: "Montserrat", sans-serif;
    text-shadow: 1px 1px black;
    letter-spacing: 2px;
    margin: 16px;
    padding: 4px;
    padding-bottom: 12px;
    border-bottom: 3px dotted #4fb99f;
  }

  .card__body {
    padding-top: 0;
  }

  .card__subtitle {
    margin-top: 16px;
    font-size: calc(12px + 0.5vw);
    color: white;
    font-weight: 300;
    letter-spacing: 1.5px;
    text-shadow: 1.5px 1px black;
  }

  .card__link {
    color: #4fb99f;
    font-weight: 400;
  }

  .card__link:hover {
    color: #ff7f50;
  }

  /* skills section */

  .div--skills {
    max-width: 70vw;
    margin: 0 auto;
    padding-bottom: calc(20px + 1vw);
    line-height: 1.7;
  }

  img.icon--skill.hvr-grow {
    margin: calc(17px + 1.2vw);
    width: calc(50px + 1.7vw);
  }

  img.icon--skill.hvr-grow.small {
    width: calc(53px + 2vw);
  }

  img.icon--skill.hvr-grow.sem {
    width: calc(50px + 1.9vw);
  }

  img.icon--skill.hvr-grow.mid {
    width: calc(50px + 1.5vw);
  }

  img.icon--skill.hvr-grow.med {
    width: calc(50px + 1.2vw);
  }

  img.icon--skill.hvr-grow.big {
    width: calc(47px + 1vw);
  }

  .icon--circle {
    border-radius: 50%;
  }

  .icon--gatsby {
    border: 4px solid #663399;
    border-radius: 50%;
  }

  /* contact section */

  .icon--contact {
    font-size: calc(52px + 2.5vw);
    margin: 10px;
    color: #f2b134;
  }
  .icon--contact:hover {
    color: #ff7f50;
  }

  .form--main {
    padding: 20px;
    margin: 0 auto;
    max-width: 90vw;
    @media (min-width: 700px) {
      max-width: 70vw;
    }
    @media (min-width: 1000px) {
      max-width: 60vw;
    }
  }

  .form__control {
    margin-bottom: calc(10px + 0.5vw);
  }

  .form__control ::placeholder {
    font-size: calc(11px + 0.5vw);
  }

  .btn--submit {
    font-size: calc(13px + 0.6vw);
    background-color: rgba(242, 177, 52, 0.9);
    transition: all 0.6s ease;
    font-weight: 600;
    color: #112f41;
    border: 1px solid black;
    letter-spacing: 1px;
  }

  .btn--submit:hover {
    background-color: #ff7f50;
    font-weight: 600;
    color: white;
    border: 1px solid black;
  }

  footer {
    background-color: #112f41;
    transition: background-color 0.6s ease;
    padding-bottom: 20px;
  }

  ${"" /* success & 404 pages */}
  .div--img {
    width: calc(280px + 12vw);
    max-width: 95vw;
    margin: 0 auto;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .section-suc {
    background-color: #1a5365;
    min-height: 100vh;
  }

  .link--back {
    color: #ff7f50;
    font-size: calc(15px + 0.7vw);
    font-weight: 500;
  }

  .link--back:hover {
    color: #4fb99f;
    text-decoration: none;
  }

  /* hover.css styles */

  /* Bob */
  @-webkit-keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @-webkit-keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  .hvr-bob {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-bob:hover,
  .hvr-bob:focus,
  .hvr-bob:active {
    -webkit-animation-name: hvr-bob-float, hvr-bob;
    animation-name: hvr-bob-float, hvr-bob;
    -webkit-animation-duration: 0.3s, 1.5s;
    animation-duration: 0.3s, 1.5s;
    -webkit-animation-delay: 0s, 0.3s;
    animation-delay: 0s, 0.3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }

  /* Grow */
  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }

  /* Glow */
  .hvr-glow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
  }
  .hvr-glow:hover,
  .hvr-glow:focus,
  .hvr-glow:active {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  }
`

export default GlobalStyles
