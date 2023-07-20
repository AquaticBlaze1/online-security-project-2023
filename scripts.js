var options = {
  strings: [
    "Catch Scams Onnline st",
    "Catch Scams Online, Stay Safe All the Time^2000",
    "By Alli im",
    "By Ali Imran^500",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true,
  cursorChar: "_",
};
var typed = new Typed("#typed", options);

function emailOutlook() {
  document.getElementById("email").innerHTML = "I use <em>Outlook</em>";
  document.getElementById("emaildiv").innerHTML =
    "<p>Click on the unwanted email</p> <img src=outlook1.png> <p>Click the arrow on the left of Read / Unread</p> <img src=outlook2.png> <p>or on the web version:</p> <img src=outlook2b.png> <p>Create a quick step that moves the email to the junk folder</p> <img src=outlook4.png> <br> <img src=outlook5.png> <br> <img src=outlook6.png> <br> <img src=outlook7.png> <p>Or on the web version:</p> <img src=outlook3.png> <p>If you can't see 'Junk' click Move to a different folder</p>";
}

function emailGmail() {
  document.getElementById("email").innerHTML = "I use <em>Gmail</em>";
  document.getElementById("emaildiv").innerHTML =
    "<p>Click on the unwanted email</p> <img src=gmail1.png> <p>Click 'Report as spam'</p> <img src=gmail2.png>";
}
