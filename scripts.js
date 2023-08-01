const recipes = [
    {
      name: "Pasta Carbonara",
      difficulty: "easy",
      food: "meat",
      base: "pasta",
      origin: "Italy, Europe",
      link: "https://lucabusby.github.io/FoodSite/",
    },
    {
      name: "Veggie Stir-Fry",
      difficulty: "medium",
      food: "vegetarian",
      base: "none",
      origin: "China, Asia",
      link: "https://lucabusby.github.io/FoodSite/",
    },
    {
      name: "Boeuf Bourguignon",
      difficulty: "hard",
      food: "meat",
      base: "none",
      origin: "France, Europe",
      link: "https://lucabusby.github.io/FoodSite/",
    },
    // Add more recipes here
  ];
  
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
    recipeLink.textContent = "Link: " + recipe.link;
  
    recipeDetails.appendChild(recipeName);
    recipeDetails.appendChild(recipeDifficulty);
    recipeDetails.appendChild(recipeFood);
    recipeDetails.appendChild(recipeBase);
    recipeDetails.appendChild(recipeOrigin);
    recipeDetails.appendChild(recipeLink);
  
    content.appendChild(closeBtn);
    content.appendChild(recipeDetails);
    overlay.appendChild(content);
  
    document.body.appendChild(overlay);
  }

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
  
        const imagePlaceholder = document.createElement("img");
        imagePlaceholder.alt = "Recipe Image";
        recipeCard.appendChild(imagePlaceholder);
  
        const recipeName = document.createElement("h3");
        recipeName.textContent = recipe.name;
        recipeCard.appendChild(recipeName);
  
        recipesContainer.appendChild(recipeCard);
      }
    });
  }
  
  document.getElementById("difficulty").addEventListener("change", displayRecipes);
  document.getElementById("food").addEventListener("change", displayRecipes);
  document.getElementById("base").addEventListener("change", displayRecipes);
  document.getElementById("origin").addEventListener("input", displayRecipes);
  document.getElementById("search").addEventListener("input", displayRecipes);
  
  // Initial display of recipes
  displayRecipes();
  