export default () => `
    .slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}/*# sourceMappingURL=slick.min.css.map */
    .slick-dots,.slick-next,.slick-prev{position:absolute;display:block;padding:0}.slick-dots li button:before,.slick-next:before,.slick-prev:before{font-family:slick;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-loading .slick-list{background:url(ajax-loader.gif) center center no-repeat #fff}@font-face{font-family:slick;font-weight:400;font-style:normal;src:url(./static/fonts/slick.eot);src:url(./static/fonts/slick.eot?#iefix) format('embedded-opentype'),url(./static/fonts/slick.woff) format('woff'),url(./static/fonts/slick.ttf) format('truetype'),url(./static/fonts/slick.svg#slick) format('svg')}.slick-next,.slick-prev{font-size:0;line-height:0;top:50%;width:20px;height:20px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);cursor:pointer;color:transparent;border:none;outline:0;background:0 0}.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-size:20px;line-height:1;opacity:.75;color:#fff}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:'\\2192'}.slick-next:before,[dir=rtl] .slick-prev:before{content:'→'}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}[dir=rtl] .slick-next:before{content:'\\2192'}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;width:100%;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'•';text-align:center;opacity:.25;color:#000}.slick-dots li.slick-active button:before{opacity:.75;color:#000}/*# sourceMappingURL=slick-theme.min.css.map */
    @font-face {
     font-family: 'NanumSquare';
     font-weight: 400;
     src: url(/static/fonts/NanumSquareR.eot);
     src: url(/static/fonts/NanumSquareR.eot?#iefix) format('embedded-opentype'),
          url(/static/fonts/NanumSquareR.woff) format('woff');
    }
    @font-face {
     font-family: 'NanumSquare';
     font-weight: 700;
     src: url(/static/fonts/NanumSquareB.eot);
     src: url(/static/fonts/NanumSquareB.eot?#iefix) format('embedded-opentype'),
          url(/static/fonts/NanumSquareB.woff) format('woff');
    }
    @font-face {
     font-family: 'NanumSquare';
     font-weight: 300;
     src: url(/static/fonts/NanumSquareL.eot);
     src: url(/static/fonts/NanumSquareL.eot?#iefix) format('embedded-opentype'),
          url(/static/fonts/NanumSquareL.woff) format('woff');
    }
    
    /* css reset */
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
    blockquote, pre, a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub,
    sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section,
    summary, time, mark, audio, video, input {
      padding: 0;
      margin: 0;
      outline: 0;
      font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    }
    
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
    }
    
    ol, ul {
      list-style: none;
    }
    
    table {
      border-spacing: 0;
      border-collapse: collapse;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-size: 100%;
      font-weight: normal;
      margin:0;
      padding:0;
    }
    
    fieldset, img {
      vertical-align: top;
      border: 0;
    }
    
    address {.module-trigger
      font-style: normal;
    }
    
    /* a-style */
    a {
      color: #333;
      text-decoration: none;
    }
    
    a:hover, a:active, a:focus {
      text-decoration: none;
    }
    
    legend {
      display: none;
    }
    
    @import url(https://cdn.rawgit.com/theeluwin/NotoSansKR-Hestia/master/stylesheets/NotoSansKR-Hestia.css);
    /* Bootstrap v3.3.7 (http://getbootstrap.com)
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
     
     
     
     /*!
     * Pikaday
     * Copyright © 2014 David Bushell | BSD & MIT license | http://dbushell.com/
     */.pika-single{z-index:9999;display:block;position:relative;color:#333;background:#f5f5f5;border:1px solid #ccc;border-bottom-color:#bbb;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif}.pika-single:before,.pika-single:after{content:" ";display:table}.pika-single:after{clear:both}.pika-single{*zoom:1}.pika-single.is-hidden{display:none}.pika-single.is-bound{position:absolute;box-shadow:0 5px 15px -5px rgba(0,0,0,0.5)}.pika-lendar{float:left;width:240px;margin:8px}.pika-title{position:relative;text-align:center}.pika-label{display:inline-block;*display:inline;position:relative;z-index:9999;overflow:hidden;margin:0;padding:5px 3px;font-size:14px;line-height:20px;font-weight:bold;background-color:#f5f5f5}.pika-title select{cursor:pointer;position:absolute;z-index:9998;margin:0;left:0;top:5px;filter:alpha(opacity=0);opacity:0}.pika-prev,.pika-next{display:block;cursor:pointer;position:relative;outline:none;border:0;padding:0;width:20px;height:30px;text-indent:20px;white-space:nowrap;overflow:hidden;background-color:transparent;background-position:center center;background-repeat:no-repeat;background-size:75% 75%;opacity:.5;*position:absolute;*top:0}.pika-prev:hover,.pika-next:hover{opacity:1}.pika-prev,.is-rtl .pika-next{float:left;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==");*left:0}.pika-next,.is-rtl .pika-prev{float:right;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=");*right:0}.pika-prev.is-disabled,.pika-next.is-disabled{cursor:default;opacity:.2}.pika-select{display:inline-block;*display:inline}.pika-table{width:100%;border-collapse:collapse;border-spacing:0;border:0}.pika-table th,.pika-table td{width:14.285714285714286%;padding:0}.pika-table th{color:#999;font-size:12px;line-height:25px;font-weight:bold;text-align:center}.pika-button{cursor:pointer;display:block;box-sizing:border-box;-moz-box-sizing:border-box;outline:none;border:0;margin:0;width:100%;padding:5px;color:#666;font-size:12px;line-height:15px;text-align:right;background:#f5f5f5}.pika-week{font-size:11px;color:#999}.is-today .pika-button{color:#33aaff;font-weight:bold}.is-selected .pika-button,.has-event .pika-button{color:#fff;font-weight:bold;background:#33aaff;box-shadow:inset 0 1px 3px #178fe5;border-radius:3px}.has-event .pika-button{background:#005da9;box-shadow:inset 0 1px 3px #0076c9}.is-disabled .pika-button,.is-inrange .pika-button{background:#D5E9F7}.is-startrange .pika-button{color:#fff;background:#6CB31D;box-shadow:none;border-radius:3px}.is-endrange .pika-button{color:#fff;background:#33aaff;box-shadow:none;border-radius:3px}.is-disabled .pika-button{pointer-events:none;cursor:default;color:#999;opacity:.3}.is-outside-current-month .pika-button{color:#999;opacity:.3}.is-selection-disabled{pointer-events:none;cursor:default}.pika-button:hover,.pika-row.pick-whole-week:hover .pika-button{color:#fff;background:#ff8000;box-shadow:none;border-radius:3px}.pika-table abbr{border-bottom:none;cursor:help}.module-head,.module-trigger{background-color:#fff;height:46px;width:100%;border-bottom:2px solid #737576}.module-head{padding:13px 11px;text-transform:uppercase}.module-head h2{display:inline-block;float:left;font-size:14px;font-weight:bold;text-align:left}.module-head span{display:inline-block;float:right;color:#c8c8c8;font-size:1.2em;margin-top:3px}.module-trigger>label{line-height:36px;position:relative;display:inline-block;padding-top:5px;font-size:1.2em;font-weight:normal;text-transform:uppercase;color:#c8c8c8}.module-trigger>label:hover{cursor:pointer;color:#fff}.module-trigger>input[type=radio]{display:none}.module-trigger>input[type=radio]:checked+label{font-size:14px;color:#fff;font-weight:bold}header{min-height:43px;max-height:43px;background-color:#212427;box-shadow:0 2px 4px 0 rgba(0,0,0,0.5);font-weight:bold;border-bottom:solid 1px #979797;padding:0 1rem}header button,header ul{font-size:1.5em !important;font-weight:bold !important}header>div:first-child,header>a:first-child{min-width:247px;margin-right:0.5rem}header>div:nth-child(3),header>a:nth-child(3){flex-grow:1;padding-left:1rem;border-left:1px solid #979797;margin-left:1rem}header>div.signin,header>a.signin{margin-right:1rem}.logo{margin:0 20px 0 0;font-size:18px}.dropdown{position:static}.dropdown button{color:#fff}.dropdown ul a,.dropdown ul a:hover,.dropdown ul a:visited,.dropdown ul a:focus,.dropdown ul a:active{color:#000;text-shadow:none;font-size: 13px}.instrument-dropdown{position:relative}.ticker-wrapper div:last-child{margin-right:0}.day-stat,.last-price{font-size:12px}.last-price{color:#c8c8c8}.bid-price{color:#c8c8c8}.ask-price{color:#c8c8c8}.last-price span{display:block;font-size:14px;font-weight:bold;color:#4a68ac;line-height:1em}.ask-price span{display:block;font-size:14px;font-weight:bold;color:#4a68ac;line-height:1em}.bid-price span{display:block;font-size:14px;font-weight:bold;color:#943c3e;line-height:1em}.last-price span span{color:#943c3e;font-size:1.0em}.day-stat{color:#9b9b9b}.day-stat span{display:block;color:#c8c8c8}.loggedin .hide-loggedin{display:none !important}.loggedout .show-loggedin{display:none !important}.signin{max-width:70px;border:1px solid #c8c8c8;border-radius:20px;padding:2px 8px;color:#fff;text-align:center}.user-menu-container{position:relative;margin-right:1rem}.user-menu-container p{position:relative;font-size:1rem;line-height:3;cursor:pointer;text-align:center}.user-menu-container p:after{content:'';position:absolute;width:0;height:0;top:1.3rem;border-style:solid;border-width:6px 5px 0 5px;border-color:#fff transparent transparent transparent}.user-menu-container p span{padding-right:1rem}.menu-hamburger{font-size:1.5em;color:#fff}@media screen and (max-width: 1430px){.day-stat{display:none}}.sidebar{position:absolute;width:220px;height:100vh;right:0}.title{font-size:16px;line-height:42px;text-align:center;text-transform:uppercase;letter-spacing:7px;color:#eee;border-bottom:solid 1px #979797;background:#212427;box-shadow:0 2px 4px 0 rgba(0,0,0,0.5);font-weight:600}.nav li{display:inherit}.nav li a{display:flex;align-items:center;position:relative;padding:15px 15px 15px 50px;font-size:12px;color:#eee;border-bottom:1px solid #979797;text-transform:uppercase;font-weight:500}.nav li a:hover{background-color:#333;text-shadow:none}.nav li a i{margin-right:0.5rem;font-size:14px}#releaseVersion{position:absolute;bottom:0;right:0;padding:0.3rem 0.5rem}#moduleOrderBook{overflow:hidden}#moduleOrderBook::-webkit-scrollbar{display:none}.book-table-header{display:flex;border-bottom:2px solid #737576;box-shadow:0 2px 4px 0 rgba(0,0,0,0.5);color:#c8c8c8;font-size:1.1em;font-weight:bold;background-color:#212427;padding:8px;text-align:center}.book-table-header div:first-child{width:31%}.book-table-header div:nth-child(2){width:35%}.book-table-header div:nth-child(3){float:right;width:33%;padding-right:15px;text-align:right}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.booktable{width:100%;border-collapse:collapse;text-align:center}.booktable #askRows{display:flex;flex-direction:column;justify-content:flex-end}.emptyBookRow,.bookrow{display:flex;justify-content:space-between;align-content:center}.emptyBookRow div{width:33%}

    /* mobile font resizing */
    @media (max-width: 360px) {
        html {
            font-size: 12px;
            line-height: 1.5rem;
        }
    }
    
    @media (min-width: 361px) and (max-width: 550px) {
        html {
            font-size: 13px;
        }
    }
    
    @media (min-width: 551px) and (max-width: 767px) {
        html {
            font-size: 13px;
        }
    }
    
    @media (min-width: 768px) and (max-width: 1024px) {    
        html {
            font-size: 14px;
        }
    }
    
    @media (min-width: 1025px) {
        html {
            font-size: 14px;
        }
    }
    
    
    .loggedin .hide-loggedin {
        display: none !important;
    }
    
    .loggedout .show-loggedin {
        display: none !important;
    }
    
    .contents{
        margin:40px 0;
        text-align:center;
    }
    
    .separate {
        overflow:hidden;
        width:100%;
        margin:0 0 8px 0;
        a {
            color:#fff;
            i {
                font-size:17px;
                margin:0 5px 0 0;
                vertical-align:middle;
            }
        }
    }
    
    .sns-list {
        display:inline-block;
        vertical-align:top;
        li {
            float:left;
            margin:0 10px 0 0;
            font-size:17px;
            i {
                margin:0 3px 0 0;
                position:relative;
                top:2px;
                vertical-align:top;
            }
        }
    }
    
    #loginForm .clearfix .submit,
    #registerForm .clearfix .submit {font-size: 17px;font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;}
    
    .ap-modal {width: 100%;height: 100%;position: fixed;top: 0;left: 0;outline: none;z-index: 300;}
    .ap-modal_inner {position: absolute;top: 50%;left: 50%;background: #fff;padding:30px 30px 15px;box-sizing: border-box;border-radius: 5px;transform: translate(-50%, -50%);}
    .ap-modal_inner .ap-header .ap-title {width: 100%;overflow: hidden;border-bottom: 3px solid #003366;font-size: 25px;font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;font-weight: 900;padding: 0 40px 10px 0;line-height: 30px;word-break: keep-all;box-sizing: border-box;}
    .ap-modal_inner .ap-header .ap-header-actions {/*position: absolute;top: 0;right: 0;font-size: 24px;*/position: static;font-size: 24px;float: none !important;}
    .ap-modal_inner .ap-header .ap-header-actions-btn-close {cursor: pointer;position: absolute;top: 12px;right: 24px;}
    .ap-modal_inner .pop_form2 {width: 100%;overflow: hidden;}
    .ap-modal_inner .pop_form2 .row {width: 100%;overflow: hidden;margin: 0 0 15px;}
    .ap-modal_innedr .pop_form2 .form-group label {line-height: 34px;float: left;width: 120px;}
    .ap-modal_inner .pop_form2 .form-group label.error {width: auto;}
    .ap-modal_inner .pop_form2 .form-group > div {float: left;}
    .ap-modal_inner .pop_form2 .form-group > div input {width: 200px;height: 34px;text-indent: 5px;box-sizing: border-box;border: none;border-bottom: 1px solid #333;outline: none;background: none;}
    .ap-modal_inner .pop_form2 .form-group select {width: 200px;height: 30px;background: none;}
    .ap-modal_inner .pop_form2 .form-group > div span {line-height: 34px;font-size: .9rem;}
    .ap-modal_inner .pop_form2 .form-group > div a {line-height: 34px;cursor: pointer;font-size: .9rem;}
    .ap-modal_inner .pop_form2 .security_lv p {margin: 0 0 5px;}
    .ap-modal_inner .pop_form2 .security_lv label input {vertical-align: middle;margin-right: 3px;}
    .ap-modal_inner .pop_form2 .clearfix .pull-right {width: 100%;overflow: hidden;margin: 15px 0 0;}
    .ap-modal_inner .pop_form2 .clearfix .pull-right .btn-action {width: 120px;height: 34px;background: #161a24;display: block;margin: 0 auto;border: none;color: #fff;border-radius: 3px;cursor: pointer;}
    .ap-modal_inner .twofa_modal {width: 100%;overflow: hidden;}
    .ap-modal_inner .twofa_modal .form-group {width: 100%;overflow: hidden;margin: 30px 0;}
    .ap-modal_inner .twofa_modal .form-group label {width: 150px;line-height: 34px;float: left;}

.ap-modal_inner .twofa_modal .form-group > div {
    float: left;
}

.ap-modal_inner .twofa_modal .form-group > div input {
    width: 200px;
    height: 34px;
    box-sizing: border-box;
    text-indent: 5px;
    outline: none;
}

.ap-modal_inner .twofa_modal .clearfix {
    width: 100%;
    overflow: hidden;
}

.ap-modal_inner .twofa_modal .clearfix .btn-default {
    padding: 5px 10px;
    background: #f7694d;
    border: none;
    color: #fff;
    cursor: pointer;
}

.ap-modal_inner .twofa_modal .clearfix .pull-right .btn_close {
    padding: 5px 10px;
    background: none;
    border: 1px solid #666;
    box-sizing: boreder-box;
    cursor: pointer;
}

.ap-modal_inner .twofa_modal .clearfix .pull-right .btn_submit {
    padding: 6px 10px;
    background: #161a24;
    border: none;
    color: #fff;
    cursor: pointer;
}

.sign_modal .ap-title {
    width: 100%;
    overflow: hidden;
    border-bottom: 2px solid #003366;
    font-size: 30px;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    font-weight: 900;
    margin: 0 0 20px;
}

#loginForm .input--custom,
#registerForm .input--custom {
    width: 100%;
    overflow: hidden;
    margin: 0 0 10px;
    display: block;
}

#loginForm .input--custom input,
#registerForm .input--custom input {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    text-indent: 10px;
    box-sizing: border-box;
    font-size: 17px;
}

#loginForm .clearfix,
#registerForm .clearfix {
    width: 100%;
    overflow: hidden;
    margin: 20px 0 0;
}

#loginForm .clearfix .submit,
#registerForm .clearfix .submit {
    width: 100%;
    height: 40px;
    background: #003366;
    font-size: 17px;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
}

#loginForm .clearfix .sign_wrap,
#registerForm .clearfix .sign_wrap {
    width: 100%;
    overflow: hidden;
    margin: 20px 0 0;
    text-align: center;
}

#loginForm .clearfix .sign_wrap a:first-child,
#registerForm .clearfix .sign_wrap a:first-child {
    margin-right: 10px;
    padding-right: 10px;
    position: relative;
}

#loginForm .clearfix .sign_wrap a:first-child:after,
#registerForm .clearfix .sign_wrap a:first-child:after {
    content: '';
    width: 1px;
    height: 14px;
    background: #333;
    position: absolute;
    right: 0;
    top: 2px;
    display: block;
}

/* LOGIN END */

/* REGISTER MODAL POPUP */
#register {
    width: 500px;
    position: fixed;
    top: 30% !important;
    left: 50%;
    margin-left: -250px;
    background: rgba(0, 0, 0, .9);
    visibility: hidden;
    opacity: 0;
}

#register .error_msg {
    color: #fff;
    text-align: center;
    margin: 15px 0 0;
}

#register .close-register {
    display: block;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
}

#register #registerForm {
    width: 100%;
    height: 100%;
    padding: 40px 40px 20px;
    box-sizing: border-box;
}

#register #registerForm .pad,
#register #registerForm .pad > span {
    width: 100%;
    overflow: hidden;
    display: block;
}

#register #registerForm .input--custom {
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 0 10px;
}

#register #registerForm .input--custom i {
    width: 40px;
    float: left;
    color: #fff;
    font-size: 20px;
    line-height: 34px;
}

#register #registerForm .input--custom .form-group {
    width: 380px;
    float: right;
}

#register #registerForm .input--custom .form-group input {
    width: 100%;
    height: 34px;
    float: left;
    border: none;
    text-indent: 5px;
    background: none;
    color: #fff;
    border-bottom: 1px solid #fff;
    outline: none;
}

#register #registerForm .keyPermissions {
    color: #ccc;
    font-size: 12px;
    margin: 25px 0 0;
}

#register #registerForm .keyPermissions a {
    color: #fff;
    cursor: pointer;
}

#register #registerForm .clearfix {
    width: 100%;
    overflow: hidden;
}

#register #registerForm .clearfix .btn-lg {
    width: 200px;
    height: 34px;
    background: none;
    border: 1px solid #fff;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    color: #fff;
    cursor: pointer;
}

/* ERROR MSG MODAL */
.bootstrap-growl {
    min-width: 200px;
    background: #fff;
    padding: 20px 30px 20px 20px;
    height:auto;
    position:fixed !important;
    border: 1px solid #999999;
    border-radius: 3px;
    font-size: 15px;
    font-weight: bold;
}

.bootstrap-growl a {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 25px;
}

.bootstrap-growl a i {
    font-size: 25px;
}

/* IE POPUP */

#ieWarn {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .95);
    z-index: 9999;
}

#ieWarn .txt_wrap {
    width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -350px;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 3px;
    padding: 20px 10px;
    box-sizing: border-box;
}

#ieWarn .txt_wrap h3 {
    font-size: 24px;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    border-bottom: 2px solid #003366;
    margin: 0 0 10px;
    padding: 0 0 5px;
    text-align: center;
}

#ieWarn .txt_wrap h3 i {
    position: relative;
    top: 2px;
    font-size: 20px;
    margin-right: 3px;
}

#ieWarn .txt_wrap p {
    font-size: 20px;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    text-align: center;
    margin: 0 0 15px;
}

#ieWarn .txt_wrap .link_wrap {
    text-align: center;
}

#ieWarn .txt_wrap .link_wrap a {
    color: #003366;
    border-bottom: 1px solid #003366;
    margin: 0 10px;
    font-size: 17px;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
}

#ieWarn .txt_wrap .link_wrap a:hover {
    color: #e2242a;
}

#ieWarn .txt_wrap .link_wrap a .xi-edge,
#ieWarn .txt_wrap .link_wrap a .xi-chrome,
#ieWarn .txt_wrap .link_wrap a .xi-firefox {
    padding-right: 3px;
}

@media all and (max-width: 768px) {

    #ieWarn .txt_wrap {
        width: 300px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -150px;
        transform: translateY(-50%);
        background: #fff;
        border-radius: 3px;
        padding: 20px 10px;
        box-sizing: border-box;
    }

    #ieWarn .txt_wrap h3 {
        font-size: 15px;
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
        border-bottom: 2px solid #003366;
        margin: 0 0 10px;
        padding: 0 0 5px;
        text-align: center;
    }

    #ieWarn .txt_wrap .link_wrap a {
        margin: 3 3 0 0;
        padding: 0 0 0 0;
        border: 0;
        float: left;
    }
    
}
.deposit_wrap {
    width: 100%;
    overflow: hidden;
    .info-setting {
        margin:30px 0 0 0;
        .row-group {
            display:flex;
            flex-direction:row;
            place-content:center flex-start;
            align-items:center;
            justify-content:flex-start;
            .form-group {
                display:flex;
                flex-direction:row;
                place-content:center flex-start;
                align-items:center;
                justify-content:flex-start;
                label {
                    width:95px;
                    font-size:18px;
                    color:#1a1a1a;
                    font-weight:bold;
                }
                &.row-form {
                    label {
                        padding:0 0 0 34px;
                        box-sizing:border-box;
                        width:90px;
                    }
                    input {
                        width:150px;
                        box-sizing:border-box;
                    }
                }
                .input-group {
                    position:relative;
                    input {
                        border:1px solid #f2f2f2;
                        height:46px;
                        box-sizing:border-box;
                        padding:0 0 0 15px;
                        color:#1a1a1a;
                        font-size:18px;
                        &[readonly] {
                            border:0 none;
                            background:#f2f2f2;
                        }
                        &::placeholder {
                            color:#1a1a1a;
                        }
                        &.bank-name {
                            width:185px;
                        }
                        &.bank-account {
                            width:200px;
                            margin-left: 20px;
                        }
                    }
                    &.wrap-form {
                        width:495px;
                        background:#f2f2f2;
                        .krw-caution {
                            position:absolute;
                            right:10px;
                            top:15px;
                            color:#f33;
                            font-size:13px;
                            letter-spacing:-1px;
                        }
                    }
                }
            }
            .copy-acc-number {
                background:#036;
                color:#fff;
                border:1px solid #f2f2f2;
                width:36px;
                height:46px;
                padding:0;
                margin:-14px 0 0 0;
                font-size:30px;
                cursor:pointer;
            }
            &.account_num {
                input {
                    width:460px;
                }   
            }
            &.account_amount {
                input {
                    width:495px;
                }
            }            
        }
    }
    .inf_wrap {
        margin:14px 0 0 0;
        .wrap_warn_txt {
            padding:10px 0 0 0;
            border-top:2px solid #036;
            p {
                letter-spacing:-1px;
                font-size:15px;
                line-height:27px;
                &.warn_txt {
                    color:#f33;
                    font-weight:bold;
                }
                strong {
                    color:#f33;
                }
            }
        }
        .form-group {
            display:none;
        }
    }
    
    .clearfix {
        display:flex;
        flex-direction:row;
        place-content:center flex-end;
        align-items:center;
        justify-content:flex-end;
        .text-center {
            padding: 30px 0;
            font-size: 15px;
            font-weight: bold;
        }
        button {
            border:0 none;
            font-size:18px;
            font-weight:bold;
            height:38px;
            border-radius:5px;
            margin:0 0 0 13px;
            &.btn_submit {
                background:#036;
                color:#fff;
                padding:0 20px;
                cursor:pointer;
                float:left;
            }
            &.btn_cancel {
                background:#f2f2f2;
                color:#036;
                padding:0 10px;
                cursor:pointer;
            }
        }
    }
    .text-center {
        text-align:center;
        padding:20px 0;
        font-size:20px;
    }
}

.txt_hide{
    height: 0;
}

.coin_deposit_txt {
    font-size: 17px;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
}

.ap-modal_inner .txt_wrap p {
    font-size: 17px;
    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    word-break: keep-all;
}

.withdraw_wrap {
    width: 100%;
    overflow: hidden;
    margin:30px 0 0 0;
    .inf_wrap {
        width: 100%;
        overflow: hidden;
        .form-group {
            width: 100%;
            overflow: hidden;
            margin: 0 0 13px;
            display:flex;
            flex-direction:row;
            place-content:center flex-start;
            align-items:center;
            justify-content: flex-start;
            label {
                width: 130px;
                font-size: 18px;
                font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                font-weight: bold;
                line-height: 30px;
                color:#1a1a1a;
                letter-spacing:-1px;
            }
            > div {
                .inf_txt {
                    min-width: 360px;
                    width:460px;
                    height: 46px;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                    text-indent: 10px;
                    color:#1a1a1a;
                    font-size:18px;
                    &[readonly] {
                        border:0 none;
                        background:#f2f2f2;
                    }
                }
            }
            textarea {
                width: 100%;
                padding: 5px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                clear: both;
            }
        }
        .wrap_warn_txt {
            letter-spacing:-.5px;
            border-top:2px solid #036;
            margin:29px 0 0 0;
            p {
                font-size:15px;
                font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                line-height:27px;
                &.warn_txt {
                    font-weight: bold;
                    color: #f33;
                    margin: 11px 0 0;
                    letter-spacing:-1px;
                }
            }
        }
    }
    .info_msg {
        p {
            font-size: 17px;
            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
        }
    }
    .clearfix {
        margin:-6px 0 0 0;
        display:flex;
        flex-direction:row;
        place-content:center flex-end;
        align-items:center;
        justify-content:flex-end;
        button {
            border:0 none;
            font-size:18px;
            font-weight:bold;
            height:38px;
            border-radius:5px;
            margin:0 0 0 13px;
            &.btn_submit {
                background:#036;
                color:#fff;
                padding:0 20px;
                cursor:pointer;
            }
            &.btn_cancel {
                background:#f2f2f2;
                color:#036;
                padding:0 10px;
                cursor:pointer;
            }
        }
    }
    .text-center {
        padding:0 0 20px 0;
        text-align:center;
        font-size:20px;
    }
}   

.coin_withdraw_wrap {
    width: 100%;
    overflow: hidden;
    margin: 0 0 10px;
    h3 {
        font-size: 17px;
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
        font-weight: bold;
        margin: 0 0 5px;
    }
    p {
        font-size: 15px;
    }
} 
 
.coin_inf_wrap {
    width: 100%;
    overflow: hidden;
    margin:30px 0 0 0;
    .row-group {
        display:flex;
        flex-direction:row;
        align-items:center;
        place-content:center flex-start;
        justify-content:flex-start;
        label {
            width:108px;
            color:#1a1a1a;
            font-size:16px;
            font-weight:bold;
            letter-spacing:-1px;
        }
        .wrap-form {
            position:relative;
            border:1px solid #ccc;
            input {
                border:0 none;
                height:44px;
                font-size:18px;
                font-weight:bold;
                width:240px !important;
                box-sizing:border-box;
                text-indent:10px;
            }
            .symbol {
                position:absolute;
                right:19px;
                top:10px;
                font-size:18px;
                font-weight:bold;
            }
        }
        .row-form {
            label {
                width:100px;
                box-sizing:border-box;
                padding:0 0 0 25px;
            }
            .wrap-form {
                input {
                    width:128px !important;
                }
            }
        }
    }
    .form-group {
        display:flex;
        flex-direction:row;
        align-items:center;
        place-content:center flex-start;
        justify-content:flex-start;
        label {
            width:118px;
            color:#1a1a1a;
            font-size:18px;
            font-weight:bold;
            letter-spacing:-1px;
            &.xrp-label {
                width:170px;
            }
        }
        .input-group {
            border:1px solid #ccc;
            position:relative;
            input {
                border:0 none;
                height:44px;
                width:470px;
                text-indent:10px;
                font-size:15px;
                outline:0 none;
                &.xrp-label {
                    width:250px;
                }
            }
            .symbol {
                position:absolute;
                right:19px;
                top:12px;
                font-size:15px;
                font-weight:bold;
            }
        }
    }
    .coin_txt_wrap {
        border-top:2px solid #036;
        margin:30px 0 0 0;
        padding:10px 0 0 0;
        p {
            line-height:27px;
            font-size:15px;
            letter-spacing:-1px;
            color:#1a1a1a;
            &.warn_txt {
                color:#f33;
                font-weight:bold;
            }
            &.bch_warn {
                color:#f33;
            }
        }
    }
    .clearfix {
        margin:15px 0 0 0;
        display:flex;
        flex-direction:row;
        place-content:center flex-end;
        align-items:center;
        justify-content:flex-end;
        button {
            border:0 none;
            font-size:18px;
            font-weight:bold;
            height:38px;
            border-radius:5px;
            margin:0 0 0 13px;
            &.btn_submit {
                background:#036;
                color:#fff;
                padding:0 20px;
                cursor:pointer;
            }
            &.btn_cancel {
                background:#f2f2f2;
                color:#036;
                padding:0 10px;
                cursor:pointer;
            }
        }
    }
}

.coin_deposit_wrap {
    padding:15px 0 0 0;
    .coin_deposit_txt {
        font-size:15px;
        letter-spacing:-1px;
    }
    .container-fluid  {
        margin:16px 0 0 0;
        #fillMe {
            background:#fff !important;
            border:1px solid #f2f2f2 !important;
        }
    }
    .xrp_wrap {
        margin:0 0 20px 0;
        p {
            color:#1a1a1a;
            font-size:18px;
            font-weight:bold;
        }
        .dest_tag_wrap {
            position:relative;
            width:100%;
            height:46px;
            display:flex;
            margin:10px 0 0 0;
            flex-direction:row;
            place-content:center space-between;
            align-items: space-between;
            justify-content:space-between;
            border:1px solid #f2f2f2;
            input {
                border:0 none;
                box-sizing:border-box;
                padding:0 0 0 10px;
                color:#1a1a1a;
                font-size:16px;
                font-weight:bold;
            }
            button {
                height:46px;
                width:36px;
                background:#036;
                color:#fff;
                text-align:center;
                border:0 none;
                font-size:24px;
            }
        }
        .warn_txt {
            color:#f33;
            font-size:15px;
            letter-spacing:-1px;
            margin:5px 0 0 0;
        }
    }
    .qrcode-wrap {
        .qrcode-title {
            color:#1a1a1a;
            font-size:18px;
            font-weight:bold;
        }
        .txt_wrap {
            border-top:2px solid #036;
            margin:22px 0 0 0;
            padding:10px 0 0 0;
            p {
                line-height:27px;
                font-size:15px;
                color:#000;
                letter-spacing:-1px;
                &.warn_txt {
                    color:#f33;
                    font-weight:bold;
                }
            }
        }
    }
    .clearfix {
        margin:15px 0 0 0;
        display:flex;
        flex-direction:row;
        place-content:center flex-end;
        align-items:center;
        justify-content:flex-end;
        button {
            border:0 none;
            font-size:18px;
            font-weight:bold;
            height:38px;
            border-radius:5px;
            margin:0 0 0 13px;
            &.btn_submit {
                background:#036;
                color:#fff;
                padding:0 20px;
                cursor:pointer;
                outline: 0 none;
            }
            &.btn_cancel {
                background:#f2f2f2;
                color:#036;
                padding:0 10px;
                cursor:pointer;
                outline: 0 none;
            }
        }
    }
}

/**/
.container-fluid {
    .wrapper-dropdown-5 {
        p {
            font-size:18px;
            color:#1a1a1a;
            font-weight:bold;
        }
        #fillMe {
            display: flex;
            flex-direction:row;
            place-content:center space-between;
            align-items:center;
            justify-content:space-between;
            word-break: break-all;
            border: 1px solid #ddd;
            background: #f5f5f5;
            padding: 10px;
            margin: 10px 0 0;
            cursor: pointer;
            i {
                font-size: 14px;
                float: none;
                position: unset;
                top: unset;
            }
        }
    }
    #dd {
        font-size: 15px;
        font-weight: 700;
        outline: none;
        position: relative;
        .dropdown {
            width: 100%;
            max-height: 100px;
            overflow: auto;
            position: absolute;
            display: none;
            background: #fff;
            border: 1px solid #ccc;
            box-sizing: border-box;
            padding: 10px;
            &::-webkit-scrollbar-track {
                background: #efefef;
                -webkit-border-radius: 10px;
                -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, .2);
            }
            &::-webkit-scrollbar-thumb {
                height: 50px;
                width: 50px;
                background: #003366;
                -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, .1);
            }
            &::-webkit-scrollbar {
                width: 8px;
                height: 8px;
                border: 3px solid #fff;
            }
            &::-webkit-scrollbar-button:start:decrement, &::-webkit-scrollbar-button:end:increment {
                display: block;
                height: 10px;
                background: #efefef;
            }
            li {
                height: 40px;
                line-height: 40px;
            }
        }
        &.active {
            .dropdown {
                display: block;
            }
        }
        button {
            position:absolute;
            right:0;
            bottom:0;
            height:46px;
            width:36px;
            background:#036;
            color:#fff;
            text-align:center;
            border:0 none;
            font-size:24px;
            cursor:pointer;
            padding:0;
        }
    }
}

.modal_content {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    background: #fff;
    margin-left: -200px;
    padding: 20px 30px;
    box-sizing: border-box;
    position: relative;
}

.modal_content .close-m {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}

.modal_content .information-block,
.modal_content .error_msg {
    width: 100%;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    color: #f7694d;
    margin: 0 0 10px;
}

.widget-modal
 {
    background: rgba(1, 12, 23, .95);
    opacity: 0;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: -100%;
    height: 100%;
    width: 100%;
    justify-content: center;
    z-index: 201;
    visibility: collapse;
}

.widget-modal {
    height: 85vh;
    background: #0d141d;
    border-color: #0d141d;
}

body.modal-open {
    overflow: hidden;
}

body.lock {overflow:hidden;height:100%;width:100%;position:fixed;}

.widget-modal-container,
.register-container,
.login-container {
    padding: 3em;
}

.pad.error-block {
    color: #f33;
    padding: 15px;
    border-radius: 5px;
    width: 300px;
    margin: 0 auto;
    font-weight:bold;
    text-align:center;
}

.pad.information-block {
    color: #06c;
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
    max-width: 350px;
    font-weight: bold;
    text-align:center;
}

.pad.success-block {
    color: lightgreen;
    font-weight: bold;
    padding: 15px;
    border-radius: 5px;
    width: 300px;
    margin: 0 auto;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    transition: all .2s linear;
}

.login-container .pad.error-block {
    width: 80%;
}

h3.text-center.pad {
    color: #d0d6e2;
    width: 50%;
}

.keyPermissions {
    max-width: 275px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    width: calc(100% - 2em);
}

#register a.keyPermissions-link {
    color: rgba(255, 255, 255, 0.8);
    border: none;
    cursor: pointer;
    font-size: 13px;
    padding-left: 0;
    padding-right: 0;
}

.confirm-withdraw-inner,
.verify-email-inner {
    color: white;
    font-size: 26px;
    width: 350px;
    margin: 0 auto;
}

#register h3.text-center.pad,
#myform h2.text-center.success,
.confirm-withdraw-inner .success,
.verify-email-inner .success {
    color: lightgreen;
    font-weight: bold;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    transition: all .2s linear;
}

.confirm-withdraw-inner .error,
.verify-email-inner .error {
    color: lightcoral;
    font-weight: bold;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    transition: all .2s linear;
}

label {
    margin-bottom: initial;
}

#register .input {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.register-checkbox {
    width: 13px;
    height: 13px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    position: relative;
    top: -1px;
    margin-right: 10px;
}

.register-checkbox-label {
    color: white;
    display: block;
    padding-left: 15px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    max-width: 350px;
    font-size: 12px;
}

.input .fa {
    float: right;
    position: absolute;
    right: 0;
    top: 0;
    line-height: 35px;
    font-size: 24px;
    /* color: #26b14f; */
    color: #fff;
}

#register .input .fa {
    line-height: 35px;
    font-size: 20px;
}

.input .fa.completed,
.input .fa.completed {
    color: #26b14f;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 50000s ease-in-out 0s;
    /* Delays(disables) yellow background on autofill fields */
}

.input-field:focus {
    outline: none;
}

.hide {
    display: none;
}

.btn_submit {
    background: #045696;
    cursor: pointer;
}

.btn_cancel {
    background: #999;
    color: #fff;
    cursor: pointer;
}

.form-group {
    margin-bottom:15px;
}

.popup_cont #terms {
    width: 100%;
}

.popup_cont .tab-tit {
    text-align: right;

}

.popup_cont .tab-tit li {
    display: inline-block;
    vertical-align: top;
    width: 50px;
    height: 30px;
    background: #Fff;
    color: #999;
}

.popup_cont .tab-tit li.on {

}

.popup_cont .tab-tit li.on a {
    background: #222;
    color: #fff;
}

.popup_cont .tab-tit li a {
    display: block;
    text-align: center;
    border-radius: 5px;
    line-height: 30px;
    border: 1px solid #ddd;
    box-sizing: border-box;
}

.popup_cont .tab-con-wrap {
}

.popup_cont .tab-con-wrap > div {
    display: none;
}

.popup_cont .tab-con-wrap > div.on {
    display: block;
}

.popup_cont .inner_txt {
    width: 100%;
    margin: 0 0 20px;
    overflow: hidden;
}

.popup_cont strong {
    display: block;
    padding: 0 10px 15px;
    margin: 0 0 15px;
    font-size: 26px;
    font-family: 'NanumSquare';
    font-weight: 900;
    color: #343434;
    border-bottom: 2px solid #003366;
}

.popup_cont h2 {
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1em;
    color: #333;
}

.popup_cont h3 {
    display: table;
    margin: 10px 0 20px;
    font-size: 1.1rem;
    font-weight: normal;
    line-height: 1em;
    color: #ee1c25;
}

.popup_cont p {
    margin: 0 0 15px;
    font-size: 1rem;
    line-height: 1.5em;
    color: #333;
}

.popup_cont .inner_txt {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
    border-bottom: 2px solid #003366;
}

.terms {
    position: relative;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: hidden;
}

.terms label {
    display: table;
    margin: 0 0 7px;
    cursor: pointer;
}

.terms input {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
}

.terms .terms_btn {
    position: absolute;
    right: 20px;
    bottom: 10px;
}

.terms .terms_btn button {
    width: 80px;
    height: 35px;
    color: #333;
    cursor: no-drop;
    background: #999;
    color: #fff;
    border: none;
    border-radius: 3px;
}
#terms {
	width: 1000px;
	margin: 0 auto;
	overflow: hidden;
}
#terms .title {
	width: 100%;
	overflow: hidden;
	margin: 30px 0 30px;
	padding: 0 0 5px;
	border-bottom: 1px solid #003366;
}
#terms .title h2 {
	font-family: 'NanumSquare';
	font-size: 28px;
	font-weight: bold;
	color: #003366;
}
#terms .content {
	width: 100%;
	overflow: hidden;
	padding: 0 10px 20px;
	box-sizing: border-box;
	border: 1px solid #ddd;
    margin: 0 0 50px;
}
#terms .content h4 {
  font-size: 1.4rem;
  font-weight: 700;
  display: table;
  border-bottom: 1px solid #000;
  padding: 20px 0 0;
  margin: 0 0 15px;
}
#terms .content h5 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 20px 0 10px;
}
#terms .content p {
  font-size: 1rem;
  line-height: 1.6em;
  word-break: keep-all;
  margin: 0 0 8px;
  font-weight: 300;
}
#terms .content > ul > li {
  font-size: 1rem;
  line-height: 1.6em;
  margin: 0 0 15px;
  word-break: keep-all;
}
#terms .content > ul > li ul li {
  padding-left: 20px;
  line-height: 1.6em;
  margin: 3px 0;
  font-weight: 300;
}
#terms .content table {
  width: 100%;
  overflow: hidden;
  margin: 0 0 20px;
}
#terms .content tr th {
  padding: 5px 10px;
  background: lightgrey;
  border: 1px solid #000;
  font-size: 1rem;
  text-align: center;
}
#terms .content tr td {
  padding: 5px;
  border: 1px solid #000;
  font-size: 1rem;
  word-break: keep-all;
}
#terms .content .terms_type1 {
  width: 20%;
}
#terms .content .terms_type2 {
  width: 40%;
}
#terms .content .terms_type3 {
  width: 20%;
}
#terms .content .terms_type4 {
  width: 20%;
}
.openModal {
    display:block;
}
.closeModal {
    display:none;
}
@media(max-width:1024px) {
    .bootstrap-growl {
        min-width: 15rem;
        max-width: 20rem;
        background: #fff;
        padding: 1rem;
        padding-right:2rem;
        height:auto;
        position:fixed !important;
        border: 1px solid #999999;
        border-radius: 3px;
        font-size: 12px;
        font-weight: bold;
         a {
            position: absolute;
            top: 0.4rem;
            right: 0.8rem;
        }
    }
    .ap-modal_inner {
        width:95% !important;
        top:70px;
        left:10px;
        transform:unset;
        padding:15px 15px 8px;
        .deposit_wrap {
            overflow-y:scroll;
            -webkit-overflow-scrolling: touch;
            height:63vh;
            .info-setting {
                flex-direction:column;
                place-content:flex-start;
                align-items:flex-start;
                justify-content:flex-start;
                .row-group {
                    width:100%;
                    flex-direction:column;
                    place-content:flex-start;
                    align-items:flex-start;
                    justify-content:flex-start;                   
                    &.account_num {
                        position:relative;
                        .input-group {
                            width:100%;
                        }
                        .copy-acc-number {
                            position:absolute;
                            right:0;
                            bottom:14px;
                        }
                    }
                }
                .form-group {
                    width:100%;
                    flex-direction:column;
                    place-content:flex-start;
                    align-items:flex-start;
                    justify-content:flex-start;
                    label {
                        padding:0;
                        width:unset;
                    }
                    .input-group {
                        margin:5px 0 0 0;
                        width:100% !important;
                        input {
                            width:100% !important;
                        }
                    }
                    &.row-form {
                        label {
                            padding:0;
                            width:unset;
                        }
                        .input-group {
                            input {
                                width:100% !important;
                                margin:5px 0 0 0;
                            }
                        }
                    }
                    .wrap-form {
                        .krw-caution {
                            font-size:0.5rem !important;
                        }
                    }
                }
            }
        }
        .withdraw_wrap {
            overflow-y:scroll;
            -webkit-overflow-scrolling: touch;
            height:63vh;
            .inf_wrap {
                .form-group {
                    width:100%;
                    flex-direction:column;
                    place-content:flex-start;
                    align-items:flex-start;
                    justify-content:flex-start;
                    label {
                        padding:0;
                        width:unset;
                    }
                    .input-group {
                        margin:5px 0 0 0;
                        width:100%;
                        input {
                            width:100%;
                            min-width:unset;
                        }
                    }
                }
            }
        }
        .coin_deposit_wrap {
            overflow-y:scroll;
            -webkit-overflow-scrolling: touch;
            height:63vh;
            #fillMe {
                width:calc(100% - 36px) !important;
                font-size:0.8rem !important;
                padding:0 5px !important;
                height:46px;
                box-sizing:border-box;
            }
        }
        .coin_inf_wrap {
            overflow-y:scroll;
            -webkit-overflow-scrolling: touch;
            height:63vh;
            .row-group {
                width:100%;
                flex-direction:column;
                place-content:flex-start;
                align-items:flex-start;
                justify-content:flex-start;
            }
            .form-group {
                width:100%;
                flex-direction:column;
                place-content:flex-start;
                align-items:flex-start;
                justify-content:flex-start;
                label {
                    padding:0;
                    width:unset;
                }
                .input-group {
                    margin:5px 0 0 0;
                    width:99%;
                    input {
                        width:100%;
                    }
                }
                &.row-form {
                    label {
                        padding:0;
                        width:unset;
                    }
                    .input-group {
                        input {
                            margin:5px 0 0 0;
                        }
                    }
                }
            }
        }
    }
}
`
