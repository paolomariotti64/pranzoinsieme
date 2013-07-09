$( document ).bind( 'mobileinit', function(){
  $.mobile.allowCrossDomainPages = true;  	
	$.mobile.loader.prototype.options.text = "loading";
	$.mobile.loader.prototype.options.textVisible = false;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.loader.prototype.options.html = "";
});
