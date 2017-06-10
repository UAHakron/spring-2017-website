//Dont Re-invent the wheel
function getSearchParameters() {
      var prmstr = window.location.hash.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

//get parameters
var params = getSearchParameters();

window.onload = addElement();

function addElement () {
	newContent1 = document.createTextNode(navigator.userAgent.toLowerCase() + "\n"); 
	newContent2 = document.createTextNode(window.location + "\n");
	document.body.appendChild(newContent1);
	document.body.appendChild(newContent2);
}





if (params.access_token != null) {
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
	var isIOS = ua.match(/ipad|iphone|ipod/g);
	//Check if device is an android device
	if(isAndroid) {
		//Send token back to android app
  		loc = "io.stoh.hackcompanion:/token/" + params.access_token;
		window.location.href = loc;
	}
	else if (isIOS) {
		loc = "hackcompanion://?token=" + params.access_token;
		window.location.href = loc;
	}
	else {
		//device not implemented yet
		document.write("Received OAuth Token, but device not implemented.");
	}
} 

else {
	//access_token not detected
	document.write("No OAuth Token detected.  Did you come from Hack Companion?");
}

