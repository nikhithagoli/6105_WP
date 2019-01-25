var comments = [];
function myFunction(form) {
	// alert('welcome');
	var pairs = {};
	var secret_code = "abcd";
	// var x = document.getElementById("submit_form");
	var n = document.getElementById("name").value;
	var s = document.getElementById("password").value;
	var c = document.getElementById("comment").value;
	// 
	//if(x.elements[0].value == null || x.elements[0].value == '')  {
	// 	alert("please fill the name box");
	// } else if (x.elements[1].value == null || x.elements[1].value == '') {
	// 	alert("please fill the comment box");
	// } else if(x.elements[2].value != secret_code) {
	// 	alert("please enter the correct secret code");
	// } else {
	// 	comments.push(x.elements[1].value);
	// }
	if(n == null || n == '')  {
		alert("please fill the name box");
	} else if (c == null || c == '') {
		alert("please fill the comment box");
	} else if(s != secret_code) {
		alert("please enter the correct secret code");
	} else {
		// comments.unshift(c);
		// console.log(comments);
		// document.getElementById("comments_list").innerHTML = comments;
		pairs[name] = n;
		pairs[comment] = c;
		comments.push(pairs);
		console.log(comments);
		// var com = "";
		for(var i = comments.length-1; i >= 0;i--) {
			// com += comments[i][comment] + "\n";
			// com += comments[i][name] + "\n";
			document.getElementById("dis_com").innerHTML = comments[i][comment];
			document.getElementById("dis_name").innerHTML = comments[i][name];
		}

		// document.getElementById("comments_list").innerHTML = com;
		document.getElementById("frm").reset();
	}
}
