/*
Game JS for Clicker Game Template
by Mike Henry (mikeshenry@gmail.com)

Available from https://github.com/mashmac2/clicker-game-template

You have permission to reuse this code for non-commercial purposes with attribution

*/
//object for our game items
var items = {};
items.topic = "";
items.clicks = 0;
items.blah = 0;
items.autoclicker = 0;
items.sell=0;
items.chainsaw=0;
items.sl=0;
//on page load, this runs one time.
$(document).ready(function(){
  // localstorage
  if (typeof(Storage) !== "undefined") {
  	// Code for localStorage
  	console.log("Viskas gerai");
    
  	if (localStorage.topic) {
  	  //already exists, second loading of the game
      $('#content p').show();
  	  $('#clicker').show();
	  $('#seller').show();

  		//Retrieve all variables
  		items.topic = localStorage.topic;
  		items.clicks = localStorage.clicks;
		items.blah = localStorage.blah;
		items.autoclicker = localStorage.autoclicker;
		items.sell=localStorage.sell;
		items.chainsaw=localStorage.chainsaw;
		items.sl=localStorage.sl;
  		
  	} else {
		  //fade in messages
  		$('#content .one').delay(1000).fadeIn(1000);
  		$('#clicker').delay(2000).fadeIn(3000);
		$('#seller').delay(4000).fadeIn(3000);
  		
  	}
  	      // Put variables into the page
  	  $('#topic').text("Now you have to go to the forest with an axe");
  	  $('#clicks-status').text(items.clicks);
	  $("#autoclicker-status").text(items.autoclicker);
	  $("#sells-status").text(items.sell);
	  $("#chainsaw-status").text(items.chainsaw);
	  $("#sl-status").text(items.sl);
	 

	  //add blah and loading
  	  
  } else {
    // Sorry! No Web Storage support..
    console.log("No localStorage support!");
  }
  //end localstorage
});

//Game functions; these run when buttons are clicked, or when they're used in the document.ready or window.setInterval sections
function increment(item){
  var current_clicks = '#' + item.name + "-status";

  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;

  //update the text on page with the new quantity
  $(current_clicks).text(items[item.name]);
}
setTimeout(function(){ alert("You ended up with no trees left. Your total revenue is $ " + items.sell); }, 420000);

function blahButton(){
	//for clicking on the blah button
}

function autoclickerButton(){
	//for clicking on the buy autoclicker button
	console.log("autoclickerbutton");
	if(items.sell >= 5){
	items.autoclicker += 1;
	items.sell -= 5;
	$("#autoclicker-status").text(items.autoclicker);
	$("#clicks-status").text(items.clicks);
	}
}
function sellerButton(){
	//for clicking on the sell button
	console.log("sellerbutton");
	if(items.clicks >= 100){
	items.sell += 10;
	items.clicks -= 100;
	$("#sells-status").text(items.sell);
	$("#clicks-status").text(items.clicks);
	}
	
}
function slButton(){
	//for clicking on the sell button
	console.log("slbutton");
	if(items.sell >= 250){
	items.sl += 1;
	items.sell -= 250;
	$("#sells-status").text(items.sell);
	$("#sl-status").text(items.sl);
	}
	
}
function chainsawButton(){
	//chainsaw
	console.log("chainsawbutton");
	if(items.sell >= 50){
	items.chainsaw += 1;
	items.sell -= 50;
	$("#chainsaw-status").text(items.chainsaw);
	$("#sell-status").text(items.sell);}
}
	
function save(){
  localStorage.setItem("clicks", items.clicks);
  localStorage.setItem("blah", items.blah);
  localStorage.setItem("autoclicker", items.autoclicker);
  localStorage.setItem("sell", items.sell);
  localStorage.setItem("chainsaw", items.chainsaw);
  localStorage.setItem("sl", items.sl);
  console.log("Saving");
  
  $('#saving-status-2').fadeIn(500).delay(4000).fadeOut(500);
}

  //game loop; this runs every ten seconds to do things in the game
window.setInterval(function(){

    //You would add things here to check for new things to do, probably; all of the 'events' in your game would be triggered here
    console.log("In the save loop");

  	save();
}, 10000); //updates once per second (1000 milliseconds)

window.setInterval(function(){

    //You would add things here to check for new things to do, probably; all of the 'events' in your game would be triggered here
    console.log("In the game loop");
	//check if num of clicks is greater than 20; show autoclicker
	//if(items.clicks > 20){
	//	$("#autoclickers").fadeIn(1000);
	//}
	
	
	//autoclickers
	if(items.autoclicker > 0){
		items.clicks += (1*items.autoclicker);
	}
	if(items.chainsaw > 0){
		items.clicks += (10*items.chainsaw);
	}
	if(items.sl > 0 && items.clicks >= items.sl*100){
		items.clicks -= (100*items.sl);
		items.sell += (90*items.sl);
	}
	
	$("#clicks-status").text(items.clicks);
	$("#sells-status").text(items.sell);
  	
}, 1000); //updates once per second (1000 milliseconds)
//updates once per second (1000 milliseconds)