// Array of tarot card names
var cards = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"];

function drawCards() {
    var cards = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"];

    var cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

    for (var i = 0; i < 9; i++) {
        var randomIndex = Math.floor(Math.random() * cards.length);
        var card = cards.splice(randomIndex, 1)[0];

        var cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.textContent = card;

        cardContainer.appendChild(cardElement);
    }
}


function clearCards() {
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
}

function calculateAstrology() {
    var dobInput = document.getElementById("dobInput").value;
    var astrologyResults = document.getElementById("astrologyResults");

    if (dobInput !== "") {
        // Perform astrology calculations or fetch data from an astrology API
        // Here, you can simulate some random astrology results for demonstration purposes
        var planetsAlignment = "Random planets alignment";
        var tarotSignificance = "Random tarot significance";

        astrologyResults.textContent = "Planets Alignment: " + planetsAlignment + " | Tarot Significance: " + tarotSignificance;
    } else {
        astrologyResults.textContent = "";
    }
}

// Existing drawCards() and clearCards() functions



function generateRandomIndices(count) {
    var indices = [];
    while (indices.length < count) {
        var randomIndex = Math.floor(Math.random() * cards.length);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }
    return indices;
}

document.getElementById('birthForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const form = event.target;
    const formData = new FormData(form);
    
    const body = {
        day: formData.get('day'),
        month: formData.get('month'),
        year: formData.get('year'),
        hour: formData.get('hour'),
        min: formData.get('minute'),
        name: formData.get('name'),
        lat: formData.get('latitude'),
        lon: formData.get('longitude'),
        tzone: formData.get('timezone')
      };

      console.log(body);

    fetch('/astrology', {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        "Content-Type" : "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = ''; // Clear previous results
  
        // Create HTML elements to display the formatted data
        const title = document.createElement('h3');
        title.textContent = 'Astrology Reading';
  
 
        const name = document.createElement('p');
        name.innerHTML = `<strong>Name:</strong> ${data.name}`;
  
        const date = document.createElement('p');
        date.innerHTML = `<strong>Date:</strong> ${data.date}`;
  
        const destinyNumber = document.createElement('p');
        destinyNumber.innerHTML = `<strong>Destiny Number:</strong> ${data.destiny_number}`;
  
        const radicalNumber = document.createElement('p');
        radicalNumber.innerHTML = `<strong>Radical Number:</strong> ${data.radical_number}`;
  
        const nameNumber = document.createElement('p');
        nameNumber.innerHTML = `<strong>Name Number:</strong> ${data.name_number}`;
  
        const evilNum = document.createElement('p');
        evilNum.innerHTML = `<strong>Evil Number:</strong> ${data.evil_num}`;
  
        const favColor = document.createElement('p');
        favColor.innerHTML = `<strong>Favorite Color:</strong> ${data.fav_color}`;
  
        const favDay = document.createElement('p');
        favDay.innerHTML = `<strong>Favorite Day:</strong> ${data.fav_day}`;
  
        const favGod = document.createElement('p');
        favGod.innerHTML = `<strong>Favorite God:</strong> ${data.fav_god}`;
  
        const favMantra = document.createElement('p');
        favMantra.innerHTML = `<strong>Favorite Mantra:</strong> ${data.fav_mantra}`;
  
        const favMetal = document.createElement('p');
        favMetal.innerHTML = `<strong>Favorite Metal:</strong> ${data.fav_metal}`;
  
        const favStone = document.createElement('p');
        favStone.innerHTML = `<strong>Favorite Stone:</strong> ${data.fav_stone}`;
  
        const favSubstone = document.createElement('p');
        favSubstone.innerHTML = `<strong>Favorite Substone:</strong> ${data.fav_substone}`;
  
        const friendlyNum = document.createElement('p');
        friendlyNum.innerHTML = `<strong>Friendly Number:</strong> ${data.friendly_num}`;

        const neutralNum = document.createElement('p');
        neutralNum.innerHTML = `<strong>Neutral Number:</strong> ${data.neutral_num}`;
  
        const radicalNum = document.createElement('p');
        radicalNum.innerHTML = `<strong>Radical Number:</strong> ${data.radical_num}`;
  
        const radicalRuler = document.createElement('p');
        radicalRuler.innerHTML = `<strong>Radical Ruler:</strong> ${data.radical_ruler}`;


      // Append the elements to the result container
      resultContainer.appendChild(title);
      resultContainer.appendChild(name);
      resultContainer.appendChild(date);
      resultContainer.appendChild(destinyNumber);
      resultContainer.appendChild(radicalNumber);
      resultContainer.appendChild(nameNumber);
      resultContainer.appendChild(evilNum);
      resultContainer.appendChild(favColor);
      resultContainer.appendChild(favDay);
      resultContainer.appendChild(favGod);
      resultContainer.appendChild(favMantra);
      resultContainer.appendChild(favMetal);
      resultContainer.appendChild(favStone);
      resultContainer.appendChild(favSubstone);
      resultContainer.appendChild(friendlyNum);
      resultContainer.appendChild(neutralNum);
      resultContainer.appendChild(radicalNum);
      resultContainer.appendChild(radicalRuler);

  
        resultContainer.style.display = 'block';
      })
      .catch(error => {
        console.error('Error fetching tarot data:', error);
      });
  });