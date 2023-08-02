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
    const notes = document.getElementById("recipe-notes").value;
  
    const recipe = {
      name: name,
      difficulty: difficulty,
      food: diet,
      base: base,
      origin: origin,
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
      .join(",\n\n"); // Add a comma after each recipe JSON, except the last one
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