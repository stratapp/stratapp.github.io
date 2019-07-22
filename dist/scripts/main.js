!function(n,t){n.fn.inViewport=function(i){return this.each(function(o,e){function a(){var t=n(this).height(),o=e.getBoundingClientRect(),a=o.top,r=o.bottom;return i.call(e,Math.max(0,a>0?t-a:r<t?r:t))}a(),n(t).on("resize scroll",a)})}}(jQuery,window),$(".ani").inViewport(function(n){n&&$(this).addClass("animated")});
//# sourceMappingURL=main.js.map
