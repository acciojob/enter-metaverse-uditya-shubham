//your JS code here. If required.
const statusDiv = document.getElementById("status");
    const enterBtn = document.getElementById("enterBtn");

    enterBtn.addEventListener("click", function () {
      statusDiv.innerHTML = "<h1>Entered Metaverse</h1>"; // ✅ insert <h1> inside a div#status
    });