function init(){

}
var last=null;
$(document).on("click","div.item",function(){
  $(this).toggleClass("select");
  if(last==null){
    last=this;
  }else if ($(this).is($(last))) {
    last=null
  }else{
    $(last).effect( "shake" ,{distance:10});
    $(this).effect( "shake",{distance:10} );
    $(last).toggleClass("select");
    $(this).toggleClass("select");
    last=null;
  }
})
