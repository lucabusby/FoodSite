const recipes = [
    {
      name: "Pasta Carbonara",
      difficulty: "easy",
      food: "meat",
      base: "pasta",
      origin: "Italy, Europe",
      imageLink: "https://www.bettybossi.ch/rdbimg/bb_apxx030601_0075a/bb_apxx030601_0075a_r01_v005_x0010.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "this is very",
    },
    {
      name: "Veggie Stir-Fry",
      difficulty: "medium",
      food: "vegetarian",
      base: "none",
      origin: "China, Asia",
      imageLink: "https://food-images.files.bbci.co.uk/food/recipes/sachas_stir-fry_17077_16x9.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "",
    },
    {
      name: "Boeuf Bourguignon",
      difficulty: "hard",
      food: "meat",
      base: "none",
      origin: "France, Europe",
      imageLink: "https://instakoch.de/wp-content/uploads/2022/09/Boeuf-Bourguignon-050922-5x4-002-scaled.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "",
    },
    {
      name: "Pasta Carbonara",
      difficulty: "easy",
      food: "meat",
      base: "pasta",
      origin: "Italy, Europe",
      imageLink: "https://www.bettybossi.ch/rdbimg/bb_apxx030601_0075a/bb_apxx030601_0075a_r01_v005_x0010.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "this is very",
    },
    {
      name: "Veggie Stir-Fry",
      difficulty: "medium",
      food: "vegetarian",
      base: "none",
      origin: "China, Asia",
      imageLink: "https://food-images.files.bbci.co.uk/food/recipes/sachas_stir-fry_17077_16x9.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "",
    },
    {
      name: "Boeuf Bourguignon",
      difficulty: "hard",
      food: "meat",
      base: "none",
      origin: "France, Europe",
      imageLink: "https://instakoch.de/wp-content/uploads/2022/09/Boeuf-Bourguignon-050922-5x4-002-scaled.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "",
    },
    {
      name: "Pasta Carbonara",
      difficulty: "easy",
      food: "meat",
      base: "pasta",
      origin: "Italy, Europe",
      imageLink: "https://www.bettybossi.ch/rdbimg/bb_apxx030601_0075a/bb_apxx030601_0075a_r01_v005_x0010.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "this is very",
    },
    {
      name: "Veggie Stir-Fry",
      difficulty: "medium",
      food: "vegetarian",
      base: "none",
      origin: "China, Asia",
      imageLink: "https://food-images.files.bbci.co.uk/food/recipes/sachas_stir-fry_17077_16x9.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "",
    },
    {
      name: "Boeuf Bourguignon",
      difficulty: "hard",
      food: "meat",
      base: "none",
      origin: "France, Europe",
      imageLink: "https://instakoch.de/wp-content/uploads/2022/09/Boeuf-Bourguignon-050922-5x4-002-scaled.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "",
    },

    {
      name: "Pasta Carbonara",
      difficulty: "easy",
      food: "meat",
      base: "pasta",
      origin: "Italy, Europe",
      imageLink: "https://www.bettybossi.ch/rdbimg/bb_apxx030601_0075a/bb_apxx030601_0075a_r01_v005_x0010.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "this is very",
    },
    {
      name: "Veggie Stir-Fry",
      difficulty: "medium",
      food: "vegetarian",
      base: "none",
      origin: "China, Asia",
      imageLink: "https://food-images.files.bbci.co.uk/food/recipes/sachas_stir-fry_17077_16x9.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "",
    },
    {
      name: "Boeuf Bourguignon",
      difficulty: "hard",
      food: "meat",
      base: "none",
      origin: "France, Europe",
      imageLink: "https://instakoch.de/wp-content/uploads/2022/09/Boeuf-Bourguignon-050922-5x4-002-scaled.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "",
    },

    {
      name: "Pasta Carbonara",
      difficulty: "easy",
      food: "meat",
      base: "pasta",
      origin: "Italy, Europe",
      imageLink: "https://www.bettybossi.ch/rdbimg/bb_apxx030601_0075a/bb_apxx030601_0075a_r01_v005_x0010.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "this is very",
    },
    {
      name: "Veggie Stir-Fry",
      difficulty: "medium",
      food: "vegetarian",
      base: "none",
      origin: "China, Asia",
      imageLink: "https://food-images.files.bbci.co.uk/food/recipes/sachas_stir-fry_17077_16x9.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
      notes: "",
    },
    {
      name: "Boeuf Bourguignon",
      difficulty: "hard",
      food: "meat",
      base: "none",
      origin: "France, Europe",
      imageLink: "https://instakoch.de/wp-content/uploads/2022/09/Boeuf-Bourguignon-050922-5x4-002-scaled.jpg",
      link: "https://lucabusby.github.io/FoodSite/",
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

  document.getElementById("difficulty").addEventListener("change", displayRecipes);
  document.getElementById("food").addEventListener("change", displayRecipes);
  document.getElementById("base").addEventListener("change", displayRecipes);
  document.getElementById("origin").addEventListener("input", displayRecipes);
  document.getElementById("search").addEventListener("input", displayRecipes);
  document.getElementById("randomize-btn").addEventListener("click", onRandomizeButtonClick);
  
  // Initial display of recipes
  displayRecipes();