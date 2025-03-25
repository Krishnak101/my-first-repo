let testText = "The quick brown fox jumped pver the lazy dog. This doesn't end here, as the dog pagapatteesthundhi over the fod to get the revenge."
let startTime, endTime;
function startTest() {
    document.getElementById("inputText").value = testText;
    document.getElementById("output").innerHTML = "";
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
    startTime = new Date().getTime();

    //change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
    button.style.backgroundColor = "red";
}
function endTest() {
    endTime = new Date().getTime();
    document.getElementById("userInput").readOnly = true;
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    //split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;
    var wpm = 0;

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    //Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
    button.style.backgroundColor = "aquamarine"
}