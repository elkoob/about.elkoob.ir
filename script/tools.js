var page_found = 0;

function get_route(_slice){
	var url = window.location.hash.slice(_slice) || "/";
  return url;
}
function load(url,loc) {
  $(loc).load(url);
}
function _split(str,key,count) {
  if (count) {
    var sp = str.split(key,count);
  }else {
    var sp = str.split(key);
   }
  return sp;
}
function route(url,page) {
  if(get_route(1) == url){
    load("pages/"+page+".html","#main");
    //$("#route").attr("src","");
    page_found=1;
  }
}
function errors(error) {
  if (page_found == 0) {
    load("errors/"+error+".error","#main");
  }
}
