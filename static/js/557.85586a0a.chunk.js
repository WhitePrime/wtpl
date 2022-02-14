"use strict";(self.webpackChunkwebtorrentplayer_react=self.webpackChunkwebtorrentplayer_react||[]).push([[557],{9951:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(9743),i=t(2677),s=t(184);function c(n){var e,t,c,l,o=n.details;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.Z,{children:[(null===o||void 0===o?void 0:o.genre)&&o.genre.length>0&&(0,s.jsx)(i.Z,{xs:"6",md:"12",children:(0,s.jsxs)("div",{className:"genre-container",children:[(0,s.jsx)("h4",{children:"Genre"}),null===o||void 0===o||null===(e=o.genre)||void 0===e?void 0:e.map((function(n){return(0,s.jsxs)("span",{children:[n," "]},n)}))]})}),(null===o||void 0===o?void 0:o.director)&&o.director.length>0&&(0,s.jsx)(i.Z,{xs:"6",md:"12",children:(0,s.jsxs)("div",{className:"director-container",children:[(0,s.jsx)("h4",{children:"Director"}),null===o||void 0===o||null===(t=o.director)||void 0===t?void 0:t.map((function(n){return(0,s.jsxs)("span",{children:[n,"\xa0"]},n)}))]})}),(null===o||void 0===o?void 0:o.writer)&&o.writer.length>0&&(0,s.jsx)(i.Z,{xs:"6",md:"12",children:(0,s.jsxs)("div",{className:"writer-container",children:[(0,s.jsx)("h4",{children:"Writer"}),null===o||void 0===o||null===(c=o.writer)||void 0===c?void 0:c.map((function(n){return(0,s.jsxs)("span",{children:[n,"\xa0"]},n)}))]})}),(null===o||void 0===o?void 0:o.cast)&&o.cast.length>0&&(0,s.jsx)(i.Z,{xs:"6",md:"12",children:(0,s.jsxs)("div",{className:"cast-container",children:[(0,s.jsx)("h4",{children:"Cast"}),null===o||void 0===o||null===(l=o.cast)||void 0===l?void 0:l.map((function(n){return(0,s.jsxs)("span",{children:[n,"\xa0"]},n)}))]})})]})})}},1557:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(1413),i=t(885),s=t(2791),c=t(6871),l=t(9951),o=t(7022),a=t(9743),d=t(2677),u=t(5169),h=t(3340),m=t(3006),x=t(184);function v(){var n=(0,c.UO)(),e=(0,s.useState)([]),t=(0,i.Z)(e,2),v=t[0],j=t[1];return(0,s.useEffect)((function(){var e=n.imdb_id,t='{"params":[null,{"query":{"imdb_id":"'.concat(e,'"}}],"method":"meta.get","id":1,"jsonrpc":"2.0"}');console.log(t);var i="https://cinemeta.strem.io/stremioget/stremio/v1/q.json?b=".concat(btoa(t));fetch(i).then((function(n){return n.json()})).then((function(n){console.log(n),j((0,r.Z)((0,r.Z)({},n.result),{},{shareUrl:"".concat(window.location.origin,"/movies/").concat(n.result.imdb_id)})),document.title="".concat(n.result.name," - ").concat(u.Z.SITE_TITLE)})).catch((function(n){return console.log(n)}))}),[n.imdb_id]),(0,x.jsx)("div",{className:"imdb-title-container dark-overlay",style:{background:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+(null===v||void 0===v?void 0:v.background)+")"},children:(0,x.jsxs)(o.Z,{children:[(0,x.jsxs)(a.Z,{children:[(0,x.jsx)(d.Z,{xs:"12",className:"text-center",children:null!==v&&void 0!==v&&v.logo?(0,x.jsx)("div",{className:"text-center",children:(0,x.jsx)("img",{className:"imdb-logo mx-auto d-block",src:null===v||void 0===v?void 0:v.logo,alt:null===v||void 0===v?void 0:v.name})}):(0,x.jsx)("h2",{children:"details?.name"})}),(0,x.jsx)(d.Z,{xs:"12",className:"text-center",children:(0,x.jsxs)("p",{children:[(null===v||void 0===v?void 0:v.runtime)&&(0,x.jsxs)("span",{children:[null===v||void 0===v?void 0:v.runtime," | "]}),(0,x.jsxs)("span",{children:[null===v||void 0===v?void 0:v.year," | "]}),(0,x.jsxs)("span",{children:["IMDB rating: ",null===v||void 0===v?void 0:v.imdbRating]})]})}),(0,x.jsx)(d.Z,{xs:"12",className:"text-center",children:(0,x.jsx)(m.Z,{shareUrl:v.shareUrl})})]}),(0,x.jsxs)(a.Z,{children:[(0,x.jsx)(d.Z,{xs:"12",sm:"6",children:(0,x.jsx)(l.Z,{details:v})}),(0,x.jsx)(d.Z,{xs:"12",sm:"6",children:(0,x.jsx)(h.Z,{movieImdbId:null===v||void 0===v?void 0:v.imdb_id})})]})]})})}},3006:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(4483),i=t(3174),s=t(7118),c=t(184);function l(n){var e=n.shareUrl;return(0,c.jsxs)("div",{className:"social-buttons-wrapper",children:[(0,c.jsx)("a",{className:"btn btn-circle",href:"https://api.whatsapp.com/send?text=".concat(e),children:(0,c.jsx)(r.G,{icon:s.VHX,size:"lg"})}),(0,c.jsx)("a",{className:"btn btn-circle",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(e),children:(0,c.jsx)(r.G,{icon:s.neY,size:"lg"})}),(0,c.jsx)("a",{className:"btn btn-circle",href:"https://twitter.com/intent/tweet?text=".concat(e),children:(0,c.jsx)(r.G,{icon:s.mdU,size:"lg"})}),(0,c.jsx)("button",{className:"btn btn-circle",onClick:function(){return navigator.clipboard.writeText(e)},children:(0,c.jsx)(r.G,{icon:i.nNP,size:"lg"})})]})}},3340:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(1413),i=t(885),s=t(2791),c=t(7022),l=t(9743),o=t(2677),a=t(184);function d(n){var e=n.movieImdbId,t=n.serieImdbId,d=n.season,u=n.episode,h=(0,s.useState)([]),m=(0,i.Z)(h,2),x=m[0],v=m[1];return(0,s.useEffect)((function(){if(e){var n="https://torrentio.strem.fun/sort=seeders|qualityfilter=4k/stream/movie/".concat(e,".json");fetch(n).then((function(n){return n.json()})).then((function(n){console.log(n);var e=n.streams.map((function(n){return n.title.includes("\n")?(0,r.Z)((0,r.Z)({},n),{},{title:n.title.split("\n")[0],subtitle:n.title.split("\n")[1]}):n}));v(e)})).catch((function(n){return console.log(n)}))}else{var i="https://torrentio.strem.fun/sort=seeders|qualityfilter=4k/stream/series/".concat(t,":").concat(d,":").concat(u,".json");fetch(i).then((function(n){return n.json()})).then((function(n){console.log(n);var e=n.streams.map((function(n){return n.title.includes("\n")?(0,r.Z)((0,r.Z)({},n),{},{title:n.title.split("\n")[0],subtitle:n.title.split("\n")[1]}):n}));v(e)})).catch((function(n){return console.log(n)}))}}),[e,t,d,u]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Torrents"}),(0,a.jsx)(c.Z,{id:"torrentList",children:x.map((function(n){return(0,a.jsx)(l.Z,{className:"torrentInfo",children:(0,a.jsx)(o.Z,{xs:"12",children:(0,a.jsxs)("a",{className:"torrentLink text-white",href:"magnet:?xt=urn:btih:"+n.infoHash,target:"_blank",rel:"noopener noreferrer",children:[n.title,n.subtitle&&(0,a.jsxs)("span",{className:"torrentSubtitle",children:[(0,a.jsx)("br",{}),n.subtitle]})]})})},n.infoHash)}))})]})}}}]);
//# sourceMappingURL=557.85586a0a.chunk.js.map