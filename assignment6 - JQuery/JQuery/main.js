$( document ).ready(function(){
    var txt = "";
    var Width = "Width: " + $(window).width();
    var Height = "Height: " + $(window).height();
	txt = Width +"<br>" + Height;
    $("#width_height").html(txt);
	
	  $(location).attr('href');
	  var pathname = window.location.pathname;
	  $("#page_location").html(pathname);
});

$(window).resize(function() {
  var txt = "";
    var Width = "Width: " + $(window).width();
    var Height = "Height: " + $(window).height();
	txt = Width +"<br>" + Height;
    $("#width_height").html(txt);
});

$('#refresh').click(function() {
    location.reload();
});

  $("#button1").click(function(){
  $("#P3").css("color", "yellow");
});

 $("#button2").click(function(){
  $( "#P3" ).append( "<p>Hello World!</p>" );
});

 $("#button3").click(function(){
         $("#P2").hide();
    });
	
$( "#mouseButton" ).mouseover(function() {
	$("#mouseButton").empty();
  $( "#mouseButton" ).append( "Mouse over" );
});

$( "#mouseButton" ).mouseout(function() {
	$("#mouseButton").empty();
  $( "#mouseButton" ).append( "Mouse out" );
});

$( "#mouseButton" ).mouseup(function() {
	$("#mouseButton").empty();
  $( "#mouseButton" ).append( "Mouse up" );
});

$( "#mouseButton" ).mousedown(function() {
	$("#mouseButton").empty();
  $( "#mouseButton" ).append( "Mouse Down" );
});