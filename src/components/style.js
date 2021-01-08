import { css } from "@emotion/core"
import bgUrl from "@images/background.svg"
import bgLightUrl from "@images/background-light.svg"
import githubLogo from "@images/github-logo.png"

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

  html::-webkit-scrollbar {
    width: 22px;
  }

  html::-webkit-scrollbar-thumb {
    background: rgba(170, 170, 170, 0.5);
    background: linear-gradient(
      180deg,
      #ff7f50 10%,
      rgba(170, 170, 170, 0.5) 60%
    );
    border-radius: 30px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
    box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  html::-webkit-scrollbar-track {
    background: rgba(140, 140, 140, 0.08);
  }

  body.light-mode {
    margin: 0;
    text-align: center;
    font-size: calc(12px + 0.4vw);
    line-height: 1.5;
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    font-weight: 300;
    background-color: #eef4f6;
    color: #4d4d4d;
    transition: all 0.6s ease;
  }

  body.dark-mode {
    margin: 0;
    text-align: center;
    font-size: calc(12px + 0.4vw);
    line-height: 1.5;
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    font-weight: 300;
    color: #ddd;
    background-color: #121d21;
    transition: all 0.6s ease;

    nav#navbar {
      background: #18262b;
      transition: background 0.6s ease;
    }

    ul.nav__wrapper li {
      a {
        color: #ddd;
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

    div.menu--burger {
      color: #ddd;
    }

    section.section--plain {
      background-color: #121d21;
      transition: background-color 0.6s ease;
    }

    section.section--bgImage {
      background-image: url(${bgUrl});
      transition: background-image 0.6s ease;
    }

    h2 {
      color: #ddd;
      transition: color 0.6s ease;
    }

    div.title__top {
      color: #ddd;
      transition: color 0.6s ease;
      font-family: "Mellanie", Brush Script MT, Segoe Script, cursive;
    }

    span.title__dev {
      color: #ddd;
      transition: color 0.6s ease;
    }

    div.div--circle {
      background-color: #18262b;
      color: #fff;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 10px;
      transition: all 0.6s ease;
    }

    div.card--main {
      background-color: #18262b;
      color: #ddd;
      transition: all 0.6s ease;
    }

    .card-footer {
      background-color: #253a41;
      transition: background-color 0.6s ease;
    }

    p.text--tech {
      margin: 0;
    }

    a.card__link:hover {
      color: #ddd;
    }

    svg.icon--contact:hover {
      color: #253a41;
    }

    .user {
      background-color: #18262b;
      color: #ddd;
      transition: all 0.6s ease;
    }

    .user-avatar img {
      background-color: #253a41;
      border: 3px solid #253a41;
      transition: all 0.6s ease;
    }

    .user-data {
      background: #253a41 url(${githubLogo}) no-repeat 5px 5px;
      background-size: 25px;
      transition: background 0.6s ease;
    }

    .user-stats {
      border-top: 2px solid #253a41;
      transition: border-top 0.6s ease;
    }

    form.form--main {
      border: 7px solid #253a41;
      transition: border 0.6s ease;
    }

    .form__control, .field__text {
      background-color: #0e171a;
      border: 1px solid #000;
      color: #bbb;
      transition: all 0.6s ease;
      &:focus {
        box-shadow: 0 0 0 0.2rem #253a41;
      }
    }

    input::placeholder,
    textarea::placeholder {
      color: #777;
      opacity: 1;
      transition: color 0.6s ease;
    }

    label {
      color: #ddd;
      transition: color 0.6s ease;
    }

    button.btn--submit {
      color: #000;
      transition: color 0.6s ease;
    }

    button.btn--submit:hover,
    .btn-primary:not(:disabled):not(.disabled):active {
      background: #253a41;
      color: #fff;
      transition: all 0.3s ease;
    }

    footer {
      background-color: #121d21;
      color: #bbb;
      transition: all 0.6s ease;
    }

    .dark-mode-toggle > button {
      color: #555;
      &:last-child {
        color: #f2b134;
      }
    }

    .switch-label::after {
      background-color: #bbb;
    }
  }

  span.darkmode__wrapper {
    margin: 0.5rem auto 0.5rem 0.7rem;
  }

  .dark-mode-toggle {
    display: flex;
    margin: 0 auto;
    align-items: center;
    & > button {
      display: flex;
      font-size: 1.5rem;
      background: none;
      border: none;
      color: #f5dd00;
      cursor: pointer;
      transition: color 0.5s ease;
      &:last-child {
        color: #c2c2c2;
      }

      &:focus {
        outline: none;
      }
    }
  }

  svg.sun-icon {
    width: 22px;
    height: 22px;
  }

  svg.moon-icon {
    width: 18px;
    height: 18px;
  }

  .toggle-control {
    position: relative;
    display: inline-block;
    height: 16px;
  }

  .switch-input {
    display: none;
  }
  .switch-label {
    display: block;
    width: 40px;
    height: 16px;
    text-indent: -150%;
    clip: rect(0 0 0 0);
    color: transparent;
    user-select: none;
  }
  .switch-label::before,
  .switch-label::after {
    content: "";
    display: block;
    position: absolute;
    cursor: pointer;
  }
  .switch-label::before {
    width: 100%;
    height: 100%;
    background-color: #dedede;
    border-radius: 9999em;
    -webkit-transition: background-color 0.25s ease;
    transition: background-color 0.25s ease;
  }
  .switch-label::after {
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    -webkit-transition: left 0.25s ease;
    transition: left 0.25s ease;
  }
  .switch-input:checked + .switch-label::before {
    background-color: #253a41;
  }
  .switch-input:checked + .switch-label::after {
    left: 24px;
  }

  nav#navbar {
    padding: 0 1rem 0 0;
    background: #eef4f6;
    transition: background-color 0.6s ease;
    position: fixed;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    @media (max-width: 650px) {
      padding: 0;
    }
  }

  ul.nav__wrapper {
    list-style: none;
    margin: 0 20px 10px auto;
    padding: 0;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 650px) {
      display: none;
    }
  }

  ul.nav__wrapper.active {
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
  }

  ul.nav__wrapper li {
    margin: 0.35rem 0.75em;
    display: block;
    @media (max-width: 650px) {
      padding: 0.2rem 1.5rem;
      margin: 0;
    }
    a {
      text-decoration: none;
      color: #4d4d4d;
      font-weight: 400;
      padding: 2%;
      width: auto;
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

  div.menu--burger {
    display: none;
    margin: 0 0 0 auto;
    padding: 0.7rem 1.5rem 0.7rem 1.5rem;
    color: #555;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }

    @media (max-width: 650px) {
      display: block;
    }
  }

  a.navlink--home svg {
    font-size: 1.45rem;
    margin-bottom: 3px;
  }

  div.menu--burger svg {
    font-size: 1.85rem;
  }

  /* common styles */

  section {
    padding-top: calc(15px + 2vw);
    padding-bottom: calc(25px + 2vw);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.contact {
      padding-bottom: 0;
    }
  }

  section.section--plain {
    background-color: #eef4f6;
    transition: background-color 0.6s ease;
  }

  section.section--bgImage {
    background-image: url(${bgLightUrl});
    transition: background-image 0.6s ease;
  }

  h2 {
    color: #4d4d4d;
    transition: color 0.6s ease;
    font-size: calc(18px + 1.3vw);
    padding: 10px 10px 20px;
    font-family: "Cantata One", Palatino Linotype, Georgia, serif;
    @media (max-width: 850px) {
      padding: 10px;
    }
  }

  h5 {
    font-size: calc(15px + 0.7vw);
  }

  hr {
    margin: 0;
    border: 0;
    border-top: 2px dashed #4db6ac;
    transition: border-top 0.6s ease;
  }

  span.symbol--orange {
    color: #ff7f50;
  }

  /* home section */

  div.title__top {
    color: #4d4d4d;
    transition: color 0.6s ease;
    font-size: calc(18px + 4vw);
    letter-spacing: 1px;
    font-weight: 700;
    font-family: "Mellanie", Brush Script MT, Segoe Script, cursive;
    padding-top: calc(60px + 3vw);
  }

  div.title__bottom {
    color: #ff7f50;
    transition: color 0.6s ease;
    font-size: calc(15px + 3vw);
    font-weight: 700;
    font-family: "Mellanie", Brush Script MT, Segoe Script, cursive;
    letter-spacing: 1.5px;
    padding-top: 20px;
    padding-bottom: calc(50px + 2.5vw);
  }

  span.title__name {
    font-size: calc(19px + 4.8vw);
    color: #4db6ac;
    transition: color 0.6s ease;
  }

  span.title__dev {
    color: #4d4d4d;
    transition: color 0.6s ease;
  }

  div.Typist span.Cursor {
    display: inline-block;
    color: #ff7f50;
    transition: color 0.6s ease;
    font-size: calc(20px + 4.5vw);
  }
  div.Typist span.Cursor--blinking {
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

  div.div--laptop {
    width: calc(220px + 10vw);
    margin: 0 auto;
    padding-bottom: 20px;
  }

  /* about section  */

  div.div--circle {
    width: calc(280px + 15vw);
    height: calc(280px + 15vw);
    min-width: 280px;
    max-width: 100vw;
    margin: 0 auto;
    margin-top: 5px;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.6s ease;
    color: #000;
    font-weight: 300;
    padding: 2px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 50px;
  }

  img.img--avatar {
    width: calc(55px + 6vw);
    border-radius: 50%;
    margin: 0;
    margin-top: calc(5px + 1vw);
  }

  p.par--top {
    font-size: calc(10px + 0.4vw);
    line-height: 1.7;
    margin: 0 auto;
    width: 80%;
    padding-top: calc(5px + 1.3vw);
  }

  p.par--bottom {
    font-size: calc(10px + 0.4vw);
    line-height: 1.7;
    margin: 0 auto;
    width: 71%;
  }

  /* projects section */

  div.container--projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    @media (max-width: 1100px) {
      width: 100%;
    }
  }

  div.container__item {
    display: flex;
    flex-basis: 50%;
    justify-content: center;
  }

  div.card--main {
    width: calc(260px + 7vw);
    max-width: 90vw;
    margin: 20px;
    margin-top: calc(20px + 1vw);
    margin-bottom: calc(20px + 1vw);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    color: #4d4d4d;
    position: relative;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: 0.25rem;
    transition: all 0.6s ease;
  }

  div.card--main:hover {
    transform: scale(1.03);
  }

  div.card__title {
    border-bottom: 3px dotted #4db6ac;
    transition: color 0.6 ease;
    font-weight: 500;
    font-size: calc(13px + 0.5vw);
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    margin: 16px;
    padding: 4px;
    padding-bottom: 12px;
  }

  div.card__body {
    padding-top: 0;
  }

  div.img.flatsy {
    margin: 0.5rem 0 1.6rem 0;
  }

  p.card__subtitle {
    margin-top: 16px;
    font-size: calc(12px + 0.32vw);
  }

  p.wip {
    margin-bottom: 0;
    margin-left: 1rem;
  }

  .card-footer {
      background-color: rgba(0,0,0,0.03);
      transition: background-color 0.6s ease;
      display: flex;
      justify-content: center;
    }

  a.card__link {
    color: #4db6ac;
    font-weight: 400;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a.card__link:hover {
    color: #4d4d4d;
    text-decoration: none;
  }

  p.text--tech {
    margin: 0;
    font-weight: 400;
  }

  span.span--tech {
    color: #ff7f50;
    font-weight: 400;
  }

  /* skills section */

  section.skills .react-reveal {
    width: 100%;
  }

  div.div--skills {
    max-width: 70vw;
    margin: 0 auto;
    padding-bottom: calc(20px + 1vw);
    line-height: 1.7;
    @media (max-width: 650px) {
      max-width: 90vw;
    }
  }

  img.icon--skill.hvr-grow {
    margin: calc(17px + 1.2vw);
    width: calc(50px + 1.9vw);
  }

  img.icon--skill.hvr-grow.mid {
    width: calc(50px + 1.5vw);
  }

  img.icon--skill.hvr-grow.med {
    width: calc(50px + 1.2vw);
  }

  img.icon--skill.hvr-grow.big {
    width: calc(49px + 1vw);
  }

  /* contact section */

  svg.icon--contact {
    font-size: calc(52px + 2.5vw);
    color: #ff7f50;
    margin: 10px;
  }
  svg.icon--contact:hover {
    color: #666;
  }

  form.form--main {
    padding: calc(10px + 2vw);
    margin: 15px 10px 10px;
    max-width: 90vw;
    background-color: transparent;
    border: 7px solid rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    transition: all 0.6s ease;
    @media (min-width: 700px) {
      max-width: 70vw;
    }
    @media (min-width: 1000px) {
      max-width: 60vw;
    }
  }

  .form__container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .form__row {
    display: flex;
    justify-content: space-between;
    @media (max-width: 550px) {
      flex-direction: column;
    }
  }

  .form__input {
    display: flex;
    flex-direction: column;
    flex-basis: 48%;
  }

  .form__control, .field__text {
    font-size: calc(12px + 0.4vw);
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: all 0.6s ease;
    &:focus {
      border-color: #4db6ac;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0,0,0,0.05);
    }
  }

  textarea.field__text {
    height: auto;
  }

  input.form__control, textarea.field__text {
    margin-bottom: calc(10px + 0.5vw);
  }
  .error-message {
    margin-bottom: calc(10px + 0.5vw);
    color: #ff7f50;
  }

  input.form__control::placeholder,
  textarea.field__text::placeholder {
    font-size: calc(11px + 0.5vw);
  }

  button.btn--submit {
    font-size: calc(13px + 0.6vw);
    background: #4db6ac;
    font-weight: 500;
    color: #fff;
    transition: color 0.6s ease;
    border: none;
    letter-spacing: 1px;
  }

  button.btn--submit:hover,
  .btn-primary:not(:disabled):not(.disabled):active {
    background: rgba(0, 0, 0, 0.6);
    border: none;
    transition: background 0.3s ease;
  }

  :host {
    display: inline-block;
  }

  .user {
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    display: inline-block;
    width: 300px;
    height: 360px;
    overflow: hidden;
    border-radius: 6px;
    position: relative;
    background: #dee9ed;
    text-align: center;
    color: #444;
    font-weight: 400;
    margin: 1.5rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.6s ease;
  }

  .user dl,
  .user dd {
    margin: 0;
  }

  .user dt {
    display: none;
  }

  .user-data {
    background: #fff url(${githubLogo}) no-repeat 5px 5px;
    background-size: 25px;
    height: 85px;
    line-height: 1.6;
    transition: background 0.6s ease;
  }

  dd.user-avatar {
    display: inline-block;
    margin: 20px 0 10px;
  }

  .user-avatar img {
    border-radius: 100%;
    height: 120px;
    width: 120px;
    border: 3px solid #fff;
    vertical-align: middle;
    background-color: #fff;
    transition: all 0.6s ease;
  }

  dd.user-name,
  dd.user-account {
    margin: 5px 0;
  }

  dd.user-name {
    font-size: calc(15px + 0.7vw);
    font-weight: 600;
    letter-spacing: 1px;
  }

  .user-account {
    font-size: 16px;
    margin: 5px 0;
  }

  .user-stats {
    border-top: 1px groove #fff;
    position: relative;
    top: 210px;
    transition: border-top 0.6s ease;
  }

  .user-stats dd {
    padding: 5px 17px;
  }

  .user-repos,
  .user-following,
  .user-followers {
    display: inline-block;
    font-size: 20px;
  }

  .user-repos:after,
  .user-following:after,
  .user-followers:after {
    content: attr(data-stats);
    text-transform: uppercase;
    display: block;
    font-size: 11px;
    font-weight: normal;
    line-height: 1.7em;
  }

  footer {
    background-color: #eef4f6;
    transition: background-color 0.6s ease;
    margin: 1rem 2.5rem 1.5rem;
    line-height: 1.8;
  }

  footer a {
    text-decoration: none;
    color: #ff7f50;
  }

  footer a:hover {
    text-decoration: none;
    color: #4d4d4d;
  }

  ${"" /* success & 404 pages */}

  section.section-suc {
    padding-top: 40px;
    padding-bottom: 0;
  }

  div.div--img {
    width: calc(280px + 12vw);
    max-width: 95vw;
    margin: 0 auto;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  a.link--back {
    color: #4db6ac;
    font-size: calc(15px + 0.7vw);
    font-weight: 500;
  }

  a.link--back:hover {
    color: #ff7f50;
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
