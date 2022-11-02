(function(){
        "use strict";
        let convertType="miles";
		const heading = document.querySelector('h1');
		const intro = document.querySelector('p');
		const answerDiv = document.getElementById('answer');
		const form = document.getElementById('convert');

		document.addEventListener('keydown',function(event){
			var key = event.code;
			if(key ==='KeyK'){
				convertType = "kms";
				heading.innerHTML = "Kilometers to Miles converter";
				intro.innerHTML = "Type in a number of Kilometers and click the button to convert the distance to Miles.";

			}
			else if(key ==='KeyM'){
				convertType = "miles";
				heading.innerHTML = "Miles to Kilometers converter";
				intro.innerHTML = "Type in a number of Miles and click the button to convert the distance to Kilometers.";
			}
		});

		form.addEventListener('submit', function(event){
			event.preventDefault();
			var dist = parseFloat(document.getElementById('distance').value);
			if(dist){
				if(convertType=="miles"){
					var converted = (dist*1.609344);
					answerDiv.innerHTML = `${dist} miles convertes to ${converted} kilometers`;
				}
				else{
					var converted = (dist* 0.621371192);
					answerDiv.innerHTML = `${dist} kilometers convertes to ${converted} miles`;
				}
			}
			else{
				answer.innerHTML = 	"<h2>Please provide a number!!!</h2>"
			}

		});
})();