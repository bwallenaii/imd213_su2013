document.addEvent("domready", function(){

	$$("#questions a").addEvent("click", function(e){
		e.stop();
		//console.log(this, e.target);
		var url = e.target.get("href"); //get the url for ajax
		
		//the easy way
		//document.id("answer").load(url); //auto load the response into #answer
		//the versatile way
		
		var req = new Request({url:url}); //We create an instance of Request
		
		req.addEvent("success", function(text, xml){ //listen for success on the Request object
			document.id("answer").set("html", text); //places the response into answer div
		});
		
		req.addEvent("progress", function(data){
			console.log("progress", data);
		});
		
		req.send(); //sends the request to the server
		
		return false;
	});

});