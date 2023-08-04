const recipes = [
    {
      name: "Steak Sandwich",
      difficulty: "medium",
      food: "meat",
      base: "bread",
      origin: "France, Europe",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrrPX6cWTnAnSlzr2NeOTT42guOS_CY2fCaV5kHvd8h0spiJtCtYgwLU2jpcB8P8RRc0&usqp=CAU",
      link: "https://www.youtube.com/watch?app=desktop&v=jwu2y9x5OlM&t=5m06s&ab_channel=GordonRamsay",
      notes: "",
    },
    {
      "name": "Salmon",
      "difficulty": "medium",
      "food": "meat",
      "base": "none",
      "origin": "France Europe",
      "imageLink": "data:image/jpeg;base64,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",
      "link": "https://www.youtube.com/watch?v=rR9wq5uN_q8&ab_channel=TheFWord",
      "notes": ""
    },
    
    {
      "name": "Cheese Capuns",
      "difficulty": "medium",
      "food": "vegetarian",
      "base": "none",
      "origin": "Switzerland, Europe",
      "imageLink": "https://wildeisen-prod-fastly.yanova.ch/assets/image/8e4f6cb2-a0e6-42ee-9f65-9aeb2a0ef231",
      "link": "https://www.wildeisen.ch/rezepte/kaese-capuns-mit-kraeutern",
      "notes": ""
    },
    
    {
      "name": "Strawberry Risotto",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "rice",
      "origin": "Italy Europe",
      "imageLink": "https://thomassixt.de/wp-content/uploads/2019/02/erdbeer-risotto-rezept-bild.jpg",
      "link": "https://thomassixt.de/rezept/erdbeerrisotto/",
      "notes": ""
    },
    
    {
      "name": "Couscous Tabbouleh",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "grains",
      "origin": "Lebanon Africa",
      "imageLink": "https://klaraslife.com/wp-content/uploads/2019/01/taboulehDSC09023.jpg",
      "link": "",
      "notes": ""
    }
    // Add more recipes here
  ];
  
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
    recipeLink.textContent = "Recipe: " + recipe.link;

    const recipeNotes = document.createElement("p");
    recipeNotes.textContent = "Notes: " + recipe.notes;
  
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
  
  document.getElementById("clear-recipes-btn").addEventListener("click", clearRecipes);
  document.getElementById("copy-to-clipboard-btn").addEventListener("click", copyToClipboard);
  document.getElementById("add-recipe-btn").addEventListener("click", showLightbox);
  document.getElementById("close-lightbox-btn").addEventListener("click", hideLightbox);
  
  const recipeForm = document.getElementById("recipe-form");
  recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    createRecipeObject();
  });

  document.getElementById("difficulty").addEventListener("change", displayRecipes);
  document.getElementById("food").addEventListener("change", displayRecipes);
  document.getElementById("base").addEventListener("change", displayRecipes);
  document.getElementById("origin").addEventListener("input", displayRecipes);
  document.getElementById("search").addEventListener("input", displayRecipes);
  document.getElementById("randomize-btn").addEventListener("click", onRandomizeButtonClick);
  
  // Initial display of recipes
  displayRecipes();