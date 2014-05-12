var cloud = document.getElementsByClassName("cloud");
setInterval(function(){
	for(var i = 0; i < cloud.length; i++){
		var left = cloud[i].style.left;
		left = parseInt(left);
		cloud[i].style.left = left-1 + "px";
		w = parseInt(cloud[i].width);
		if(left < (0 - w)){
			var c = Math.floor(Math.random()*(window.innerHeight-100) + 100);
			cloud[i].style.top = c;
			cloud[i].style.left = window.innerWidth+w + "px";
		}
	}
},20);