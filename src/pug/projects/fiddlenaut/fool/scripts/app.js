!function n(r,t,e){function i(s,a){if(!t[s]){if(!r[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=t[s]={exports:{}};r[s][0].call(l.exports,function(n){var t=r[s][1][n];return i(t?t:n)},l,l.exports,n,r,t,e)}return t[s].exports}for(var o="function"==typeof require&&require,s=0;s<e.length;s++)i(e[s]);return i}({1:[function(n,r,t){(function(){var r,t,e,i,o,s,a,u,c,l,f,p,h,d,m,g,v,w,y,b,x,k,M,A,j,z,S,T,N;r=n("domready"),t=n("ua-parser-js"),e=n("prelude-ls"),i=e.head,o=e.each,s=e.map,a=function(){return document.querySelectorAll.apply(document,arguments)},u=i(a("header canvas")),c=new t,c.setUA(navigator.userAgent),c=c.getResult(),l="Android"===(e=c.os.name)||"iOS"===e||"Firefox OS"===e,h=function(){return u.width=u.offsetWidth,u.height=u.offsetHeight},d=function(){return f=u.width/2,p=u.height/2+50},m=function(){return h(),d()},m(),g=u.getContext("2d"),v=.5,w=1,y=u.width>800?1e3:500,b=10,x=40,k=function(){var n,r,t,e=[];for(n=0,r=y;r>n;++n)t=n,e.push({point:{x:Math.random()*u.width,y:Math.random()*(u.height+x)-x},size:Math.random()*(w-v)+v,tailLength:Math.floor((x-b)*Math.random())+b,velocity:.5+.3*Math.random()});return e},M=k(),A=function(n,r){var t,e,i,o;return r*=Math.PI/180,t=Math.sin(r),e=Math.cos(r),i=n.x-f,o=n.y-p,n.x=f+i*e-o*t,n.y=p+i*t+o*e},j=function(n){var r,t,e,i;return A(n.point,n.velocity/10),r=n.point,t=r.x,e=r.y,i=n.tailLength,t>u.width?n.point.x=-i:-i>t?n.point.x=-i:e>u.height?(n.point.x=u.width-t,n.point.y=u.height):-i-10>e?(n.point.x=u.width-t,n.point.y=-i-10):void 0},z=function(){var n,r,t,e,i,o,s,a,c,l,f,p,h,d,m,v;for(g.clearRect(0,0,u.width,u.height),n=0,t=(r=M).length;t>n;++n){for(e=r[n],i=e.point,o=i.x,s=i.y,a=e.tailLength,c=e.size,l={x:o,y:s},g.beginPath(),f=1;a>=f;++f)p=f,h=p/a,d="rgba(255, 255, 255, "+h+")",m=c*h,A(l,.1),v=g,v.arc(l.x,l.y,m,0,2*Math.PI),v.fillStyle=d;g.fill()}},S=function(){o(j,M)},T=function(){S(),z()},N=function(){return l||requestAnimationFrame(N),T()},window.onresize=function(){return u.width!==u.offsetWidth?(m(),M=k(),z()):void 0},r(N)}).call(this)},{domready:2,"prelude-ls":8,"ua-parser-js":9}],2:[function(n,r,t){!function(n,t){"undefined"!=typeof r?r.exports=t():"function"==typeof define&&"object"==typeof define.amd?define(t):this[n]=t()}("domready",function(){var n,r=[],t=document,e=t.documentElement.doScroll,i="DOMContentLoaded",o=(e?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return o||t.addEventListener(i,n=function(){for(t.removeEventListener(i,n),o=1;n=r.shift();)n()}),function(n){o?setTimeout(n,0):r.push(n)}})},{}],3:[function(n,r,t){function e(n,r){var t,e=function(i){return n.length>1?function(){var o=i?i.concat():[];return t=r?t||this:this,o.push.apply(o,arguments)<n.length&&arguments.length?e.call(t,o):n.apply(t,o)}:n};return e()}var i,o,s,a,u,c,l=[].slice,f={}.toString;i=e(function(n,r){return n.apply(null,r)}),o=function(n){return e(n)},s=e(function(n,r,t){return n(t,r)}),a=function(n){return function(r){return function(){return n(r(r)).apply(null,arguments)}}(function(r){return function(){return n(r(r)).apply(null,arguments)}})},u=e(function(n,r,t,e){return n(r(t),r(e))}),c=function(n){var r;return r={},function(){var t,e,i;return t=l.call(arguments),e=function(){var n,r,e,o=[];for(n=0,e=(r=t).length;e>n;++n)i=r[n],o.push(i+f.call(i).slice(8,-1));return o}().join(""),r[e]=e in r?r[e]:n.apply(null,t)}},r.exports={curry:o,flip:s,fix:a,apply:i,over:u,memoize:c}},{}],4:[function(n,r,t){function e(n,r){var t,e=function(i){return n.length>1?function(){var o=i?i.concat():[];return t=r?t||this:this,o.push.apply(o,arguments)<n.length&&arguments.length?e.call(t,o):n.apply(t,o)}:n};return e()}function i(n,r){for(var t=-1,e=r.length>>>0;++t<e;)if(n===r[t])return!0;return!1}function o(){var n=arguments;return function(){var r,t;for(t=n[0].apply(this,arguments),r=1;r<n.length;++r)t=n[r](t);return t}}function s(n){return!n}var a,u,c,l,f,p,h,d,m,g,v,w,y,b,x,k,M,A,j,z,S,T,N,E,O,L,B,I,q,W,C,R,_,U,P,D,F,V,X,G,H,Z,K,Y,J,Q,$,nn,rn,tn,en,on,sn,an,un,cn,ln,fn,pn,hn,dn,mn,gn,vn,wn,yn,bn,xn,kn,Mn={}.toString,An=[].slice;a=e(function(n,r){var t,e,i;for(t=0,e=r.length;e>t;++t)i=r[t],n(i);return r}),u=e(function(n,r){var t,e,i,o=[];for(t=0,e=r.length;e>t;++t)i=r[t],o.push(n(i));return o}),c=function(n){var r,t,e,i=[];for(r=0,t=n.length;t>r;++r)e=n[r],e&&i.push(e);return i},l=e(function(n,r){var t,e,i,o=[];for(t=0,e=r.length;e>t;++t)i=r[t],n(i)&&o.push(i);return o}),f=e(function(n,r){var t,e,i,o=[];for(t=0,e=r.length;e>t;++t)i=r[t],n(i)||o.push(i);return o}),p=e(function(n,r){var t,e,i,o,s;for(t=[],e=[],i=0,o=r.length;o>i;++i)s=r[i],(n(s)?t:e).push(s);return[t,e]}),h=e(function(n,r){var t,e,i;for(t=0,e=r.length;e>t;++t)if(i=r[t],n(i))return i}),d=m=function(n){return n[0]},g=function(n){return n.length?n.slice(1):void 0},v=function(n){return n[n.length-1]},w=function(n){return n.length?n.slice(0,-1):void 0},y=function(n){return!n.length},b=function(n){return n.concat().reverse()},x=function(n){var r,t,e,o;for(r=[],t=0,e=n.length;e>t;++t)o=n[t],i(o,r)||r.push(o);return r},k=e(function(n,r){var t,e,o,s,a,u=[];for(t=[],e=0,o=r.length;o>e;++e)s=r[e],a=n(s),i(a,t)||(t.push(a),u.push(s));return u}),M=A=e(function(n,r,t){var e,i,o;for(e=0,i=t.length;i>e;++e)o=t[e],r=n(r,o);return r}),j=z=e(function(n,r){return M(n,r[0],r.slice(1))}),S=e(function(n,r,t){var e,i;for(e=t.length-1;e>=0;--e)i=t[e],r=n(i,r);return r}),T=e(function(n,r){return S(n,r[r.length-1],r.slice(0,-1))}),N=e(function(n,r){var t,e,i;for(t=[],e=r;null!=(i=n(e));)t.push(i[0]),e=i[1];return t}),E=function(n){return[].concat.apply([],n)},O=e(function(n,r){var t;return[].concat.apply([],function(){var e,i,o,s=[];for(e=0,o=(i=r).length;o>e;++e)t=i[e],s.push(n(t));return s}())}),L=function(n){var r;return[].concat.apply([],function(){var t,e,i,o=[];for(t=0,i=(e=n).length;i>t;++t)r=e[t],o.push("Array"===Mn.call(r).slice(8,-1)?L(r):r);return o}())},B=function(n){var r,t,e,o,s,a,u,c;r=An.call(arguments,1),t=[];n:for(e=0,o=n.length;o>e;++e){for(s=n[e],a=0,u=r.length;u>a;++a)if(c=r[a],i(s,c))continue n;t.push(s)}return t},I=function(n){var r,t,e,o,s,a,u,c;r=An.call(arguments,1),t=[];n:for(e=0,o=n.length;o>e;++e){for(s=n[e],a=0,u=r.length;u>a;++a)if(c=r[a],!i(s,c))continue n;t.push(s)}return t},q=function(){var n,r,t,e,o,s,a,u;for(n=An.call(arguments),r=[],t=0,e=n.length;e>t;++t)for(o=n[t],s=0,a=o.length;a>s;++s)u=o[s],i(u,r)||r.push(u);return r},W=e(function(n,r){var t,e,i,o,s;for(t={},e=0,i=r.length;i>e;++e)o=r[e],s=n(o),s in t?t[s]+=1:t[s]=1;return t}),C=e(function(n,r){var t,e,i,o,s;for(t={},e=0,i=r.length;i>e;++e)o=r[e],s=n(o),s in t?t[s].push(o):t[s]=[o];return t}),R=function(n){var r,t,e;for(r=0,t=n.length;t>r;++r)if(e=n[r],!e)return!1;return!0},_=function(n){var r,t,e;for(r=0,t=n.length;t>r;++r)if(e=n[r])return!0;return!1},U=e(function(n,r){var t,e,i;for(t=0,e=r.length;e>t;++t)if(i=r[t],n(i))return!0;return!1}),P=e(function(n,r){var t,e,i;for(t=0,e=r.length;e>t;++t)if(i=r[t],!n(i))return!1;return!0}),D=function(n){return n.concat().sort(function(n,r){return n>r?1:r>n?-1:0})},F=e(function(n,r){return r.concat().sort(n)}),V=e(function(n,r){return r.concat().sort(function(r,t){return n(r)>n(t)?1:n(r)<n(t)?-1:0})}),X=function(n){var r,t,e,i;for(r=0,t=0,e=n.length;e>t;++t)i=n[t],r+=i;return r},G=function(n){var r,t,e,i;for(r=1,t=0,e=n.length;e>t;++t)i=n[t],r*=i;return r},H=Z=function(n){var r,t,e,i;for(r=0,t=0,e=n.length;e>t;++t)i=n[t],r+=i;return r/n.length},K=function(n){var r,t,e,i,o;for(r=n[0],t=0,i=(e=n.slice(1)).length;i>t;++t)o=e[t],o>r&&(r=o);return r},Y=function(n){var r,t,e,i,o;for(r=n[0],t=0,i=(e=n.slice(1)).length;i>t;++t)o=e[t],r>o&&(r=o);return r},J=e(function(n,r){var t,e,i,o,s;for(t=r[0],e=0,o=(i=r.slice(1)).length;o>e;++e)s=i[e],n(s)>n(t)&&(t=s);return t}),Q=e(function(n,r){var t,e,i,o,s;for(t=r[0],e=0,o=(i=r.slice(1)).length;o>e;++e)s=i[e],n(s)<n(t)&&(t=s);return t}),$=nn=e(function(n,r,t){var e,i;return e=r,[r].concat(function(){var r,o,s,a=[];for(r=0,s=(o=t).length;s>r;++r)i=o[r],a.push(e=n(e,i));return a}())}),rn=tn=e(function(n,r){return r.length?$(n,r[0],r.slice(1)):void 0}),en=e(function(n,r,t){return t=t.concat().reverse(),$(n,r,t).reverse()}),on=e(function(n,r){return r.length?(r=r.concat().reverse(),$(n,r[0],r.slice(1)).reverse()):void 0}),sn=e(function(n,r,t){return t.slice(n,r)}),an=e(function(n,r){return 0>=n?r.slice(0,0):r.slice(0,n)}),un=e(function(n,r){return 0>=n?r:r.slice(n)}),cn=e(function(n,r){return[an(n,r),un(n,r)]}),ln=e(function(n,r){var t,e;if(t=r.length,!t)return r;for(e=0;t>e&&n(r[e]);)e+=1;return r.slice(0,e)}),fn=e(function(n,r){var t,e;if(t=r.length,!t)return r;for(e=0;t>e&&n(r[e]);)e+=1;return r.slice(e)}),pn=e(function(n,r){return[ln(n,r),fn(n,r)]}),hn=e(function(n,r){return pn(o(n,s),r)}),dn=e(function(n,r){var t,e,i,o,s,a;for(t=[],e=r.length,i=0,o=n.length;o>i&&(s=i,a=n[i],s!==e);++i)t.push([a,r[s]]);return t}),mn=e(function(n,r,t){var e,i,o,s,a,u;for(e=[],i=t.length,o=0,s=r.length;s>o&&(a=o,u=r[o],a!==i);++o)e.push(n(u,t[a]));return e}),gn=function(){var n,r,t,e,i,o,s,a,u,c=[];for(n=An.call(arguments),r=void 0,t=0,e=n.length;e>t;++t)i=n[t],r<=(o=i.length)||(r=o);for(t=0;r>t;++t){for(s=t,a=[],u=0,e=n.length;e>u;++u)i=n[u],a.push(i[s]);c.push(a)}return c},vn=function(n){function r(){var n,r,e,i=[];for(n=0,e=(r=t).length;e>n;++n)s=r[n],i.push(s[u]);return i}var t,e,i,o,s,a,u,c=[];for(t=An.call(arguments,1),e=void 0,i=0,o=t.length;o>i;++i)s=t[i],e<=(a=s.length)||(e=a);for(i=0;e>i;++i)u=i,c.push(n.apply(null,r()));return c},wn=e(function(n,r){return 0>n?r[r.length+n]:r[n]}),yn=e(function(n,r){var t,e,i,o;for(t=0,e=r.length;e>t;++t)if(i=t,o=r[t],o===n)return i}),bn=e(function(n,r){var t,e,i,o,s=[];for(t=0,e=r.length;e>t;++t)i=t,o=r[t],o===n&&s.push(i);return s}),xn=e(function(n,r){var t,e,i,o;for(t=0,e=r.length;e>t;++t)if(i=t,o=r[t],n(o))return i}),kn=e(function(n,r){var t,e,i,o,s=[];for(t=0,e=r.length;e>t;++t)i=t,o=r[t],n(o)&&s.push(i);return s}),r.exports={each:a,map:u,filter:l,compact:c,reject:f,partition:p,find:h,head:d,first:m,tail:g,last:v,initial:w,empty:y,reverse:b,difference:B,intersection:I,union:q,countBy:W,groupBy:C,fold:M,fold1:j,foldl:A,foldl1:z,foldr:S,foldr1:T,unfoldr:N,andList:R,orList:_,any:U,all:P,unique:x,uniqueBy:k,sort:D,sortWith:F,sortBy:V,sum:X,product:G,mean:H,average:Z,concat:E,concatMap:O,flatten:L,maximum:K,minimum:Y,maximumBy:J,minimumBy:Q,scan:$,scan1:rn,scanl:nn,scanl1:tn,scanr:en,scanr1:on,slice:sn,take:an,drop:un,splitAt:cn,takeWhile:ln,dropWhile:fn,span:pn,breakList:hn,zip:dn,zipWith:mn,zipAll:gn,zipAllWith:vn,at:wn,elemIndex:yn,elemIndices:bn,findIndex:xn,findIndices:kn}},{}],5:[function(n,r,t){function e(n,r){var t,e=function(i){return n.length>1?function(){var o=i?i.concat():[];return t=r?t||this:this,o.push.apply(o,arguments)<n.length&&arguments.length?e.call(t,o):n.apply(t,o)}:n};return e()}var i,o,s,a,u,c,l,f,p,h,d,m,g,v,w,y,b,x,k,M,A,j,z,S,T,N,E,O,L,B,I,q;i=e(function(n,r){return n>r?n:r}),o=e(function(n,r){return r>n?n:r}),s=function(n){return-n},a=Math.abs,u=function(n){return 0>n?-1:n>0?1:0},c=e(function(n,r){return~~(n/r)}),l=e(function(n,r){return n%r}),f=e(function(n,r){return Math.floor(n/r)}),p=e(function(n,r){var t;return(n%(t=r)+t)%t}),h=function(n){return 1/n},d=Math.PI,m=2*d,g=Math.exp,v=Math.sqrt,w=Math.log,y=e(function(n,r){return Math.pow(n,r)}),b=Math.sin,x=Math.tan,k=Math.cos,M=Math.asin,A=Math.acos,j=Math.atan,z=e(function(n,r){return Math.atan2(n,r)}),S=function(n){return~~n},T=Math.round,N=Math.ceil,E=Math.floor,O=function(n){return n!==n},L=function(n){return n%2===0},B=function(n){return n%2!==0},I=e(function(n,r){var t;for(n=Math.abs(n),r=Math.abs(r);0!==r;)t=n%r,n=r,r=t;return n}),q=e(function(n,r){return Math.abs(Math.floor(n/I(n,r)*r))}),r.exports={max:i,min:o,negate:s,abs:a,signum:u,quot:c,rem:l,div:f,mod:p,recip:h,pi:d,tau:m,exp:g,sqrt:v,ln:w,pow:y,sin:b,tan:x,cos:k,acos:A,asin:M,atan:j,atan2:z,truncate:S,round:T,ceiling:N,floor:E,isItNaN:O,even:L,odd:B,gcd:I,lcm:q}},{}],6:[function(n,r,t){function e(n,r){var t,e=function(i){return n.length>1?function(){var o=i?i.concat():[];return t=r?t||this:this,o.push.apply(o,arguments)<n.length&&arguments.length?e.call(t,o):n.apply(t,o)}:n};return e()}var i,o,s,a,u,c,l,f,p,h,d,m,g,v;i=function(n){var r,t,e=[];for(r in n)t=n[r],e.push(t);return e},o=function(n){var r,t=[];for(r in n)t.push(r);return t},s=function(n){var r,t,e,i={};for(r=0,t=n.length;t>r;++r)e=n[r],i[e[0]]=e[1];return i},a=function(n){var r,t,e=[];for(r in n)t=n[r],e.push([r,t]);return e},u=e(function(n,r){var t,e,i,o,s={};for(t=0,e=n.length;e>t;++t)i=t,o=n[t],s[o]=r[i];return s}),c=function(n){var r,t,e,i;r=[],t=[];for(e in n)i=n[e],r.push(e),t.push(i);return[r,t]},l=function(n){var r;for(r in n)return!1;return!0},f=e(function(n,r){var t,e;for(t in r)e=r[t],n(e);return r}),p=e(function(n,r){var t,e,i={};for(t in r)e=r[t],i[t]=n(e);return i}),h=function(n){var r,t,e={};for(r in n)t=n[r],t&&(e[r]=t);return e},d=e(function(n,r){var t,e,i={};for(t in r)e=r[t],n(e)&&(i[t]=e);return i}),m=e(function(n,r){var t,e,i={};for(t in r)e=r[t],n(e)||(i[t]=e);return i}),g=e(function(n,r){var t,e,i,o;t={},e={};for(i in r)o=r[i],(n(o)?t:e)[i]=o;return[t,e]}),v=e(function(n,r){var t,e;for(t in r)if(e=r[t],n(e))return e}),r.exports={values:i,keys:o,pairsToObj:s,objToPairs:a,listsToObj:u,objToLists:c,empty:l,each:f,map:p,filter:d,compact:h,reject:m,partition:g,find:v}},{}],7:[function(n,r,t){function e(n,r){var t,e=function(i){return n.length>1?function(){var o=i?i.concat():[];return t=r?t||this:this,o.push.apply(o,arguments)<n.length&&arguments.length?e.call(t,o):n.apply(t,o)}:n};return e()}var i,o,s,a,u,c,l,f,p,h,d,m,g;i=e(function(n,r){return r.split(n)}),o=e(function(n,r){return r.join(n)}),s=function(n){return n.length?n.split("\n"):[]},a=function(n){return n.join("\n")},u=function(n){return n.length?n.split(/[ ]+/):[]},c=function(n){return n.join(" ")},l=function(n){return n.split("")},f=function(n){return n.join("")},p=function(n){return n.split("").reverse().join("")},h=e(function(n,r){var t,e;for(t="",e=0;n>e;++e)t+=r;return t}),d=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},m=function(n){return n.replace(/[-_]+(.)?/g,function(n,r){return(null!=r?r:"").toUpperCase()})},g=function(n){return n.replace(/([^-A-Z])([A-Z]+)/g,function(n,r,t){return r+"-"+(t.length>1?t:t.toLowerCase())}).replace(/^([A-Z]+)/,function(n,r){return r.length>1?r+"-":r.toLowerCase()})},r.exports={split:i,join:o,lines:s,unlines:a,words:u,unwords:c,chars:l,unchars:f,reverse:p,repeat:h,capitalize:d,camelize:m,dasherize:g}},{}],8:[function(n,r,t){function e(n,r){var t,e=function(i){return n.length>1?function(){var o=i?i.concat():[];return t=r?t||this:this,o.push.apply(o,arguments)<n.length&&arguments.length?e.call(t,o):n.apply(t,o)}:n};return e()}var i,o,s,a,u,c,l,f,p,h={}.toString;i=n("./Func.js"),o=n("./List.js"),s=n("./Obj.js"),a=n("./Str.js"),u=n("./Num.js"),c=function(n){return n},l=e(function(n,r){return h.call(r).slice(8,-1)===n}),f=e(function(n,r){var t,e=[];for(t=0;n>t;++t)e.push(r);return e}),a.empty=o.empty,a.slice=o.slice,a.take=o.take,a.drop=o.drop,a.splitAt=o.splitAt,a.takeWhile=o.takeWhile,a.dropWhile=o.dropWhile,a.span=o.span,a.breakStr=o.breakList,p={Func:i,List:o,Obj:s,Str:a,Num:u,id:c,isType:l,replicate:f},p.each=o.each,p.map=o.map,p.filter=o.filter,p.compact=o.compact,p.reject=o.reject,p.partition=o.partition,p.find=o.find,p.head=o.head,p.first=o.first,p.tail=o.tail,p.last=o.last,p.initial=o.initial,p.empty=o.empty,p.reverse=o.reverse,p.difference=o.difference,p.intersection=o.intersection,p.union=o.union,p.countBy=o.countBy,p.groupBy=o.groupBy,p.fold=o.fold,p.foldl=o.foldl,p.fold1=o.fold1,p.foldl1=o.foldl1,p.foldr=o.foldr,p.foldr1=o.foldr1,p.unfoldr=o.unfoldr,p.andList=o.andList,p.orList=o.orList,p.any=o.any,p.all=o.all,p.unique=o.unique,p.uniqueBy=o.uniqueBy,p.sort=o.sort,p.sortWith=o.sortWith,p.sortBy=o.sortBy,p.sum=o.sum,p.product=o.product,p.mean=o.mean,p.average=o.average,p.concat=o.concat,p.concatMap=o.concatMap,p.flatten=o.flatten,p.maximum=o.maximum,p.minimum=o.minimum,p.maximumBy=o.maximumBy,p.minimumBy=o.minimumBy,p.scan=o.scan,p.scanl=o.scanl,p.scan1=o.scan1,p.scanl1=o.scanl1,p.scanr=o.scanr,p.scanr1=o.scanr1,p.slice=o.slice,p.take=o.take,p.drop=o.drop,p.splitAt=o.splitAt,p.takeWhile=o.takeWhile,p.dropWhile=o.dropWhile,p.span=o.span,p.breakList=o.breakList,p.zip=o.zip,p.zipWith=o.zipWith,p.zipAll=o.zipAll,p.zipAllWith=o.zipAllWith,p.at=o.at,p.elemIndex=o.elemIndex,p.elemIndices=o.elemIndices,p.findIndex=o.findIndex,p.findIndices=o.findIndices,p.apply=i.apply,p.curry=i.curry,p.flip=i.flip,p.fix=i.fix,p.over=i.over,p.split=a.split,p.join=a.join,p.lines=a.lines,p.unlines=a.unlines,p.words=a.words,p.unwords=a.unwords,p.chars=a.chars,p.unchars=a.unchars,p.repeat=a.repeat,p.capitalize=a.capitalize,p.camelize=a.camelize,p.dasherize=a.dasherize,p.values=s.values,p.keys=s.keys,p.pairsToObj=s.pairsToObj,p.objToPairs=s.objToPairs,p.listsToObj=s.listsToObj,p.objToLists=s.objToLists,p.max=u.max,p.min=u.min,p.negate=u.negate,p.abs=u.abs,p.signum=u.signum,p.quot=u.quot,p.rem=u.rem,p.div=u.div,p.mod=u.mod,p.recip=u.recip,p.pi=u.pi,p.tau=u.tau,p.exp=u.exp,p.sqrt=u.sqrt,p.ln=u.ln,p.pow=u.pow,p.sin=u.sin,p.tan=u.tan,p.cos=u.cos,p.acos=u.acos,p.asin=u.asin,p.atan=u.atan,p.atan2=u.atan2,p.truncate=u.truncate,p.round=u.round,p.ceiling=u.ceiling,p.floor=u.floor,p.isItNaN=u.isItNaN,p.even=u.even,p.odd=u.odd,p.gcd=u.gcd,p.lcm=u.lcm,p.VERSION="1.1.2",r.exports=p},{"./Func.js":3,"./List.js":4,"./Num.js":5,"./Obj.js":6,"./Str.js":7}],9:[function(n,r,t){!function(n,e){"use strict";var i="0.7.7",o="",s="?",a="function",u="undefined",c="object",l="string",f="major",p="model",h="name",d="type",m="vendor",g="version",v="architecture",w="console",y="mobile",b="tablet",x="smarttv",k="wearable",M="embedded",A={extend:function(n,r){for(var t in r)-1!=="browser cpu device engine os".indexOf(t)&&r[t].length%2===0&&(n[t]=r[t].concat(n[t]));return n},has:function(n,r){return"string"==typeof n?-1!==r.toLowerCase().indexOf(n.toLowerCase()):!1},lowerize:function(n){return n.toLowerCase()},major:function(n){return typeof n===l?n.split(".")[0]:e}},j={rgx:function(){for(var n,r,t,i,o,s,l,f=0,p=arguments;f<p.length&&!s;){var h=p[f],d=p[f+1];if(typeof n===u){n={};for(i in d)o=d[i],typeof o===c?n[o[0]]=e:n[o]=e}for(r=t=0;r<h.length&&!s;)if(s=h[r++].exec(this.getUA()))for(i=0;i<d.length;i++)l=s[++t],o=d[i],typeof o===c&&o.length>0?2==o.length?n[o[0]]=typeof o[1]==a?o[1].call(this,l):o[1]:3==o.length?n[o[0]]=typeof o[1]!==a||o[1].exec&&o[1].test?l?l.replace(o[1],o[2]):e:l?o[1].call(this,l,o[2]):e:4==o.length&&(n[o[0]]=l?o[3].call(this,l.replace(o[1],o[2])):e):n[o]=l?l:e;f+=2}return n},str:function(n,r){for(var t in r)if(typeof r[t]===c&&r[t].length>0){for(var i=0;i<r[t].length;i++)if(A.has(r[t][i],n))return t===s?e:t}else if(A.has(r[t],n))return t===s?e:t;return n}},z={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},S={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,g],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],g],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i],[h,g],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i,/(Edge)\/((\d+)?[\w\.]+)/i],[[h,"IE"],g],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],g],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],g],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[h,g],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],g],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],g],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[g,[h,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[g,[h,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[g,[h,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[g,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[g,h],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[g,j.str,z.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,g],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],g],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,g]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,A.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[v,/ower/,"",A.lowerize]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[v,A.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[p,m,[d,b]],[/applecoremedia\/[\w\.]+ \((ipad)/],[p,[m,"Apple"],[d,b]],[/(apple\s{0,1}tv)/i],[[p,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,p,[d,b]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[p,[m,"Amazon"],[d,b]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[p,j.str,z.device.amazon.model],[m,"Amazon"],[d,y]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[p,m,[d,y]],[/\((ip[honed|\s\w*]+);/i],[p,[m,"Apple"],[d,y]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,p,[d,y]],[/\(bb10;\s(\w+)/i],[p,[m,"BlackBerry"],[d,y]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[p,[m,"Asus"],[d,b]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[p,"Xperia Tablet"],[d,b]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[m,"Sony"],[p,"Xperia Phone"],[d,y]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,p,[d,w]],[/android.+;\s(shield)\sbuild/i],[p,[m,"Nvidia"],[d,w]],[/(playstation\s[3portablevi]+)/i],[p,[m,"Sony"],[d,w]],[/(sprint\s(\w+))/i],[[m,j.str,z.device.sprint.vendor],[p,j.str,z.device.sprint.model],[d,y]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,p,[d,b]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[p,/_/g," "],[d,y]],[/(nexus\s9)/i],[p,[m,"HTC"],[d,b]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[p,[m,"Microsoft"],[d,w]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[m,"Microsoft"],[d,y]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i],[p,[m,"Motorola"],[d,y]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[p,[m,"Motorola"],[d,b]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],p,[d,b]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],p,[d,y]],[/(samsung);smarttv/i],[m,p,[d,x]],[/\(dtv[\);].+(aquos)/i],[p,[m,"Sharp"],[d,x]],[/sie-(\w+)*/i],[p,[m,"Siemens"],[d,y]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],p,[d,y]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[p,[m,"Acer"],[d,b]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],p,[d,b]],[/(lg) netcast\.tv/i],[m,p,[d,x]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[p,[m,"LG"],[d,y]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[p,[m,"Lenovo"],[d,b]],[/linux;.+((jolla));/i],[m,p,[d,y]],[/((pebble))app\/[\d\.]+\s/i],[m,p,[d,k]],[/android.+;\s(glass)\s\d/i],[p,[m,"Google"],[d,k]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[p,/_/g," "],[m,"Xiaomi"],[d,y]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[d,A.lowerize],m,p]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,g],[/rv\:([\w\.]+).*(gecko)/i],[g,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,g],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[g,j.str,z.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[g,j.str,z.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],g],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,g],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],g],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],g],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,g],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],g],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],g],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,g],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[h,"iOS"],[g,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[g,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,g]]},T=function(r,t){if(!(this instanceof T))return new T(r,t).getResult();var e=r||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:o),i=t?A.extend(S,t):S;return this.getBrowser=function(){var n=j.rgx.apply(this,i.browser);return n.major=A.major(n.version),n},this.getCPU=function(){return j.rgx.apply(this,i.cpu)},this.getDevice=function(){return j.rgx.apply(this,i.device)},this.getEngine=function(){return j.rgx.apply(this,i.engine)},this.getOS=function(){return j.rgx.apply(this,i.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(n){return e=n,this},this.setUA(e),this};T.VERSION=i,T.BROWSER={NAME:h,MAJOR:f,VERSION:g},T.CPU={ARCHITECTURE:v},T.DEVICE={MODEL:p,VENDOR:m,TYPE:d,CONSOLE:w,MOBILE:y,SMARTTV:x,TABLET:b,WEARABLE:k,EMBEDDED:M},T.ENGINE={NAME:h,VERSION:g},T.OS={NAME:h,VERSION:g},typeof t!==u?(typeof r!==u&&r.exports&&(t=r.exports=T),t.UAParser=T):typeof define===a&&define.amd?define(function(){return T}):n.UAParser=T;var N=n.jQuery||n.Zepto;if(typeof N!==u){var E=new T;N.ua=E.getResult(),N.ua.get=function(){return E.getUA()},N.ua.set=function(n){E.setUA(n);var r=E.getResult();for(var t in r)N.ua[t]=r[t]}}}(this)},{}]},{},[1]);