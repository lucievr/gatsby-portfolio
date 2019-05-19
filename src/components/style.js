import { css } from "@emotion/core"

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

  body {
    margin: 0;
    text-align: center;
    font-size: calc(11px + 0.5vw);
    line-height: 1.5;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    color: white;
    background-color: #112f41;
  }

  /* common styles */

  section {
    padding: 5px;
    padding-top: calc(25px + 1.5vw);
    padding-bottom: calc(35px + 1.5vw);
    width: 100%;
  }

  .section--dark {
    background-color: #112f41;
  }

  .section--light {
    /* background-color: #113541; */
    background-image: url("/background.svg");
  }

  h2 {
    color: white;
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
    font-size: calc(18px + 2.5vw);
    font-weight: 700;
    font-family: "Playfair Display", serif;
    padding-top: calc(60px + 3vw);
  }

  .title__bottom {
    color: #4fb99f;
    font-size: calc(12px + 1.2vw);
    font-weight: 700;
    font-family: "Playfair Display", serif;
    letter-spacing: 1px;
    padding-top: 20px;
    padding-bottom: calc(60px + 3vw);
  }

  .title__name {
    color: #f2b134;
    font-weight: 900;
  }

  .title__dev {
    color: #ff7f50;
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
    width: calc(270px + 4vw);
    max-width: 90vw;
    margin: 20px auto;
    margin-top: calc(20px + 1vw);
    margin-bottom: calc(20px + 1vw);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.15);
    position: relative;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }

  .card__title {
    color: #ff7f50;
    font-weight: 500;
    font-size: calc(14px + 0.6vw);
    letter-spacing: 1px;
    margin: 16px;
    padding: 4px;
    padding-bottom: 12px;
    border-bottom: 3px dotted #4fb99f;
  }

  .card__body {
    padding-top: 0;
  }

  .card__link {
    color: #f2b134;
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
    margin: calc(15px + 1vw);
    width: calc(55px + 1.9vw);
  }

  img.icon--skill.hvr-grow.small {
    width: calc(60px + 2vw);
  }

  img.icon--skill.hvr-grow.big {
    width: calc(50px + 1.2vw);
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
    background-color: rgba(255, 255, 255, 0.1);
    font-weight: 500;
    color: #4fb99f;
    border: 2px solid #ff7f50;
    letter-spacing: 2px;
  }

  .btn--submit:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid #ff7f50;
  }

  footer {
    background-color: #112f41;
    padding-bottom: 20px;
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