var confirmPassword = ["atharva","Atharva","free27","sectiona","sectionA","code20"];
var password = window.prompt("Please Enter the Passcode.")
if (confirmPassword.includes(password)) {
    void(0)
}
else {
    window.alert("Passwords do not match.")
    window.alert("To get a new password please contact the site owner.")
    setTimeout(() => {
		window.location.href='https://www.youtube.com/watch?v=fRh_vgS2dFE&ab_channel=JustinBieberVEVO'
	},0);
}