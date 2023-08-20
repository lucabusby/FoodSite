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
      "imageLink": "https://www.foodandwine.com/thmb/0Q_VTxhpKxzZih_7e8WfnpcWx64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How-to-Cook-Salmon-FT-BLOG1222-10de5a17538c4c9ea812b1372a221110.jpg",
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
      "notes": "Couscous\n\nMix with cucumber, cherry tomatoes, paprika, peppermint, raisins, feta cheese, pomegranate &/ figs"
    },
    {
      "name": "Mauazna",
      "difficulty": "hard",
      "food": "vegetarian",
      "base": "bread",
      "origin": "France, Europe",
      "imageLink": "https://crumbsandcaramel.com/wp-content/uploads/2018/06/IMG_3522-2-300x300.jpg",
      "link": "",
      "notes": "verschideni gmües arte (kein broccoli), mind 3h choche (mit saitan)"
    },
    {
      "name": "Mushroom Leek Pasta",
      "difficulty": "easy",
      "food": "vegetarian",
      "base": "pasta",
      "origin": "Italy, Europe",
      "imageLink": "https://biancazapatka.com/wp-content/uploads/2019/12/vegan-mushroom-stroganoff-best-recipe-creamy-pasta-sauce.jpg",
      "link": "",
      "notes": "Steinporcino mushroom/Champignons, Leek!"
    },
    {
        "name": "Steak with Mashed Potatoes",
        "difficulty": "medium",
        "food": "meat",
        "base": "vegetables",
        "origin": "France, Europe",
        "imageLink": "https://data.thefeedfeed.com/static/2020/01/14/15790145665e1dd9a60bae1.png",
        "link": "",
        "notes": "Steak with mashed/roast potatoes. Add broccoli/peas/beans."
      },
      {
        "name": "Lemon-Zucchini Orzo Salad",
        "difficulty": "easy",
        "food": "vegan",
        "base": "pasta",
        "origin": "Italy, Europe",
        "imageLink": "https://cdn.loveandlemons.com/wp-content/uploads/2017/08/IMG_2017_08_02_10745-cropped.jpg",
        "link": "https://www.loveandlemons.com/orzo-recipe/",
        "notes": ""
      },
      {
        "name": "Pasta with Ratatouille",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "pasta",
        "origin": "France, Europe",
        "imageLink": "https://www.kleinkuenstlerkueche.de/wp-content/uploads/2021/02/Ratatouille-Pasta-RB.jpg",
        "link": "",
        "notes": "Pasta with:\n\nOnions, Garlic, Zuccini, Aubergine, Tomatoes, Paprika & Belati."
      },
      {
        "name": "Tortellini with Cheese-Cream Sauce",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "pasta",
        "origin": "Italy, Europe",
        "imageLink": "https://www.thereciperebel.com/wp-content/uploads/2022/02/creamy-cheese-tortellini-TRR-1200-6-of-21.jpg",
        "link": "https://www.thereciperebel.com/creamy-cheese-tortellini/",
        "notes": ""
      },
      {
        "name": "Potato Pizza",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "bread",
        "origin": "Italy, Europe",
        "imageLink": "https://img.delicious.com.au/IPB4eND5/w759-h506-cfill/del/2020/07/taleggio-pizza-with-onion-potato-and-rosemary-136378-1.jpg",
        "link": "https://www.delicious.com.au/recipes/taleggio-pizza-onion-potato-rosemary-recipe/40afk4dr",
        "notes": ""
      },
      {
        "name": "Filled Zucchini",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "vegetables",
        "origin": "Europe",
        "imageLink": "https://www.bettybossi.ch/static/rezepte/x/bb_bbzh100915_0010a_x.jpg",
        "link": "https://www.bettybossi.ch/de/Rezept/ShowRezept/BB_BBZH100915_0010A-40-de",
        "notes": ""
      },
      {
        "name": "Homemade Burger",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "bread",
        "origin": "United States, North America",
        "imageLink": "https://market.meridianfarmmarket.ca/wp-content/uploads/2017/03/bigstock-Hamburger-homemade-hamburger-107778380.jpg",
        "link": "",
        "notes": "Cut onions into rings and cook with patty. Cut tomatoes & salad. When the onions are caramelised take them out. When the patty is nearly done add cheese on top and a splay of water beside. Put the lid on to make the cheese melt. Slightly toast the buns in the same pan. Add sauce to the bunns and all ingrediants."
      },
      {
        "name": "Homemade Burger",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "bread",
        "origin": "United States, North America",
        "imageLink": "https://www.malteskitchen.de/wp-content/uploads/2019/06/beyond-meat-burger-7024.jpg",
        "link": "",
        "notes": "Cut onions into rings and cook with patty. Cut tomatoes & salad. When the onions are caramelised take them out. When the patty is nearly done add cheese on top and a splay of water beside. Put the lid on to make the cheese melt. Slightly toast the buns in the same pan. Add sauce to the bunns and all ingrediants."
      },
      {
        "name": "Vegetable Pizza",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "bread",
        "origin": "Italy",
        "imageLink": "https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1.jpg",
        "link": "",
        "notes": "Just top the pizza with any vegetables"
      },
      {
        "name": "Bruschetta",
        "difficulty": "easy",
        "food": "vegan",
        "base": "bread",
        "origin": "Italy, Europe",
        "imageLink": "https://www.sanpellegrino.com/de/sites/g/files/xknfdk2266/files/styles/amp_1200x900_4_3/public/bruschetta_h_15.jpg.webp?itok=mlHABATB",
        "link": "https://www.thespruceeats.com/how-to-make-bruschetta-2020459",
        "notes": ""
      },
      {
        "name": "Greek Salad",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "vegetables",
        "origin": "Greece, Europe",
        "imageLink": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
        "link": "https://downshiftology.com/recipes/greek-salad/",
        "notes": ""
      },
      {
        "name": "Homemade Sun-Dried Tomato Pesto Pasta",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "none",
        "origin": "Italy, Europe",
        "imageLink": "https://www.platingsandpairings.com/wp-content/uploads/2020/10/sun-dried-tomato-pesto-18-scaled.jpg",
        "link": "https://www.platingsandpairings.com/sun-dried-tomato-pesto-pesto-rosso/",
        "notes": ""
      },
      {
        "name": "Steak Salad",
        "difficulty": "easy",
        "food": "meat",
        "base": "vegetables",
        "origin": "France, Europe",
        "imageLink": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/12/16/FN_Giada-De-Laurentiis_Steak-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1671459248306.jpeg",
        "link": "https://www.foodnetwork.com/recipes/giada-de-laurentiis/steak-salad-recipe-1942188",
        "notes": ""
      },
      {
        "name": "Tortilla Española",
        "difficulty": "easy",
        "food": "vegetarian",
        "base": "none",
        "origin": "Spain, Europe",
        "imageLink": "https://www.daskochrezept.de/sites/daskochrezept.de/files/styles/full_width_tablet_4_3/public/rezepte/2012/12/Tortilla-Espanola-Spanische-Tortilla-Omelett-50c66e2125a89.jpg?h=4b65041b&itok=L1sJGMDp",
        "link": "https://www.daskochrezept.de/rezepte/tortilla-espanola-spanische-tortillaomelett",
        "notes": ""
      },
      {
        "name": "Rice Noodle Salad",
        "difficulty": "medium",
        "food": "meat",
        "base": "none",
        "origin": "China, Asia",
        "imageLink": "https://www.recipetineats.com/wp-content/uploads/2014/08/Vermicelli-Noodle-Salad_7.jpg?resize=650,910",
        "link": "https://www.recipetineats.com/asian-vermicelli-noodle-salad/",
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