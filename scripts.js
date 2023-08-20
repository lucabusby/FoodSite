  //overlay add for recipe
  function createRecipeOverlay(recipe) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    const content = document.createElement("div");
    content.classList.add("overlay-content");
  
    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
      overlay.remove();
    });
  
    const recipeDetails = document.createElement("div");
    recipeDetails.classList.add("recipe-details");

    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.imageLink;
    recipeImage.alt = "Recipe Image";
  
    const recipeName = document.createElement("h2");
    recipeName.textContent = recipe.name;

    const recipeDifficulty = document.createElement("p");
    recipeDifficulty.textContent = "Difficulty: " + recipe.difficulty;

    const recipeFood = document.createElement("p");
    recipeFood.textContent = "Food: " + recipe.food;

    const recipeBase = document.createElement("p");
    recipeBase.textContent = "Base: " + recipe.base;
  
    const recipeOrigin = document.createElement("p");
    recipeOrigin.textContent = "Origin: " + recipe.origin;

    const recipeLink = document.createElement("p");
    const linkElement = document.createElement("a");

    if (recipe.link) {
        linkElement.href = recipe.link;
        linkElement.textContent = "Click for Recipe";
        linkElement.target = "_blank";
        
        recipeLink.appendChild(linkElement);
    };

    const recipeNotes = document.createElement("p");
    recipeNotes.textContent = "Notes:\n\n" + recipe.notes;
  
    recipeDetails.appendChild(recipeImage);
    recipeDetails.appendChild(recipeName);
    recipeDetails.appendChild(recipeDifficulty);
    recipeDetails.appendChild(recipeFood);
    recipeDetails.appendChild(recipeBase);
    recipeDetails.appendChild(recipeOrigin);
    recipeDetails.appendChild(recipeLink);
    recipeDetails.appendChild(recipeNotes);
  
    content.appendChild(closeBtn);
    content.appendChild(recipeDetails);
    overlay.appendChild(content);
  
    document.body.appendChild(overlay);
  }

  //random order
  function shuffleArray(array) {
    // Fisher-Yates (aka Knuth) Shuffle Algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  window.onload = function() {
    shuffleArray(recipes);
    displayRecipes();
};

  //display iems with filter
  function displayRecipes() {
    const recipesContainer = document.getElementById("recipes-container");
    recipesContainer.innerHTML = "";
  
    const difficultyFilter = document.getElementById("difficulty").value;
    const foodFilter = document.getElementById("food").value;
    const baseFilter = document.getElementById("base").value;
    const originFilter = document.getElementById("origin").value.toLowerCase();
    const searchFilter = document.getElementById("search").value.toLowerCase();
  
    recipes.forEach((recipe) => {
      if (
        (difficultyFilter === "all" || recipe.difficulty === difficultyFilter) &&
        (foodFilter === "all" || recipe.food === foodFilter) &&
        (baseFilter === "all" || recipe.base === baseFilter) &&
        (!originFilter || recipe.origin.toLowerCase().includes(originFilter)) &&
        (!searchFilter || recipe.name.toLowerCase().includes(searchFilter))
      ) {
        
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.addEventListener("click", () => {
          createRecipeOverlay(recipe);
        });
  
        const recipeImageLink = document.createElement("img");
        recipeImageLink.alt = "Recipe Image";
        recipeImageLink.src = recipe.imageLink; 
        recipeCard.appendChild(recipeImageLink);
  
        const recipeName = document.createElement("h3");
        recipeName.textContent = recipe.name;
        recipeCard.appendChild(recipeName);
  
        recipesContainer.appendChild(recipeCard);
      }
    });
  }

  //avoid spam overload
  function onRandomizeButtonClick() {
    shuffleArray(recipes);
    displayRecipes();
  }

  //add recipe
  let addedRecipes = []; // Array to store added recipes

  function showLightbox() {
    const lightbox = document.getElementById("add-recipe-lightbox");
    lightbox.style.display = "block";
  }
  
  function hideLightbox() {
    const lightbox = document.getElementById("add-recipe-lightbox");
    lightbox.style.display = "none";
    clearRecipeForm(); // Clear the form when the lightbox is closed
  }
  
  function clearRecipeForm() {
    const recipeForm = document.getElementById("recipe-form");
    recipeForm.reset();
  }
  
  function createRecipeObject() {
    const name = document.getElementById("recipe-name").value;
    const difficulty = document.getElementById("recipe-difficulty").value;
    const diet = document.getElementById("recipe-diet").value;
    const base = document.getElementById("recipe-base").value;
    const origin = document.getElementById("recipe-origin").value;
    const imageLink = document.getElementById("recipe-imageLink").value;
    const link = document.getElementById("recipe-link").value;
    const notes = document.getElementById("recipe-notes").value;
  
    const recipe = {
      name: name,
      difficulty: difficulty,
      food: diet,
      base: base,
      origin: origin,
      imageLink: imageLink,
      link: link,
      notes: notes,
    };
  
    addedRecipes.push(recipe); // Add the new recipe to the addedRecipes array
    displayAddedRecipes(); // Display the list of added recipes
    clearRecipeForm(); // Clear the form after adding the recipe
  }
  
  function displayAddedRecipes() {
    const recipeTextOutput = document.getElementById("recipe-text-output");
    recipeTextOutput.textContent = addedRecipes
      .map((recipe) => JSON.stringify(recipe, null, 2))
      .join(",\n"); // Add a comma after each recipe JSON, except the last one
  }

  function copyToClipboard() {
    const recipeTextOutput = document.getElementById("recipe-text-output");
    const recipeText = recipeTextOutput.textContent;
  
    const textarea = document.createElement("textarea");
    textarea.value = recipeText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  function clearRecipes() {
    addedRecipes = [];
    displayAddedRecipes();
  }

  //counts the total number of recipes
  function recipeCounter() {
    const recipeCounter = document.getElementById("recipe-counter");
    recipeCounter.textContent = "Total Recipes: " + recipes.length;
  }
  recipeCounter();
  
  document.getElementById("clear-recipes-btn").addEventListener("click", clearRecipes);
  document.getElementById("copy-to-clipboard-btn").addEventListener("click", copyToClipboard);
  document.getElementById("add-recipe-btn").addEventListener("click", showLightbox);
  document.getElementById("close-lightbox-btn").addEventListener("click", hideLightbox);
  
  const recipeForm = document.getElementById("recipe-form");
  recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    createRecipeObject();
  });

  //all countries & continents
  const countriesData = [
      {
          name: "Afghanistan",
          continent: "Asia"
      },
      {
          name: "Albania",
          continent: "Europe"
      },
      {
          name: "Algeria",
          continent: "Africa"
      },
      {
          name: "American Samoa",
          continent: "Oceania"
      },
      {
          name: "Andorra",
          continent: "Europe"
      },
      {
          name: "Angola",
          continent: "Africa"
      },
      {
          name: "Anguilla",
          continent: "North America"
      },
      {
          name: "Antarctica",
          continent: "Antarctica"
      },
      {
          name: "Antigua and Barbuda",
          continent: "North America"
      },
      {
          name: "Argentina",
          continent: "South America"
      },
      {
          name: "Armenia",
          continent: "Asia"
      },
      {
          name: "Aruba",
          continent: "North America"
      },
      {
          name: "Australia",
          continent: "Oceania"
      },
      {
          name: "Austria",
          continent: "Europe"
      },
      {
          name: "Azerbaijan",
          continent: "Asia"
      },
      {
          name: "Bahamas",
          continent: "North America"
      },
      {
          name: "Bahrain",
          continent: "Asia"
      },
      {
          name: "Bangladesh",
          continent: "Asia"
      },
      {
          name: "Barbados",
          continent: "North America"
      },
      {
          name: "Belarus",
          continent: "Europe"
      },
      {
          name: "Belgium",
          continent: "Europe"
      },
      {
          name: "Belize",
          continent: "North America"
      },
      {
          name: "Benin",
          continent: "Africa"
      },
      {
          name: "Bermuda",
          continent: "North America"
      },
      {
          name: "Bhutan",
          continent: "Asia"
      },
      {
          name: "Bolivia",
          continent: "South America"
      },
      {
          name: "Bosnia and Herzegovina",
          continent: "Europe"
      },
      {
          name: "Botswana",
          continent: "Africa"
      },
      {
          name: "Bouvet Island",
          continent: "Antarctica"
      },
      {
          name: "Brazil",
          continent: "South America"
      },
      {
          name: "British Indian Ocean Territory",
          continent: "Africa"
      },
      {
          name: "Brunei",
          continent: "Asia"
      },
      {
          name: "Bulgaria",
          continent: "Europe"
      },
      {
          name: "Burkina Faso",
          continent: "Africa"
      },
      {
          name: "Burundi",
          continent: "Africa"
      },
      {
          name: "Cambodia",
          continent: "Asia"
      },
      {
          name: "Cameroon",
          continent: "Africa"
      },
      {
          name: "Canada",
          continent: "North America"
      },
      {
          name: "Cape Verde",
          continent: "Africa"
      },
      {
          name: "Cayman Islands",
          continent: "North America"
      },
      {
          name: "Central African Republic",
          continent: "Africa"
      },
      {
          name: "Chad",
          continent: "Africa"
      },
      {
          name: "Chile",
          continent: "South America"
      },
      {
          name: "China",
          continent: "Asia"
      },
      {
          name: "Christmas Island",
          continent: "Oceania"
      },
      {
          name: "Cocos (Keeling) Islands",
          continent: "Oceania"
      },
      {
          name: "Colombia",
          continent: "South America"
      },
      {
          name: "Comoros",
          continent: "Africa"
      },
      {
          name: "Congo",
          continent: "Africa"
      },
      {
          name: "Cook Islands",
          continent: "Oceania"
      },
      {
          name: "Costa Rica",
          continent: "North America"
      },
      {
          name: "Croatia",
          continent: "Europe"
      },
      {
          name: "Cuba",
          continent: "North America"
      },
      {
          name: "Cyprus",
          continent: "Asia"
      },
      {
          name: "Czech Republic",
          continent: "Europe"
      },
      {
          name: "Denmark",
          continent: "Europe"
      },
      {
          name: "Djibouti",
          continent: "Africa"
      },
      {
          name: "Dominica",
          continent: "North America"
      },
      {
          name: "Dominican Republic",
          continent: "North America"
      },
      {
          name: "East Timor",
          continent: "Asia"
      },
      {
          name: "Ecuador",
          continent: "South America"
      },
      {
          name: "Egypt",
          continent: "Africa"
      },
      {
          name: "El Salvador",
          continent: "North America"
      },
      {
          name: "England",
          continent: "Europe"
      },
      {
          name: "Equatorial Guinea",
          continent: "Africa"
      },
      {
          name: "Eritrea",
          continent: "Africa"
      },
      {
          name: "Estonia",
          continent: "Europe"
      },
      {
          name: "Ethiopia",
          continent: "Africa"
      },
      {
          name: "Falkland Islands",
          continent: "South America"
      },
      {
          name: "Faroe Islands",
          continent: "Europe"
      },
      {
          name: "Fiji Islands",
          continent: "Oceania"
      },
      {
          name: "Finland",
          continent: "Europe"
      },
      {
          name: "France",
          continent: "Europe"
      },
      {
          name: "French Guiana",
          continent: "South America"
      },
      {
          name: "French Polynesia",
          continent: "Oceania"
      },
      {
          name: "French Southern territories",
          continent: "Antarctica"
      },
      {
          name: "Gabon",
          continent: "Africa"
      },
      {
          name: "Gambia",
          continent: "Africa"
      },
      {
          name: "Georgia",
          continent: "Asia"
      },
      {
          name: "Germany",
          continent: "Europe"
      },
      {
          name: "Ghana",
          continent: "Africa"
      },
      {
          name: "Gibraltar",
          continent: "Europe"
      },
      {
          name: "Greece",
          continent: "Europe"
      },
      {
          name: "Greenland",
          continent: "North America"
      },
      {
          name: "Grenada",
          continent: "North America"
      },
      {
          name: "Guadeloupe",
          continent: "North America"
      },
      {
          name: "Guam",
          continent: "Oceania"
      },
      {
          name: "Guatemala",
          continent: "North America"
      },
      {
          name: "Guinea",
          continent: "Africa"
      },
      {
          name: "Guinea-Bissau",
          continent: "Africa"
      },
      {
          name: "Guyana",
          continent: "South America"
      },
      {
          name: "Haiti",
          continent: "North America"
      },
      {
          name: "Heard Island and McDonald Islands",
          continent: "Antarctica"
      },
      {
          name: "Holy See (Vatican City State)",
          continent: "Europe"
      },
      {
          name: "Honduras",
          continent: "North America"
      },
      {
          name: "Hong Kong",
          continent: "Asia"
      },
      {
          name: "Hungary",
          continent: "Europe"
      },
      {
          name: "Iceland",
          continent: "Europe"
      },
      {
          name: "India",
          continent: "Asia"
      },
      {
          name: "Indonesia",
          continent: "Asia"
      },
      {
          name: "Iran",
          continent: "Asia"
      },
      {
          name: "Iraq",
          continent: "Asia"
      },
      {
          name: "Ireland",
          continent: "Europe"
      },
      {
          name: "Israel",
          continent: "Asia"
      },
      {
          name: "Italy",
          continent: "Europe"
      },
      {
          name: "Ivory Coast",
          continent: "Africa"
      },
      {
          name: "Jamaica",
          continent: "North America"
      },
      {
          name: "Japan",
          continent: "Asia"
      },
      {
          name: "Jordan",
          continent: "Asia"
      },
      {
          name: "Kazakhstan",
          continent: "Asia"
      },
      {
          name: "Kenya",
          continent: "Africa"
      },
      {
          name: "Kiribati",
          continent: "Oceania"
      },
      {
          name: "Kuwait",
          continent: "Asia"
      },
      {
          name: "Kyrgyzstan",
          continent: "Asia"
      },
      {
          name: "Laos",
          continent: "Asia"
      },
      {
          name: "Latvia",
          continent: "Europe"
      },
      {
          name: "Lebanon",
          continent: "Asia"
      },
      {
          name: "Lesotho",
          continent: "Africa"
      },
      {
          name: "Liberia",
          continent: "Africa"
      },
      {
          name: "Libyan Arab Jamahiriya",
          continent: "Africa"
      },
      {
          name: "Liechtenstein",
          continent: "Europe"
      },
      {
          name: "Lithuania",
          continent: "Europe"
      },
      {
          name: "Luxembourg",
          continent: "Europe"
      },
      {
          name: "Macao",
          continent: "Asia"
      },
      {
          name: "North Macedonia",
          continent: "Europe"
      },
      {
          name: "Madagascar",
          continent: "Africa"
      },
      {
          name: "Malawi",
          continent: "Africa"
      },
      {
          name: "Malaysia",
          continent: "Asia"
      },
      {
          name: "Maldives",
          continent: "Asia"
      },
      {
          name: "Mali",
          continent: "Africa"
      },
      {
          name: "Malta",
          continent: "Europe"
      },
      {
          name: "Marshall Islands",
          continent: "Oceania"
      },
      {
          name: "Martinique",
          continent: "North America"
      },
      {
          name: "Mauritania",
          continent: "Africa"
      },
      {
          name: "Mauritius",
          continent: "Africa"
      },
      {
          name: "Mayotte",
          continent: "Africa"
      },
      {
          name: "Mexico",
          continent: "North America"
      },
      {
          name: "Micronesia, Federated States of",
          continent: "Oceania"
      },
      {
          name: "Moldova",
          continent: "Europe"
      },
      {
          name: "Monaco",
          continent: "Europe"
      },
      {
          name: "Mongolia",
          continent: "Asia"
      },
      {
          name: "Montenegro",
          continent: "Europe"
      },
      {
          name: "Montserrat",
          continent: "North America"
      },
      {
          name: "Morocco",
          continent: "Africa"
      },
      {
          name: "Mozambique",
          continent: "Africa"
      },
      {
          name: "Myanmar",
          continent: "Asia"
      },
      {
          name: "Namibia",
          continent: "Africa"
      },
      {
          name: "Nauru",
          continent: "Oceania"
      },
      {
          name: "Nepal",
          continent: "Asia"
      },
      {
          name: "Netherlands",
          continent: "Europe"
      },
      {
          name: "Netherlands Antilles",
          continent: "North America"
      },
      {
          name: "New Caledonia",
          continent: "Oceania"
      },
      {
          name: "New Zealand",
          continent: "Oceania"
      },
      {
          name: "Nicaragua",
          continent: "North America"
      },
      {
          name: "Niger",
          continent: "Africa"
      },
      {
          name: "Nigeria",
          continent: "Africa"
      },
      {
          name: "Niue",
          continent: "Oceania"
      },
      {
          name: "Norfolk Island",
          continent: "Oceania"
      },
      {
          name: "North Korea",
          continent: "Asia"
      },
      {
          name: "Northern Ireland",
          continent: "Europe"
      },
      {
          name: "Northern Mariana Islands",
          continent: "Oceania"
      },
      {
          name: "Norway",
          continent: "Europe"
      },
      {
          name: "Oman",
          continent: "Asia"
      },
      {
          name: "Pakistan",
          continent: "Asia"
      },
      {
          name: "Palau",
          continent: "Oceania"
      },
      {
          name: "Palestine",
          continent: "Asia"
      },
      {
          name: "Panama",
          continent: "North America"
      },
      {
          name: "Papua New Guinea",
          continent: "Oceania"
      },
      {
          name: "Paraguay",
          continent: "South America"
      },
      {
          name: "Peru",
          continent: "South America"
      },
      {
          name: "Philippines",
          continent: "Asia"
      },
      {
          name: "Pitcairn",
          continent: "Oceania"
      },
      {
          name: "Poland",
          continent: "Europe"
      },
      {
          name: "Portugal",
          continent: "Europe"
      },
      {
          name: "Puerto Rico",
          continent: "North America"
      },
      {
          name: "Qatar",
          continent: "Asia"
      },
      {
          name: "Reunion",
          continent: "Africa"
      },
      {
          name: "Romania",
          continent: "Europe"
      },
      {
          name: "Russian Federation",
          continent: "Europe"
      },
      {
          name: "Rwanda",
          continent: "Africa"
      },
      {
          name: "Saint Helena",
          continent: "Africa"
      },
      {
          name: "Saint Kitts and Nevis",
          continent: "North America"
      },
      {
          name: "Saint Lucia",
          continent: "North America"
      },
      {
          name: "Saint Pierre and Miquelon",
          continent: "North America"
      },
      {
          name: "Saint Vincent and the Grenadines",
          continent: "North America"
      },
      {
          name: "Samoa",
          continent: "Oceania"
      },
      {
          name: "San Marino",
          continent: "Europe"
      },
      {
          name: "Sao Tome and Principe",
          continent: "Africa"
      },
      {
          name: "Saudi Arabia",
          continent: "Asia"
      },
      {
          name: "Scotland",
          continent: "Europe"
      },
      {
          name: "Senegal",
          continent: "Africa"
      },
      {
          name: "Serbia",
          continent: "Europe"
      },
      {
          name: "Seychelles",
          continent: "Africa"
      },
      {
          name: "Sierra Leone",
          continent: "Africa"
      },
      {
          name: "Singapore",
          continent: "Asia"
      },
      {
          name: "Slovakia",
          continent: "Europe"
      },
      {
          name: "Slovenia",
          continent: "Europe"
      },
      {
          name: "Solomon Islands",
          continent: "Oceania"
      },
      {
          name: "Somalia",
          continent: "Africa"
      },
      {
          name: "South Africa",
          continent: "Africa"
      },
      {
          name: "South Georgia and the South Sandwich Islands",
          continent: "Antarctica"
      },
      {
          name: "South Korea",
          continent: "Asia"
      },
      {
          name: "South Sudan",
          continent: "Africa"
      },
      {
          name: "Spain",
          continent: "Europe"
      },
      {
          name: "Sri Lanka",
          continent: "Asia"
      },
      {
          name: "Sudan",
          continent: "Africa"
      },
      {
          name: "Suriname",
          continent: "South America"
      },
      {
          name: "Svalbard and Jan Mayen",
          continent: "Europe"
      },
      {
          name: "Swaziland",
          continent: "Africa"
      },
      {
          name: "Sweden",
          continent: "Europe"
      },
      {
          name: "Switzerland",
          continent: "Europe"
      },
      {
          name: "Syria",
          continent: "Asia"
      },
      {
          name: "Tajikistan",
          continent: "Asia"
      },
      {
          name: "Tanzania",
          continent: "Africa"
      },
      {
          name: "Thailand",
          continent: "Asia"
      },
      {
          name: "The Democratic Republic of Congo",
          continent: "Africa"
      },
      {
          name: "Togo",
          continent: "Africa"
      },
      {
          name: "Tokelau",
          continent: "Oceania"
      },
      {
          name: "Tonga",
          continent: "Oceania"
      },
      {
          name: "Trinidad and Tobago",
          continent: "North America"
      },
      {
          name: "Tunisia",
          continent: "Africa"
      },
      {
          name: "Turkey",
          continent: "Asia"
      },
      {
          name: "Turkmenistan",
          continent: "Asia"
      },
      {
          name: "Turks and Caicos Islands",
          continent: "North America"
      },
      {
          name: "Tuvalu",
          continent: "Oceania"
      },
      {
          name: "Uganda",
          continent: "Africa"
      },
      {
          name: "Ukraine",
          continent: "Europe"
      },
      {
          name: "United Arab Emirates",
          continent: "Asia"
      },
      {
          name: "United Kingdom",
          continent: "Europe"
      },
      {
          name: "United States",
          continent: "North America"
      },
      {
          name: "United States Minor Outlying Islands",
          continent: "Oceania"
      },
      {
          name: "Uruguay",
          continent: "South America"
      },
      {
          name: "Uzbekistan",
          continent: "Asia"
      },
      {
          name: "Vanuatu",
          continent: "Oceania"
      },
      {
          name: "Venezuela",
          continent: "South America"
      },
      {
          name: "Vietnam",
          continent: "Asia"
      },
      {
          name: "Virgin Islands, British",
          continent: "North America"
      },
      {
          name: "Virgin Islands, U.S.",
          continent: "North America"
      },
      {
          name: "Wales",
          continent: "Europe"
      },
      {
          name: "Wallis and Futuna",
          continent: "Oceania"
      },
      {
          name: "Western Sahara",
          continent: "Africa"
      },
      {
          name: "Yemen",
          continent: "Asia"
      },
      {
          name: "Zambia",
          continent: "Africa"
      },
      {
          name: "Zimbabwe",
          continent: "Africa"
      }
    // Add more countries and continents here
  ];
  
  //suggest countries function
  function suggestCountries(inputValue) {
    const suggestions = countriesData.filter(country =>
      country.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    return suggestions.slice(0, 5); // Return up to 5 suggestions
  }
  
  //adds clicked recomendation to the input box
  function updateOriginSuggestion(inputValue) {
    const originSuggestionList = document.getElementById("origin-suggestions");
    originSuggestionList.innerHTML = "";
  
    const suggestions = suggestCountries(inputValue);
  
    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement("li");
      suggestionItem.textContent = suggestion.name + " (" + suggestion.continent + ")";
      suggestionItem.addEventListener("click", () => {
        document.getElementById("recipe-origin").value = suggestion.name + ", " + suggestion.continent;
        originSuggestionList.innerHTML = ""; // Clear suggestions
      });
      originSuggestionList.appendChild(suggestionItem);
    });
  }

  const originInput = document.getElementById("recipe-origin");
  const originSuggestionList = document.getElementById("origin-suggestions");
  
  originInput.addEventListener("input", event => {
    const inputValue = event.target.value;
    updateOriginSuggestion(inputValue);
  
    if (inputValue) {
      originSuggestionList.style.display = "block";
    } else {
      originSuggestionList.style.display = "none";
    }
  });
  
  document.addEventListener("click", event => {
    if (!originSuggestionList.contains(event.target)) {
      originSuggestionList.style.display = "none";
    }
  });

  document.getElementById("difficulty").addEventListener("change", displayRecipes);
  document.getElementById("food").addEventListener("change", displayRecipes);
  document.getElementById("base").addEventListener("change", displayRecipes);
  document.getElementById("origin").addEventListener("input", displayRecipes);
  document.getElementById("search").addEventListener("input", displayRecipes);
  document.getElementById("randomize-btn").addEventListener("click", onRandomizeButtonClick);
  
  // Initial display of recipes
  displayRecipes();