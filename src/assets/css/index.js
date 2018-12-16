export default () => `
    s1{
        color:white;
        font-size: 23px;
        text-align: center;
    }
    #mask {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9000;
        background-color: #000;
        display: none;
    }
    
    #boxes .window {
        position: absolute;
        left: 0;
        top: 0;
        width: 440px;
        height: 200px;
        display: none;
        z-index: 9999;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
    }
    
    #boxes #dialog {
        width: 750px;
        height: 710px;
        padding: 10px;
        background-color: #0e141d;
        color: white;
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
        font-size: 12pt;
    }

    #popupfoot {
        font-size: 12pt;
        bottom: 20px;
        width: 1347px;
        left: 250px;
    }
    div#review {
        border: 1px;
        border-style: groove;
        border-color: #ffff;
    }
    
    .label-text-a {
        font-size: 12px;
        position: absolute;
        width: 100%;
        top: 1px;
        left: 4px;
        overflow: hidden;
    }
    
    
body {
    background: #fff;
}
.text_bold{
    font-weight: bold;
}

.text_white{
    color:white;
}

.text_red{
    color:#f93e2e;
}

.text_black{
    color:black;
}

.text_grey{
    color: #A9A9A9;
}

.Nanum{
    font-family: 'Nanum Gothic', sans-serif;
}

a:active,
a:visited,
a:focus,
.btn:hover {
    text-decoration: none;
}

.btn {
    display: inline-block;
    color: #f93e2e;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 2px solid #f93e2e;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: .25rem;
    transition: all .15s ease-in-out;
}
.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
}

.btn-lg {
    padding: .5rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .3rem;
    color:#f93e2e;
}

.content-top,
.content-bottom,
.content-left,
.content-right {
    -webkit-transition: all .75s ease-in-out;
    -moz-transition: all .7s ease-in-out;
    transition: all .7s ease-in-out;
}

.content-top {
    opacity: 0;
    transform: translateY(-5px);
}

.content-bottom {
    opacity: 0;
    transform: translateY(5px);
}

.content-left {
    opacity: 0;
    transform: translateX(-5px);
}

.content-right {
    opacity: 0;
    transform: translateX(5px);
}

.nav {
    padding-top: 0px;
    padding-bottom: 10px;
    position: fixed;
    width: 100%;
    z-index: 102;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.15); */
    top: 0;
    /* background: rgba(255, 255, 255, 0.97); */
    background: transparent;
}
/*같이 이동하는 네비게이션 색상 조정*/
.nav-container {
/*    background-color: #fc2113;*/
/*    background-color: #000615;*/
    background-color: #000000;
    display: block;
    width: 100%;
    position: relative;
    opacity: 0.9;
}
.nav-inner-container {
    position: relative;
    margin-left: 4%;
    margin-right: 4%
}

.logo {
    display: inline-block;
    padding: .5em;
    /* padding-left: 5em; */
    padding-left: 0;
    vertical-align: middle;
    margin-right: 2em;
    -webkit-transition: all .5 linear;
    -moz-transition: all .5 linear;
    transition: all .5 linear;
}

.logo h1 {
    color: white;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    font-size: 32px;
    font-weight: bold;
    margin-top: 0;
    -webkit-transition: all .5 linear;
    -moz-transition: all .5 linear;
    transition: all .5 linear;
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}

.point {
    color: rgb(249, 76, 59);
}

.nav-items-container {
    right: 5%;
    top: calc(50% - 13px);
    position: absolute;
}

.nav-items {
    list-style-type: none;
}

.nav-items li {
    display: inline-block;
    font-weight: bold;
    padding-right: 2.5em
}

.nav-items li a {
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    /* color: #26D; */
    font-size: 1em;
    color: rgb(255, 255, 255);
/*    color: rgba(249, 59, 42, 0.5);*/
    border-top: 2px solid transparent;
    -webkit-transition: all .25s linear;
    -moz-transition: all .25s linear;
    transition: all .25s linear;
}

.nav-items li a:hover {
    padding-top: 5px;
    border-top: 5px solid #ffffff;
/*    border-top: 5px solid #f93b2a;*/
/*    color: #f93b2a;*/
    color: #ffffff;
}

.nav-items li a.active {
    padding-top: 5px;
    /* border-top: 5px solid #26D; */
    border-top: 5px solid #ffffff;
/*    border-top: 5px solid #f93b2a;*/
/*    color: #f93b2a;*/
    color: #ffffff;
}

#register a,
#login a,
#signup a {
    font-size: 13px;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    vertical-align: middle;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 5px;
    padding: 7px 12px;
    -webkit-transition: all .1 linear;
    -moz-transition: all .1 linear;
    transition: all .1 linear;
}

#register a:hover,
#login a:hover,
#signup a:hover {
    border: 1px solid #fff;
}

#register a.reset-password-button,
#login a.reset-password-button {
    border: 1px solid transparent;
    color: rgba(255, 255, 255, 0.35)
}

#register a.reset-password-button:hover,
#login a.reset-password-button:hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
    color: rgba(255, 255, 255, 0.7);
}


/* Hamburger */

#hamburger {
    width: 41px;
    height: 33px;
    position: absolute;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    right: 0;
    z-index: 200;
/*    top: calc(50% - 22px);*/
    top: calc(50% - 16px);
}

#hamburger span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #ffffff;
    border-radius: 4px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

#hamburger span:nth-child(1) {
    top: 1px;
}

#hamburger span:nth-child(2) {
    top: 13px;
}

#hamburger span:nth-child(3) {
    top: 26px;
}

ul.menu {
    list-style: none;
}

.menu-wrapper {
    position: fixed;
    z-index: 198;
    height: 100%;
    width: 300px;
    margin: 0 auto;
    display: block;
    top: 0;
    right: -300px;
    /* background: #ddd; */
    background: #0d141d;
    -webkit-transition: all .25s ease-in;
    -moz-transition: all .25s ease-in;
    transition: all .25s ease-in;
}

.menu-container {
    width: 80%;
    height: 100%;
    display: block;
    margin: 0 auto;
    margin-top: 50%;
    margin-left: 20px;
}

.menuopen {
    transform: translateX(-300px)
}

.menu-item {
    position: relative;
    margin-bottom: 26px;
    font-size: 23px;
}

.menu-item a {
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    color: white;
}

.clip-wrap {
    left: 0;
    position: absolute;
    top: 0;
    color: #f93e2e;
    display: block;
    zoom: 1;
    -webkit-transition: width 1.75s cubic-bezier(0.2, .7, .3, 1), -webkit-transform .8s cubic-bezier(0.2, .7, .3, 1);
    -moz-transition: width 0.25s cubic-bezier(.52, .01, .16, 1);
    transition: width 0.25s cubic-bezier(0.2, .7, .3, 1), transform .25s cubic-bezier(0.2, .7, .3, 1);
    width: 0;
    height: 110%;
    padding: 0;
    opacity: 1;
    overflow: hidden;
    pointer-events: none;
    backface-visibility: hidden;
}

.clip-wrap span {
    -webkit-transition: width 1.75s cubic-bezier(0.2, .7, .3, 1), -webkit-transform .8s cubic-bezier(0.2, .7, .3, 1);
    -moz-transition: width 1.75s cubic-bezier(.52, .01, .16, 1);
    transition: width 1.75s cubic-bezier(0.2, .7, .3, 1), transform .8s cubic-bezier(0.2, .7, .3, 1);
    display: block;
    width: 0;
    position: relative;
    word-break: normal;
    backface-visibility: hidden;
}

.menu-item a:hover {
    color: #f93e2e;
}

.menu-item a:hover>.clip-wrap,
.menu-item a:hover>.clip-wrap span {
    width: 101%;
}


/* Main Content */

.section {
    display: flex;
    min-height: 700px;
    height: auto;
    padding: 10%;
    padding-top: 110px;
    padding-bottom: 110px;
    overflow: hidden;
}

section {
    background-attachment: fixed;
}

.main {
    position: relative;
    display: block;
}

.content-box-container {
    width: 95%;
    margin: 0 auto;
}

.content-box {
    /* flex: 1 */
}


/* Hero Section */

#home:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom, transparent, #0d141d)
}

#home {
    position: relative;
    padding-top: 0;
    /* background-image: url('../images/wires-lighter.png'); */
    background-repeat: no-repeat;
    height: 85vh;
    background-position: 50% 50%;
    background-attachment: fixed;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

#home:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* background-image: url('../images/gif/giphy.gif'); */
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    /* animation: 50s linear 1s infinite rotate; */
}

#home .headline,
#home .tagline {
    letter-spacing: 3px;
    color: white;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    font-weight: bold;
    text-align: left;
    font-size: 4em;
    margin-bottom: initial;
    margin-left: 10px;
    text-align: left;
}

#home .subtitle{
    letter-spacing: 2px;
    color: white;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    margin-bottom: initial;
    margin-left: 10px;
    font-weight: bold;
    text-align: left;
}

#home .button{
    letter-spacing: 3px;
    color: #f93e2e;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    margin-bottom: initial;
    margin-left: 10px;
    font-size: 4em;
    font-weight: bold;
    text-align: left;
}

#home .headline {
    margin-bottom: -5px;
}

.hero-content,
.hero-container {
    text-align: center;
    height: 100%;
}

#home .tagline {
    padding-top: 1em;
    font-size: 1.7em;
    margin-bottom: 2.5em;
}

#home .content {
    display: block;
    opacity: 0;
    width: 0;
    height: 0;
}

#home .content-top {
    opacity: 0;
    transform: translateY(-60px);
}

#home .content-bottom {
    opacity: 0;
    transform: translateY(60px);
}

#home .content-left {
    opacity: 0;
    transform: translateX(-60px);
}

#home .content-right {
    opacity: 0;
    transform: translateX(60px);
}

#home .btn {
    background: none;
    color: #f93e2e;
    font-weight: bold;
}


/* Zoom in Keyframes */

@-webkit-keyframes zoomin {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(2);
    }
}

@keyframes zoomin {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(2);
    }
}


/* End of Zoom in Keyframes */


/* Zoom Out Animations */

@-webkit-keyframes zoomout {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.67);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes zoomout {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.67);
    }
    100% {
        transform: scale(1);
    }
}


/*End of Zoom Out Animations */


/* vertical rectangle style dot nav*/

.dot-nav {
    display: block;
    position: fixed;
    list-style: none;
    width: 24px;
    right: 0;
    top: calc(50% - 10px);
    transform: translateY(-50%);
    margin: 0;
    padding: 10px 0 0;
    z-index: 10;
    overflow: visible;
}

.dot-nav li {
    display: block;
    position: relative;
    list-style: none;
    background: transparent;
    height: 29px;
    width: 6px;
    border-radius: 5px;
    margin: 0 0 24px 0;
    padding: 0;
    border: 2px solid #fff;
    opacity: 0.66;
    cursor: pointer;
    transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}


/* TO DO : .dot-nav li:after for sliding from and to each dot (animation) */

.dot-nav li:hover {
    opacity: 1;
}

.active-dot {
    /* width: 7px !important; */
    border-color: #f93e2e !important;
    background: #f93e2e !important;
    transform: translateX(0)
}

.dot-nav .tooltip {
    right: 50px;
    top: 0;
    height: 34px;
    opacity: 0;
    position: absolute;
    pointer-events: none;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
}

.active-hover-text {
    color: #f93e2e !important;
}

.about-active-hover-text{
    color: #000000 !important;
}

.dot-nav a {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.dot-nav a.active:after {
    box-shadow: inset 0 0 0 5px;
}

.dot-nav a .hover-text {
    color: white;
    position: absolute;
    width: 200px;
    text-align: right;
    right: 15px;
    top: 2px;
    opacity: 0;
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
    padding-right: 8px;
}

.dot-nav li:hover .hover-text {
    opacity: 1;
}

.dot-nav a:after {
    -webkit-transition: box-shadow 0.5s ease;
    transition: box-shadow 0.5s ease;
    width: auto;
    height: auto;
    display: block;
    position: absolute;
    margin: auto;
    top: 0;
    right: 4px;
    bottom: 0;
}


/* =========== TICKER =========== */

#ticker-container {
    position: relative;
    display: block;
    height: 15vh;
    background: #0d141d;
    overflow: hidden;
    width: 100%;
}

.ticker-container:before {
    content: '';
    left: 0;
    background: linear-gradient(90deg, #0d141d, transparent);
}

.ticker-scrolling {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

.ticker {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    white-space: nowrap;
    /* align-items: stretch; */
    -ms-flex-pack: space-between;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-top: 1%;
}

.ticker::before,
.ticker::after {
  content: '';
}

.animate-ticker {
    margin-left: 100%;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
}

.ticker-block {
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    color: #3b4251;
    color: white;
    padding-right: 35px;
}

.ticker-block p {
    margin-bottom: 6px;
}

.ticker-block .ticker-session-high,
.ticker-block .ticker-symbol {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
}

.ticker-last-trade {
    font-size: 18px;
}

.high {
    color: white;
}

.ticker-block .ticker-session-high,
.currency {
    color: #858585
}

.ticker-block .ticker-session-high {
    font-size: 12px;
    font-weight: normal;
}

@-webkit-keyframes ticker {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
    }
    100% {
        -webkit-transform: translate3d(-200%, 0, 0);
        transform: translate3d(-200%, 0, 0);
    }
}

@keyframes ticker {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
    }
    100% {
        -webkit-transform: translate3d(-200%, 0, 0);
        transform: translate3d(-200%, 0, 0);
    }
}


/* =========== Features and About Sections =========== */

.features .headline {
    font-weight: bold;
    color: #f73e2e;
}

.features {
/*    background: rgba(0, 0, 0, .88);*/
/*    background: url('../images/lap-top.jpg') top center;*/
    background color: white;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
}

.features h2,
.features h3,
.about h2,
.about h3 {
    color: white;
    text-align: center;
}

.features h5,
.features p,
.about h5,
.about p {
    color: #f4f4f4;
    font-weight: bold;
    font-size: 1em;
    text-align: center;
    letter-spacing: 3px;
    line-height: 1.2em;
    margin: 0 auto;
}

.features p,
.about p {
    font-weight: normal;
    letter-spacing: 1.5px;
    font-size: .8em;
    max-width: 320px;
}

.features h5.subtitle,
.about h5.subtitle {
    margin-bottom: 1em;
}

.features h5_m.subtitle,
.about h5_m.subtitle {
    margin-bottom: 1em;
}

.feat-list-content {
    padding: 10%;
}

.content-icon {
    display: block;
    height: 80px;
    margin: 0 auto;
    margin-bottom: 30px;
}

.features h5_m,
.features p_m{
    color: #000000;
    font-weight: bold;
    font-size: 1em;
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 1.2em;
    margin: 0 auto;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    max-width: 320px;

}

.features h6_m{
    color: #000000;
    text-align: center;
    margin: 0 auto;
    max-width: 320px;

}

.features h7_m{
    color: #000000;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    letter-spacing: 3px;
    line-height: 1.2em;
    margin: 0 auto;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
}

.about h5,
.about p {
    color: #ffffff;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    font-weight: bold;
    font-size: 1em;
    text-align: center;
    letter-spacing: 3px;
    line-height: 1.2em;
    margin: 0 auto;
}

.about h5_m{
    color: #ffffff;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    font-weight: bold;
    font-size: 1em;
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 1.2em;
    margin: 0 auto;
    max-width: 320px;
}

.about h6_m{
    text-align: center;
    margin: 0 auto;
    max-width: 320px;
}
/* =========== About =========== */

.about {
    background: #e0e0e0;
    /*
    background: url('static/images/orangebg1.png') center center;
    */
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.about h4,
.about p {
    color: white;
}

.about h1,
.about .headline {
    font-weight: bold;
    color: #ffffff;
}

.about-list-content {
    padding: 20px;
}


/* =========== Contact Section =========== */

.contact {
    background: black;
}

.contact a {
    -webkit-transition: all .05s linear;
    -moz-transition: all .05s linear;
    -o-transition: all .05s linear;
    transition: all .05s linear;
}

.social-link {
    text-align: left;
    margin-left: 15px;
}

.footer-link,
.sitemap-link {
    display: block;
    text-align: left;
}

.social-link:hover,
.sitemap-link:hover,
.footer-link:hover {
    color: #f73e2e;
}

.footer-item,
.footer-address-last {
    margin-bottom: 8px;
}

.footer-address {
    margin-bottom: 2px;
}

.social-icon {
    width: 12px;
}


/* Google Maps */

#map {
    height: 300PX;
    width: 100%;
    margin: 0 auto;
    background: grey;
}


/* =========== ADD-ONS and Grid Mofifications =========== */

.center-flex-ie {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
}

.btn.underline {
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    font-size: 1.8em;
    background: none;
    border: 0;
    display: inline-block;
    position: relative;
    padding-bottom: 10px;
    letter-spacing: 2px;
    outline: none;
    color: white;
}

.btn {
    cursor: pointer;
}

.h-100 {
    height: 100%;
}

.h-85 {
    height: 85%;
}

.h-95 {
    height: 95%;
}

.w-95-center {
    width: 95%;
    margin: auto;
}

.w-100-center {
    width: 100%;
    margin: auto;
}

.t-center {
    text-align: center;
}

.t-left {
    text-align: left;
}

.title-hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 7px solid rgba(255, 255, 255, 1);
    width: 50px;
    border-radius: 7px;
    -webkit-transition: width .7s linear;
    -moz-transition: width .7s linear;
    transition: width .7s linear;
}

.headline {
    font-size: 2em
}

.force-flex-break {
    width: 100%;
}

.row:hover .about-list-content,
.row:hover .feat-list-content {
    opacity: .7 !important;
}

.about-list .about-list-content:hover,
.feat-list .feat-list-content:hover {
    opacity: 1 !important;
    border-radius: 5px;
    background: rgba(13, 20, 29, 0.8);
    -webkit-transition: all .35s linear;
    -moz-transition: all .35s linear;
    transition: all .35s linear;
    transform: translateY(0) scale(1.1) !important;
}

.sibling-opacity {
    opacity: .15;
}

.text-center {
    display: block;
    text-align: center;
    margin: 0 auto;
}

.mb-50 {
    margin-bottom: 50px;
}

.mb-25 {
    margin-bottom: 25px;
}

.mt-50 {
    margin-top: 50px;
}

.vert-center {
    text-align: center;
    width: 100%;
    position: absolute;
    top: 47%;
    transform: translateY(-47%);
}

@keyframes from-right {
    from {
        opacity: 0;
        transform: translateX(-40px)
    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
}

/* =========== Media Queries =========== */

@media (min-width: 1220px) {
    #home h1.headline {
        font-size: 4em;
        padding-bottom: 12px;
        padding-left: 0;
        padding-right: 0;
    }
    .hide-on-v-lg {
        display: none;
    }
}

@media (max-width:1024px) {
    .nav-container {
        margin: 0 auto;
    }
    .only-show-on-xl {
        display: none !important;
    }
    .features h5.subtitle,
    .about h5.subtitle {
        margin-bottom: 1em;
    }
}

@media (max-width: 941px) {
    .feat-list-item {
        width: 90%;
        margin: 0 auto;
    }
    #home .headline {
        margin-bottom: 35px;
        font-size: 3em;
    }
}

@media (min-width: 768px) {
    .only-show-on-mobile {
        display: none !important;
    }
    #home .headline {
        font-size: 4em;
    }
}

@media (max-width:768px) {
    .only-show-on-desktop {
        display: none !important;
    }
    .dot-nav {
        display: none;
    }
    .mb-md-25 {
        margin-bottom: 25px;
    }
    .pad.error-block {
        width: 100%;
    }
    .menu-container {
        margin-top: 25%;
    }
}

@media (max-width: 750px) {
    .feat-row {
        height: auto;
    }
    .feat-col {
        padding-top: 1em
    }
    .content-icon {
        height: 35px;
    }
}

@media (max-width: 671px) {
    .nav {
        text-align: left;
    }
    .nav-container {
        margin: initial;
    }
    .ticker {
        margin-left: 50%;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-name: ticker;
        animation-name: ticker;
        -webkit-animation-duration: 15s;
        animation-duration: 15s;
    }
}

@media (max-width:414px) {
    .mb-sm-0 {
        margin-bottom: 0px;
    }
    .content-icon {
        height: 40px;
        margin-bottom: 15px;
    }
    .feat-list-content,
    .about-list-content {
        padding: 10px;
    }
    .features h5.subtitle,
    .about h5.subtitle {
        margin-bottom: .7em;
    }
    .features h5,
    .features p,
    .about h5,
    .about p {
        font-size: 1em;
    }
    .about h4 {
        font-size: 1.3em;
    }
    #home .headline {
        margin-bottom: 35px;
        font-size: 3em;
    }
    .demo-btn {
        padding: 0;
    }
    #home {
        height: 78vh;
    }
    #ticker-container {
        height: 22vh;
    }
}

@media (max-width:375px) {
    .content-icon {
        height: 35px;
        margin-bottom: 10px;
    }
    .feat-list-content,
    .about-list-content {
        padding: 5px;
    }
    .features h5.subtitle,
    .about h5.subtitle {
        margin-bottom: .5em;
    }
    .features h5,
    .features p,
    .about h5,
    .about p {
        font-size: 0.8em;
    }
    .about h4 {
        font-size: 1.3em;
    }
    #home .headline {
        margin-bottom: 35px;
        font-size: 3em;
    }
    .demo-btn {
        padding: 0;
    }
}

@media (min-width:320px) {
    .show-on-xs {
        display: none;
    }
}


/* Hide Bootstrap Growls on landing page*/

.bootstrap-growl.alert.alert-danger {
    display: none !important;
}

[data-aos][data-aos][data-aos-duration="50"],body[data-aos-duration="50"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay="50"],body[data-aos-delay="50"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="50"].aos-animate,body[data-aos-delay="50"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration="100"],body[data-aos-duration="100"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay="100"],body[data-aos-delay="100"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="100"].aos-animate,body[data-aos-delay="100"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration="150"],body[data-aos-duration="150"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay="150"],body[data-aos-delay="150"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="150"].aos-animate,body[data-aos-delay="150"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration="200"],body[data-aos-duration="200"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay="200"],body[data-aos-delay="200"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="200"].aos-animate,body[data-aos-delay="200"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration="250"],body[data-aos-duration="250"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay="250"],body[data-aos-delay="250"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="250"].aos-animate,body[data-aos-delay="250"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration="300"],body[data-aos-duration="300"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay="300"],body[data-aos-delay="300"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="300"].aos-animate,body[data-aos-delay="300"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration="350"],body[data-aos-duration="350"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay="350"],body[data-aos-delay="350"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="350"].aos-animate,body[data-aos-delay="350"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration="400"],body[data-aos-duration="400"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay="400"],body[data-aos-delay="400"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="400"].aos-animate,body[data-aos-delay="400"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration="450"],body[data-aos-duration="450"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay="450"],body[data-aos-delay="450"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="450"].aos-animate,body[data-aos-delay="450"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration="500"],body[data-aos-duration="500"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay="500"],body[data-aos-delay="500"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="500"].aos-animate,body[data-aos-delay="500"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration="550"],body[data-aos-duration="550"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay="550"],body[data-aos-delay="550"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="550"].aos-animate,body[data-aos-delay="550"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration="600"],body[data-aos-duration="600"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay="600"],body[data-aos-delay="600"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="600"].aos-animate,body[data-aos-delay="600"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration="650"],body[data-aos-duration="650"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay="650"],body[data-aos-delay="650"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="650"].aos-animate,body[data-aos-delay="650"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration="700"],body[data-aos-duration="700"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay="700"],body[data-aos-delay="700"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="700"].aos-animate,body[data-aos-delay="700"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration="750"],body[data-aos-duration="750"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay="750"],body[data-aos-delay="750"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="750"].aos-animate,body[data-aos-delay="750"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration="800"],body[data-aos-duration="800"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay="800"],body[data-aos-delay="800"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="800"].aos-animate,body[data-aos-delay="800"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration="850"],body[data-aos-duration="850"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay="850"],body[data-aos-delay="850"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="850"].aos-animate,body[data-aos-delay="850"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration="900"],body[data-aos-duration="900"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay="900"],body[data-aos-delay="900"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="900"].aos-animate,body[data-aos-delay="900"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration="950"],body[data-aos-duration="950"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay="950"],body[data-aos-delay="950"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="950"].aos-animate,body[data-aos-delay="950"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration="1000"],body[data-aos-duration="1000"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay="1000"],body[data-aos-delay="1000"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1000"].aos-animate,body[data-aos-delay="1000"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration="1050"],body[data-aos-duration="1050"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay="1050"],body[data-aos-delay="1050"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1050"].aos-animate,body[data-aos-delay="1050"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration="1100"],body[data-aos-duration="1100"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay="1100"],body[data-aos-delay="1100"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1100"].aos-animate,body[data-aos-delay="1100"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration="1150"],body[data-aos-duration="1150"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay="1150"],body[data-aos-delay="1150"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1150"].aos-animate,body[data-aos-delay="1150"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration="1200"],body[data-aos-duration="1200"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay="1200"],body[data-aos-delay="1200"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1200"].aos-animate,body[data-aos-delay="1200"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration="1250"],body[data-aos-duration="1250"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay="1250"],body[data-aos-delay="1250"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1250"].aos-animate,body[data-aos-delay="1250"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration="1300"],body[data-aos-duration="1300"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay="1300"],body[data-aos-delay="1300"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1300"].aos-animate,body[data-aos-delay="1300"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration="1350"],body[data-aos-duration="1350"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay="1350"],body[data-aos-delay="1350"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1350"].aos-animate,body[data-aos-delay="1350"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration="1400"],body[data-aos-duration="1400"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay="1400"],body[data-aos-delay="1400"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1400"].aos-animate,body[data-aos-delay="1400"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration="1450"],body[data-aos-duration="1450"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay="1450"],body[data-aos-delay="1450"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1450"].aos-animate,body[data-aos-delay="1450"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration="1500"],body[data-aos-duration="1500"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay="1500"],body[data-aos-delay="1500"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1500"].aos-animate,body[data-aos-delay="1500"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration="1550"],body[data-aos-duration="1550"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay="1550"],body[data-aos-delay="1550"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1550"].aos-animate,body[data-aos-delay="1550"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration="1600"],body[data-aos-duration="1600"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay="1600"],body[data-aos-delay="1600"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1600"].aos-animate,body[data-aos-delay="1600"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration="1650"],body[data-aos-duration="1650"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay="1650"],body[data-aos-delay="1650"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1650"].aos-animate,body[data-aos-delay="1650"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration="1700"],body[data-aos-duration="1700"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay="1700"],body[data-aos-delay="1700"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1700"].aos-animate,body[data-aos-delay="1700"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration="1750"],body[data-aos-duration="1750"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay="1750"],body[data-aos-delay="1750"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1750"].aos-animate,body[data-aos-delay="1750"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration="1800"],body[data-aos-duration="1800"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay="1800"],body[data-aos-delay="1800"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1800"].aos-animate,body[data-aos-delay="1800"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration="1850"],body[data-aos-duration="1850"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay="1850"],body[data-aos-delay="1850"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1850"].aos-animate,body[data-aos-delay="1850"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration="1900"],body[data-aos-duration="1900"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay="1900"],body[data-aos-delay="1900"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1900"].aos-animate,body[data-aos-delay="1900"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration="1950"],body[data-aos-duration="1950"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay="1950"],body[data-aos-delay="1950"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1950"].aos-animate,body[data-aos-delay="1950"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration="2000"],body[data-aos-duration="2000"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay="2000"],body[data-aos-delay="2000"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2000"].aos-animate,body[data-aos-delay="2000"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration="2050"],body[data-aos-duration="2050"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay="2050"],body[data-aos-delay="2050"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2050"].aos-animate,body[data-aos-delay="2050"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration="2100"],body[data-aos-duration="2100"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay="2100"],body[data-aos-delay="2100"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2100"].aos-animate,body[data-aos-delay="2100"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration="2150"],body[data-aos-duration="2150"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay="2150"],body[data-aos-delay="2150"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2150"].aos-animate,body[data-aos-delay="2150"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration="2200"],body[data-aos-duration="2200"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay="2200"],body[data-aos-delay="2200"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2200"].aos-animate,body[data-aos-delay="2200"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration="2250"],body[data-aos-duration="2250"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay="2250"],body[data-aos-delay="2250"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2250"].aos-animate,body[data-aos-delay="2250"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration="2300"],body[data-aos-duration="2300"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay="2300"],body[data-aos-delay="2300"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2300"].aos-animate,body[data-aos-delay="2300"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration="2350"],body[data-aos-duration="2350"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay="2350"],body[data-aos-delay="2350"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2350"].aos-animate,body[data-aos-delay="2350"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration="2400"],body[data-aos-duration="2400"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay="2400"],body[data-aos-delay="2400"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2400"].aos-animate,body[data-aos-delay="2400"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration="2450"],body[data-aos-duration="2450"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay="2450"],body[data-aos-delay="2450"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2450"].aos-animate,body[data-aos-delay="2450"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration="2500"],body[data-aos-duration="2500"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay="2500"],body[data-aos-delay="2500"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2500"].aos-animate,body[data-aos-delay="2500"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration="2550"],body[data-aos-duration="2550"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay="2550"],body[data-aos-delay="2550"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2550"].aos-animate,body[data-aos-delay="2550"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration="2600"],body[data-aos-duration="2600"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay="2600"],body[data-aos-delay="2600"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2600"].aos-animate,body[data-aos-delay="2600"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration="2650"],body[data-aos-duration="2650"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay="2650"],body[data-aos-delay="2650"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2650"].aos-animate,body[data-aos-delay="2650"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration="2700"],body[data-aos-duration="2700"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay="2700"],body[data-aos-delay="2700"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2700"].aos-animate,body[data-aos-delay="2700"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration="2750"],body[data-aos-duration="2750"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay="2750"],body[data-aos-delay="2750"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2750"].aos-animate,body[data-aos-delay="2750"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration="2800"],body[data-aos-duration="2800"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay="2800"],body[data-aos-delay="2800"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2800"].aos-animate,body[data-aos-delay="2800"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration="2850"],body[data-aos-duration="2850"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay="2850"],body[data-aos-delay="2850"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2850"].aos-animate,body[data-aos-delay="2850"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration="2900"],body[data-aos-duration="2900"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay="2900"],body[data-aos-delay="2900"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2900"].aos-animate,body[data-aos-delay="2900"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration="2950"],body[data-aos-duration="2950"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay="2950"],body[data-aos-delay="2950"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2950"].aos-animate,body[data-aos-delay="2950"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration="3000"],body[data-aos-duration="3000"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay="3000"],body[data-aos-delay="3000"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="3000"].aos-animate,body[data-aos-delay="3000"] [data-aos].aos-animate{transition-delay:3s}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,transform}[data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;transform:translate(0)}[data-aos=fade-up]{transform:translateY(100px)}[data-aos=fade-down]{transform:translateY(-100px)}[data-aos=fade-right]{transform:translate(-100px)}[data-aos=fade-left]{transform:translate(100px)}[data-aos=fade-up-right]{transform:translate(-100px,100px)}[data-aos=fade-up-left]{transform:translate(100px,100px)}[data-aos=fade-down-right]{transform:translate(-100px,-100px)}[data-aos=fade-down-left]{transform:translate(100px,-100px)}[data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,transform}[data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;transform:translate(0) scale(1)}[data-aos=zoom-in]{transform:scale(.6)}[data-aos=zoom-in-up]{transform:translateY(100px) scale(.6)}[data-aos=zoom-in-down]{transform:translateY(-100px) scale(.6)}[data-aos=zoom-in-right]{transform:translate(-100px) scale(.6)}[data-aos=zoom-in-left]{transform:translate(100px) scale(.6)}[data-aos=zoom-out]{transform:scale(1.2)}[data-aos=zoom-out-up]{transform:translateY(100px) scale(1.2)}[data-aos=zoom-out-down]{transform:translateY(-100px) scale(1.2)}[data-aos=zoom-out-right]{transform:translate(-100px) scale(1.2)}[data-aos=zoom-out-left]{transform:translate(100px) scale(1.2)}[data-aos^=slide][data-aos^=slide]{transition-property:transform}[data-aos^=slide][data-aos^=slide].aos-animate{transform:translate(0)}[data-aos=slide-up]{transform:translateY(100%)}[data-aos=slide-down]{transform:translateY(-100%)}[data-aos=slide-right]{transform:translateX(-100%)}[data-aos=slide-left]{transform:translateX(100%)}[data-aos^=flip][data-aos^=flip]{backface-visibility:hidden;transition-property:transform}[data-aos=flip-left]{transform:perspective(2500px) rotateY(-100deg)}[data-aos=flip-left].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-right]{transform:perspective(2500px) rotateY(100deg)}[data-aos=flip-right].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-up]{transform:perspective(2500px) rotateX(-100deg)}[data-aos=flip-up].aos-animate{transform:perspective(2500px) rotateX(0)}[data-aos=flip-down]{transform:perspective(2500px) rotateX(100deg)}[data-aos=flip-down].aos-animate{transform:perspective(2500px) rotateX(0)}
/*# sourceMappingURL=aos.css.map*/
`
