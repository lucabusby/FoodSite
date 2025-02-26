/*------------------------------------------------------------------------------
  LIGHTBOX FUNCTIONS (ADD RECIPE)
------------------------------------------------------------------------------*/
// --- Add Recipe Lightbox Functions --- 

/**
 * Shows the "Add Recipe" lightbox and sets up an Esc key listener.
 */
function showLightbox() {
    const lightbox = document.getElementById("add-recipe-lightbox");
    lightbox.style.display = "flex";
    document.addEventListener("keydown", addRecipeLightboxEscHandler);
  }
  
  /**
   * Hides the "Add Recipe" lightbox, removes its Esc key listener, and resets the form.
   */
  function hideLightbox() {
    const lightbox = document.getElementById("add-recipe-lightbox");
    lightbox.style.display = "none";
    document.removeEventListener("keydown", addRecipeLightboxEscHandler);
    clearRecipeForm();
  }
  
  /**
   * Handler for closing the add recipe lightbox when the Escape key is pressed.
   */
  function addRecipeLightboxEscHandler(e) {
    if (e.key === "Escape") {
      hideLightbox();
    }
  }
  
  // --- Event Listener for Clicking Outside the Lightbox Content --- 
  document
    .getElementById("add-recipe-lightbox")
    .addEventListener("click", function (e) {
      // If the user clicks directly on the overlay (not its inner content), close the lightbox.
      if (e.target === this) {
        hideLightbox();
      }
    });
  
  /**
   * Reset the recipe form inputs.
   */
  function clearRecipeForm() {
    document.getElementById("recipe-form").reset();
  }
  
  /*------------------------------------------------------------------------------
    FILTER FUNCTIONS
  ------------------------------------------------------------------------------*/
  /**
   * Update applied filter pills based on current filter values.
   */
  function updateAppliedFilters() {
    const appliedContainer = document.getElementById("applied-filters");
    appliedContainer.innerHTML = ""; // Clear previous pills
  
    const difficulty = document.getElementById("difficulty").value.toLowerCase();
    const base = document.getElementById("base").value.toLowerCase();
    const origin = document.getElementById("origin").value.trim();
  
    if (difficulty !== "all") {
      appliedContainer.appendChild(createFilterPill("Difficulty", difficulty));
    }
    if (base !== "all") {
      appliedContainer.appendChild(createFilterPill("Base", base));
    }
    if (origin !== "") {
      appliedContainer.appendChild(createFilterPill("Origin", origin));
    }
  }
  
  /**
   * Create a filter pill element.
   * @param {string} label - Filter name.
   * @param {string} value - Filter value.
   * @returns {HTMLElement} - The filter pill element.
   */
  function createFilterPill(label, value) {
    const pill = document.createElement("div");
    pill.classList.add("filter-pill");
    pill.textContent = `${label}: ${value}`;
  
    const removeBtn = document.createElement("span");
    removeBtn.classList.add("filter-pill-remove");
    removeBtn.textContent = "×";
    removeBtn.dataset.filterKey = label.toLowerCase();
  
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeFilter(removeBtn.dataset.filterKey);
    });
  
    pill.appendChild(removeBtn);
    return pill;
  }
  
  /**
   * Remove a filter by resetting its corresponding control.
   * @param {string} filterKey - The filter to remove.
   */
  function removeFilter(filterKey) {
    if (filterKey === "difficulty") {
      document.getElementById("difficulty").value = "all";
    } else if (filterKey === "base") {
      document.getElementById("base").value = "all";
    } else if (filterKey === "origin") {
      document.getElementById("origin").value = "";
    }
    updateAppliedFilters();
    displayRecipes();
  }
  
  /*------------------------------------------------------------------------------
    ADD RECIPE FUNCTIONS
  ------------------------------------------------------------------------------*/
  // Array to store recipes added via the form.
  let addedRecipes = [];
  
  /**
   * Create a new recipe object from the form and update the list.
   */
  function createRecipeObject() {
    const recipe = {
      name: document.getElementById("recipe-name").value,
      difficulty: document.getElementById("recipe-difficulty").value,
      base: document.getElementById("recipe-base").value,
      origin: document.getElementById("recipe-origin").value,
      imageLink: document.getElementById("recipe-imageLink").value,
      link: document.getElementById("recipe-link").value,
      notes: document.getElementById("recipe-notes").value,
    };
  
    addedRecipes.push(recipe);
    displayAddedRecipes();
    clearRecipeForm();
  }
  
  /**
   * Display the added recipes as formatted JSON.
   */
  function displayAddedRecipes() {
    const output = document.getElementById("recipe-text-output");
    output.textContent = addedRecipes
      .map((recipe) => JSON.stringify(recipe, null, 2))
      .join(",\n");
  }
  
  /**
   * Copy the added recipes JSON to the clipboard.
   */
  function copyToClipboard() {
    const output = document.getElementById("recipe-text-output").textContent;
    const textarea = document.createElement("textarea");
    textarea.value = output;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  
  /**
   * Clear all added recipes.
   */
  function clearRecipes() {
    addedRecipes = [];
    displayAddedRecipes();
  }
  
  /*------------------------------------------------------------------------------
    RECIPE OVERLAY & DISPLAY FUNCTIONS
  ------------------------------------------------------------------------------*/
  /**
   * Create an overlay to display full recipe details.
   * @param {Object} recipe - The recipe object.
   */
  function createRecipeOverlay(recipe) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    const content = document.createElement("div");
    content.classList.add("overlay-content", "recipe-overlay");
  
    // Overlay Top: Recipe image
    const overlayTop = document.createElement("div");
    overlayTop.classList.add("overlay-top");
    const img = document.createElement("img");
    img.src = recipe.imageLink;
    img.alt = "Recipe Image";
    img.classList.add("responsive-img");
    overlayTop.appendChild(img);
  
    // Overlay Middle: Recipe title
    const overlayMiddle = document.createElement("div");
    overlayMiddle.classList.add("overlay-middle");
    const title = document.createElement("h2");
    title.textContent = recipe.name;
    overlayMiddle.appendChild(title);
  
    // Overlay Bottom: Recipe details (difficulty, origin, base)
    const overlayBottom = document.createElement("div");
    overlayBottom.classList.add("overlay-bottom");
  
    // Left column: Difficulty and Origin
    const leftCol = document.createElement("div");
    leftCol.classList.add("overlay-left");
    leftCol.appendChild(createOverlayDetail("DIFFICULTY:", recipe.difficulty));
    leftCol.appendChild(createOverlayDetail("ORIGIN:", recipe.origin));
  
    // Right column: Base
    const rightCol = document.createElement("div");
    rightCol.classList.add("overlay-right");
    rightCol.appendChild(createOverlayDetail("BASE:", recipe.base));
  
    // Bottom full-width: Recipe link and notes
    const bottomCol = document.createElement("div");
    bottomCol.classList.add("overlay-bottom-full");
    const sectionTitle = document.createElement("p");
    sectionTitle.classList.add("overlay-detail-title");
    sectionTitle.textContent = "RECIPE:";
    bottomCol.appendChild(sectionTitle);
  
    if (recipe.link) {
      const linkElement = document.createElement("a");
      linkElement.href = recipe.link;
      linkElement.textContent = "View Recipe";
      linkElement.target = "_blank";
      bottomCol.appendChild(linkElement);
    }
    const notes = document.createElement("h3");
    notes.textContent = recipe.notes;
    bottomCol.appendChild(notes);
  
    overlayBottom.appendChild(leftCol);
    overlayBottom.appendChild(rightCol);
    overlayBottom.appendChild(bottomCol);
  
    // Assemble overlay content
    content.appendChild(overlayTop);
    content.appendChild(overlayMiddle);
    content.appendChild(overlayBottom);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
  
    // Close overlay on outside click or Esc key press
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeOverlay();
    });

    function onKeyDown(e) {
      if (e.key === "Escape") closeOverlay();
    }
    document.addEventListener("keydown", onKeyDown);

    function closeOverlay() {
        document.body.removeChild(overlay);
        document.removeEventListener("keydown", onKeyDown);
      }
  }
  
  /**
   * Helper to create overlay detail sections.
   * @param {string} label - Detail label.
   * @param {string} value - Detail value.
   * @returns {HTMLElement} - A paragraph element with the detail.
   */
  function createOverlayDetail(label, value) {
    const detail = document.createElement("h3");
    detail.textContent = label;
    const valueEl = document.createElement("p");
    valueEl.textContent = value;
    const container = document.createElement("div");
    container.appendChild(detail);
    container.appendChild(valueEl);
    return container;
  }
  
  /**
   * Display the recipe cards based on current filters.
   */
  function displayRecipes() {
    const container = document.getElementById("recipes-container");
    container.innerHTML = "";
  
    const searchFilter = document.getElementById("search").value.toLowerCase();
    const difficultyFilter = document.getElementById("difficulty").value.toLowerCase();
    const baseFilter = document.getElementById("base").value.toLowerCase();
    const originFilter = document.getElementById("origin").value.toLowerCase();
  
    recipes.forEach((recipe) => {
      if (
        (difficultyFilter === "all" || recipe.difficulty.toLowerCase() === difficultyFilter) &&
        (baseFilter === "all" || recipe.base.toLowerCase() === baseFilter) &&
        (!originFilter || recipe.origin.toLowerCase().includes(originFilter)) &&
        (!searchFilter || recipe.name.toLowerCase().includes(searchFilter))
      ) {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.addEventListener("click", () => createRecipeOverlay(recipe));
  
        // Card Top: Image
        const cardTop = document.createElement("div");
        cardTop.classList.add("card-top");
        const img = document.createElement("img");
        img.src = recipe.imageLink;
        img.alt = "Recipe Image";
        img.classList.add("responsive-img");
        cardTop.appendChild(img);
  
        // Card Middle: Title
        const cardMiddle = document.createElement("div");
        cardMiddle.classList.add("card-middle");
        const title = document.createElement("h2");
        title.textContent = recipe.name;
        cardMiddle.appendChild(title);
  
        // Card Bottom: Difficulty and Origin
        const cardBottom = document.createElement("div");
        cardBottom.classList.add("card-bottom");
  
        // Difficulty with dots
        const difficultyDiv = document.createElement("div");
        difficultyDiv.classList.add("card-difficulty");
        const diffTitle = document.createElement("h3");
        diffTitle.classList.add("card-title");
        diffTitle.textContent = "DIFFICULTY";
        difficultyDiv.appendChild(diffTitle);
  
        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("card-dots");
        const totalDots = 3;
        let filledDots = recipe.difficulty.toLowerCase() === "easy"
          ? 1
          : recipe.difficulty.toLowerCase() === "medium"
          ? 2
          : recipe.difficulty.toLowerCase() === "hard"
          ? 3
          : 0;
        for (let i = 0; i < totalDots; i++) {
          const dot = document.createElement("span");
          dot.classList.add("dot");
          if (i < filledDots) dot.classList.add("filled");
          dotsContainer.appendChild(dot);
        }
        difficultyDiv.appendChild(dotsContainer);
  
        // Origin
        const originDiv = document.createElement("div");
        originDiv.classList.add("card-origin");
        const originTitle = document.createElement("h3");
        originTitle.classList.add("card-title");
        originTitle.textContent = "ORIGIN";
        originDiv.appendChild(originTitle);
        const originValue = document.createElement("p");
        originValue.classList.add("card-origin-value");
        originValue.textContent = recipe.origin;
        originDiv.appendChild(originValue);
  
        cardBottom.appendChild(difficultyDiv);
        cardBottom.appendChild(originDiv);
  
        // Assemble card
        card.appendChild(cardTop);
        card.appendChild(cardMiddle);
        card.appendChild(cardBottom);
        container.appendChild(card);
      }
    });
  
    // Update recipe counter
    document.getElementById("recipe-counter").textContent =
      "Total Recipes: " + container.childElementCount;
  }
  
  /**
   * Shuffle the recipes array using Fisher-Yates algorithm.
   * @param {Array} array - The array to shuffle.
   */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  /*------------------------------------------------------------------------------
    EMAIL FUNCTIONALITY
  ------------------------------------------------------------------------------*/
  function generateEmailBody() {
    const recipeTextOutput = document.getElementById("recipe-text-output");
    return encodeURIComponent(recipeTextOutput.textContent);
  }
  
  function sendRecipesByEmail() {
    const emailBody = generateEmailBody();
    const emailSubject = encodeURIComponent("Recipes for You");
    const emailAddress = "lucabusby@bluewin.ch";
    const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    
    window.location.href = mailtoLink;
  }
  
  document.getElementById("send-to-email-btn").addEventListener("click", sendRecipesByEmail);
  
  /*------------------------------------------------------------------------------
    EVENT LISTENERS & INITIALIZATION
  ------------------------------------------------------------------------------*/
  // Lightbox and recipe form events
  document.getElementById("copy-to-clipboard-btn").addEventListener("click", copyToClipboard);
  document.getElementById("clear-recipes-btn").addEventListener("click", clearRecipes);
  document.getElementById("add-recipe-btn").addEventListener("click", showLightbox);
  document.getElementById("recipe-form").addEventListener("submit", (event) => {
    event.preventDefault();
    createRecipeObject();
  });
  
  // Filter lightbox events
  document.getElementById("filter-btn").addEventListener("click", () => {
    const filterLightbox = document.getElementById("filter-lightbox");
    filterLightbox.style.display = "flex";
    document.addEventListener("keydown", filterLightboxEscHandler);
  });
  
  document.getElementById("filter-lightbox").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeFilterLightbox();
  });
  
  function filterLightboxEscHandler(e) {
    if (e.key === "Escape") closeFilterLightbox();
  }
  
  function closeFilterLightbox() {
    const filterLightbox = document.getElementById("filter-lightbox");
    filterLightbox.style.display = "none";
    document.removeEventListener("keydown", filterLightboxEscHandler);
  }
  
  document.getElementById("apply-filters-btn").addEventListener("click", () => {
    closeFilterLightbox();
    updateAppliedFilters();
    displayRecipes();
  });
  
  // Update recipes on search input change
  document.getElementById("search").addEventListener("input", displayRecipes);
  
  // On page load: shuffle and display recipes
  window.onload = function () {
    shuffleArray(recipes);
    displayRecipes();
  };