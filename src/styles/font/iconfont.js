(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-jiantou" viewBox="0 0 1024 1024">'+""+'<path d="M591.552 1019.072 54.72 512.96 591.488 4.864 624.512 39.744 124.608 512.896 624.448 984.192Z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-gengduo" viewBox="0 0 1024 1024">'+""+'<path d="M128.259664 256.17345l85.275175 0 0 85.275175-85.275175 0L128.259664 256.17345z"  ></path>'+""+'<path d="M341.448114 256.17345l554.291199 0 0 85.275175L341.448114 341.448626 341.448114 256.17345z"  ></path>'+""+'<path d="M128.259664 469.361901l85.275175 0 0 85.276199-85.275175 0L128.259664 469.361901z"  ></path>'+""+'<path d="M341.448114 469.361901l554.291199 0 0 85.276199L341.448114 554.638099 341.448114 469.361901z"  ></path>'+""+'<path d="M128.259664 682.551374l85.275175 0 0 85.275175-85.275175 0L128.259664 682.551374z"  ></path>'+""+'<path d="M341.448114 682.551374l554.291199 0 0 85.275175L341.448114 767.82655 341.448114 682.551374z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)