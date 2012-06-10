// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){log.history = log.history || [];log.history.push(arguments);if(this.console) {var args = arguments, newarr;args.callee = args.callee.caller;newarr = [].slice.call(args);if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

setInterval(function(){
$("#ancho").text($("#main").width())
},100);

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



/* Efectos del footer*/
$("#facebook a .social-pictures").addClass("trans");
$("#facebook").hover(hoverf,nohoverf);
$("#twitter a .social-pictures").addClass("trans");
$("#twitter").hover(hovert,nohovert);

function hoverf(){
    $("#facebook a .social-pictures").addClass("transHover");
    $("#facebook a span").fadeOut(200,function(){
        $("#facebook a span").addClass("fb-font-color");
        $("#facebook a span").text("fb.com/MaoAiz");
        $("#facebook a span").fadeIn(450);
    });
}
function nohoverf(){
    $("#facebook a .social-pictures").removeClass("transHover");
    $("#facebook a span").fadeOut(200,function(){
        $("#facebook a span").removeClass("fb-font-color");
        $("#facebook a span").text("facebook");
        $("#facebook a span").fadeIn(150);
    });
}
function hovert(){
    $("#twitter a .social-pictures").addClass("transHover");
    $("#twitter a span").fadeOut(200,function(){
        $("#twitter a span").addClass("tw-font-color");
        $("#twitter a span").text("@MaoAiz");
        $("#twitter a span").fadeIn(450);
    });
}
function nohovert(){
    $("#twitter a .social-pictures").removeClass("transHover");
    $("#twitter a span").fadeOut(200,function(){
        $("#twitter a span").removeClass("fb-font-color");
        $("#twitter a span").removeClass("tw-font-color");
        $("#twitter a span").text("twitter");
        $("#twitter a span").fadeIn(150);
    });   
}
/* cierra efectos del footer*/

$("#u, #r, #i1, #c, #i2, #a2, #g, #a3").css({"position":"relative","top":"0px"});
$("#ma, #o, #a, #i, #z, #c2, #o2, #m2").css({"position":"relative","top":"0px"});
$("body header h1").hover(hoverh,nohoverh);
function hoverh(){
    var alto = $(window).height();
    arr= ["#u", "#r", "#i1", "#c", "#i2", "#a2", "#g","#a3"];
    for(i=8;i>0;i--){
        var n=i;
        var sel = Math.round(Math.random()*(n-1));
        var iden = arr[sel];
        arr.splice(sel,1);
        var alea = Math.round(Math.random()*200);
        var num = alto-(2*alea)-200;
        $(iden).animate(
            {"top":num+"px","visibility":"hidden"},
            function(){
//                $(this).fadeOut();//addClass("hidden");
                $(this).css({"visibility":"hidden"});
//                $(this).fadeOut(1600);
                $(this).animate({"width":"0"})
            }
        );
    }
//    $("#u, #r, #i1, #c, #i2, #a2, #g, #a3").fadeOut("linear");
//    $("#ma, #o, #a, #i, #z, #c2, #o2, #m2").animate({"margin":"0px"}, "5000",function(){})
    
//    $("#u, #r, #i1, #c, #i2, #a2, #g, #a3").fadeOut("linear");
}
function nohoverh(){
//    $("#ma,#z,#punto").animate({"marginRight":"1em"}, function(){
//        })
        $("#u, #r, #i1, #c, #i2, #a2, #g, #a3").css({"visibility":"visible","display":""});
        $("#u, #r, #i1, #c, #i2, #a2, #g, #a3").animate({"top":"0px","width":"0.5em"}, "1000")
//        $("#ma,#z,#punto").animate({"marginRight":"0em"})
//    $("#u, #r, #i1, #c, #i2, #a2, #g, #a3").fadeIn("linear");
}