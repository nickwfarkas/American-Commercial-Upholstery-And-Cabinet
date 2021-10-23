let week = 
[
	"sunday","monday","tuesday",
	"wednsday","thursday","friday",
	"saturday"
];

var date = new Date();

var s = document.getElementById(week[date.getDay()]).style;

s.fontSize = "3vw";
s.fontWeight = "900"