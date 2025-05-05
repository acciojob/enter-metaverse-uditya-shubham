//your JS code here. If required.
const statusPara = document.getElementById("status");
    const enterBtn = document.getElementById("enterBtn");

    enterBtn.addEventListener("click", function () {
      // Create new h1 element
      const newHeading = document.createElement("h1");
      newHeading.textContent = "Entered Metaverse";
		newHeading.id = "status";

      // Replace the <p> with the <h1>
      statusPara.replaceWith(newHeading);
    });