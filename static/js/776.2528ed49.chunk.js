"use strict";(self.webpackChunkwebtorrentplayer_react=self.webpackChunkwebtorrentplayer_react||[]).push([[776],{776:function(e,r,t){t.r(r),t.d(r,{default:function(){return a}});t(2791);var n=t(7022),o=t(5565),s=t(184);function a(){return(0,s.jsxs)(n.Z,{children:[(0,s.jsx)("h2",{children:"Sintel"}),(0,s.jsx)(o.Z,{torrentId:"magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"})]})}},5565:function(e,r,t){var n=t(885),o=t(2791),s=t(4483),a=t(3174),l=t(7022),d=t(9743),i=t(2677),c=t(184),u=t(7901);r.Z=function(e){var r=e.torrentId,p=(0,o.useState)({torrentInfoHash:"",torrentMagnetURI:"",torrentName:"",torrentProgress:"",torrentFiles:[],torrentNumPeers:0,torrentDownloadSpeed:0,torrentUploadSpeed:0}),f=(0,n.Z)(p,2),F=f[0],h=f[1];return(0,o.useEffect)((function(){var e=new(t(7331));e.on("error",(function(e){console.log("[+] Webtorrent error: "+e.message)})),e.add(r,(function(e){var r=setInterval((function(){var r,t,n;h({torrentProgress:(100*e.progress).toFixed(1)+"%",torrentNumPeers:null!==(r=e.numPeers)&&void 0!==r?r:0,torrentDownloadSpeed:u(null!==(t=e.downloadSpeed)&&void 0!==t?t:0)+"/s",torrentUploadSpeed:u(null!==(n=e.uploadSpeed)&&void 0!==n?n:0)+"/s"})}),500);e.on("done",(function(){h({torrentProgress:"100%"}),console.log("Progress: 100%"),clearInterval(r)})),h({torrentInfoHash:e.infoHash,torrentMagnetURI:e.magnetURI,torrentName:e.name,torrentFiles:e.files}),console.log(e.files);for(var t=e.files[0],n=1;n<e.files.length;n++)e.files[n].length>t.length&&e.files[n].name.endsWith(".mp4")&&(t=e.files[n]);t.renderTo("#video-container"),console.log(t)}))}),[r]),(0,c.jsxs)(l.Z,{fluid:!0,children:[(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(i.Z,{children:(0,c.jsx)("span",{children:F.torrentProgress})}),(0,c.jsxs)(i.Z,{children:[(0,c.jsx)(s.G,{icon:a.FVb})," ",F.torrentNumPeers," peers"]}),(0,c.jsxs)(i.Z,{children:[(0,c.jsx)(s.G,{icon:a.r5q})," ",F.torrentDownloadSpeed]}),(0,c.jsxs)(i.Z,{children:[(0,c.jsx)(s.G,{icon:a.FPD})," ",F.torrentUploadSpeed]})]}),(0,c.jsx)(d.Z,{children:(0,c.jsx)(i.Z,{children:(0,c.jsx)("video",{id:"video-container",className:"ratio ratio-16x9"})})})]})}}}]);
//# sourceMappingURL=776.2528ed49.chunk.js.map