
function analyzeCharacter() {
  const character = document.getElementById("characterInput").value;
  const theory = document.getElementById("theorySelect").value;

  const prompt = `Apply ${theory} to the fictional character ${character}. Analyze the character's behavior using that theory.`;

  const apiKey = "YOUR_DISPOSABLE_API_KEY_HERE"; // Replace with your real key

  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 400
    })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("output").innerText = data.choices[0].message.content;
  })
  .catch(error => {
    document.getElementById("output").innerText = "Error: " + error.message;
  });
}

function searchWikipedia() {
  const character = document.getElementById("characterInput").value;
  if (character.trim() !== "") {
    const url = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(character)}`;
    window.open(url, "_blank");
  } else {
    alert("Please enter a character name first!");
  }
}
