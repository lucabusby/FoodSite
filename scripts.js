const recipes = [
    {
      name: "Pasta Carbonara",
      difficulty: "easy",
      food: "meat",
      base: "pasta",
      origin: "Europe Italy",
    },
    {
      name: "Veggie Stir-Fry",
      difficulty: "medium",
      food: "vegetarian",
      base: "none",
      origin: "Asia China",
    },
    {
      name: "Boeuf Bourguignon",
      difficulty: "hard",
      food: "meat",
      base: "none",
      origin: "Europe France",
    },
    // Add more recipes here
  ];
  
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
  