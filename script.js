$(".hide-button").click(function() { 
  $(".gostimg").hide();
});

$(".show-button").click(function() { 
  $(".gostimg").show();
});

$(".update-img-button").click(function() { 
  $(".gostimg").html('<img src="https://cdn.glitch.com/7980a3ca-c419-4b67-863a-21392b291806%2F59-598130_transparent-cute-ghost-png-sticker-tumblr-transparent-black.png?v=1605656578560">');
});

var str = 
$(".message-button").click(function() {
  $(".message").append(`<p></p>`);
});
//almost done 

$(".name-button").click(function() { 
  $("h1").html('<h1> My name is alex <h1>');
});
