function checkCookie(key) {
  var value = "; " + document.cookie; // get the cookie value
  var parts = value.split("; " + key + "="); // split the value by the key
  if (parts.length == 2) {
    return true; // the key exists
  } else {
    return false; // the key does not exist
  }
}

var key = "myKey"; // set the key to check for
if (!checkCookie(key)) { // if the key does not exist in the cookie
  alert("OK, you're probably gonna click the OK button under this, but i NEED MONEY! GIVE ME YOUR MONEY! (so V6 can come out in a few weeks if i make enough) bcs i need some sort of motivation. IK im yapping my head off but like give me your damn money!"); // display an alert message
  var expirationDate = new Date(); // create a new date object
  expirationDate.setFullYear(expirationDate.getFullYear() + 1); // set the expiration date to one year from now
  document.cookie = key + "=true; expires=" + expirationDate.toUTCString(); // create the cookie with the key and expiration date
}

var says = [
  "Is That a G0dly Games Reference?",
  "Please Stop Being Racist In The DISC0RD",
  "tinyurl.com/RailinDev",
  "Your one and only Unbl0cked Playground",
  "I hate working on railin",
  "Better than Bypass",
  "GD 2.2 OCTOBER 2023!!!",
  "yowoodTodd",
  "Bot",
  "Godly games 5.0!",
  "stop asking where disc0rd is. its in widgetbot",
  "blogs was usless",
  "so was secrets",
  "Tempus fugit ⏰",
  "yes its open-source",
  "no you shouldnt skid it",
  "what do i add?",
  "*you're* 👆🤓",
  "idk how many games are in this lol",
  "optimized by ChatGPT",
  "archiving piksulh soon",
  "Cooper thanks for loving railin!",
  "i cant use fontawesome because of you guys :(",
  "LunarOS 🔛🔝",
  "i need ads on this site cuz i need money 😮",
  "uh",
  "my coder friends copying me and hes better at coding then me",
  "Schools Pretty Boring",
  "This Websites Trash", 
  "i took too long making this :(", 
  "AOSUDHASIUD4u3ghiuj34hgi34gH", 
  "hotline bling", 
  "all 1v1lol's are blocked at my school", 
  "the person who made this websites pretty cool", 
  "what day is it?", 
  "fortnite battl pass", 
  "i made this on the weekend :((((",
  "hiiii aiden :)",
  "i hate myself",
  "im in love with a emo gorl 💅",
  "amog",
  "💀",
  "hey e-kitten",
  "Ethan is peter griffin",
  "Enrique is a gayboy",
  "Aadit? Care to explain?",
  "AMBOUTTAKAMM",
  "Guys i need money",
  "Macarios? Oh.. I call him macaroni!",
  "Tristan has a stamina+ gamepass",
  "Whos god? never heard of em'.",
  "Hi guys :3",
  "Who wants a splash text?"

];

function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();

  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.YourFuckingIPAddress;
      says.push(`umm your ip: ${ipAddress}`);
      splashText();
    });
});
