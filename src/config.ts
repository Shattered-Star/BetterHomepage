if (localStorage.getItem('timeSeparator') == null) {
	localStorage.setItem("timeSeparator", ":");
	localStorage.setItem("dateSeparator", " / ");
	
	localStorage.setItem("birthYear", "2000");
	localStorage.setItem("birthMonth", "1");
	localStorage.setItem("birthDay", "1");
	console.log('yes')
};