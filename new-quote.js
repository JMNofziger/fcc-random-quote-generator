$(document).ready(function(){
	$("#new-quote").on("click", function(){
		// $(".content").html("This is the new message!");
	
	// I want to call a twitter user and GET the following information
		// Total number of tweets
	// Then set var "random-tweet" to random whole number between 1 and total num of tweets
	// Then I want to call a twitter user and use that "random-tweet" var to GET 
		// the content of that corresponding status
	// Then I want to set the result of that query to the content of my paragraph.
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://api.whatdoestrumpthink.com/api/v1/quotes/random');
	// ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
	ourRequest.onload = function(){
		// console.log(ourRequest.responseText);
		// var ourData = ourRequest.responseText;
		var ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData["message"]);
		$(".content").html(ourData["message"]);
	};
	ourRequest.send();
		
	});
});
