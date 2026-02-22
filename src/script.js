document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const recipeContainer = document.getElementById("recipe-container");
  const searchInput = document.getElementById("search-input");
  const filterChips = document.querySelectorAll(".filter-chip");
  const modal = document.getElementById("recipe-modal");
  const modalBody = document.getElementById("modal-body");
  const closeModal = document.querySelector(".close-modal");
  const addRecipeBtn = document.getElementById("add-recipe-btn");
  const recipesCounter = document.querySelector(".recipes-counter");

  let allRecipes = []; // Store fetched recipes for filtering

  // Fetch and display recipes
  async function loadRecipes() {
    try {
      const response = await fetch("data/recipes.json");
      if (!response.ok) {
        throw new Error("Failed to load recipes");
      }
      allRecipes = await response.json();
      displayRecipes(allRecipes);
    } catch (error) {
      console.error("Error:", error);
      recipeContainer.innerHTML =
        '<p class="error-msg">Failed to load delicious recipes. Please try again later.</p>';
    }
  }

  function displayRecipes(recipes) {
    recipeContainer.innerHTML = "";

    if (recipesCounter) {
      recipesCounter.textContent = recipes.length;
    }

    if (recipes.length === 0) {
      recipeContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">
                    <h3>No recipes found 🍳</h3>
                    <p>Try searching for something else!</p>
                </div>`;
      return;
    }

    recipes.forEach((recipe, index) => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      // Stagger animation delay via inline style for dynamic lists
      card.style.animationDelay = `${index * 0.1}s`;

      card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${recipe.image || "https://via.placeholder.com/400x300?text=No+Image"}" alt="${recipe.title}" class="recipe-image" loading="lazy">
                    <span class="contributor-badge">${recipe.contributor}</span>
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                    
                    <div class="recipe-meta">
                        <span class="recipe-ingredients-count">${recipe.ingredients.length} Ingredients</span>
                        <span class="btn-view">View Recipe</span>
                    </div>
                </div>
            `;

      // Add click event to open modal
      card.addEventListener("click", () => openModal(recipe));

      recipeContainer.appendChild(card);
    });
  }

  // Modal Functions
  function openModal(recipe) {
    const ingredientsList = recipe.ingredients
      .map((ing) => `<li>${ing}</li>`)
      .join("");
    const instructionsList = recipe.instructions
      .map((inst) => `<li>${inst}</li>`)
      .join("");

    modalBody.innerHTML = `
            <img src="${recipe.image}" class="modal-header-image" alt="${recipe.title}">
            <div class="modal-body-content">
                <h2 class="modal-title">${recipe.title}</h2>
                <span class="modal-contributor">Contributed by ${recipe.contributor}</span>
                
                <div class="modal-grid">
                    <div class="modal-section">
                        <h4>Ingredients</h4>
                        <ul class="modal-ingredients">
                            ${ingredientsList}
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h4>Instructions</h4>
                        <ol class="modal-instructions">
                            ${instructionsList}
                        </ol>
                    </div>
                </div>
            </div>
        `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function closeModalFunc() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  }

  // Event Listeners for Modal
  closeModal.addEventListener("click", closeModalFunc);
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModalFunc();
    }
  });

  // Search Functionality
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = allRecipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchTerm) ||
          recipe.description.toLowerCase().includes(searchTerm) ||
          recipe.ingredients.some((ing) =>
            ing.toLowerCase().includes(searchTerm),
          ),
      );
      displayRecipes(filtered);
    });
  }

  // Filter Chips (Visual logic for now, or basic filtering)
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // Remove active class from all
      filterChips.forEach((c) => c.classList.remove("active"));
      // Add to clicked
      chip.classList.add("active");

      const category = chip.innerText;
      if (category === "All") {
        displayRecipes(allRecipes);
      } else {
        // Mock filtering logic - since we don't have categories in JSON yet,
        // we'll just filter if the text appears anywhere really, for demo
        const filtered = allRecipes.filter(
          (r) =>
            r.title.includes(category) ||
            r.description.includes(category) ||
            // Just for demo purposes, if 'Healthy' -> 'Avocado'
            (category === "Healthy" && r.title.includes("Avocado")) ||
            (category === "Italian" && r.title.includes("Carbonara")) ||
            (category === "Chinese" &&
              (r.title.includes("Kung Pao") || r.title.includes("Bao"))) ||
            (category === "Arabian" &&
              (r.title.includes("Kabsa") ||
                r.title.includes("Falafel") ||
                r.title.includes("Baklava"))) ||
            (category === "Indian" &&
              (r.title.includes("Butter Chicken") ||
                r.title.includes("Biryani") ||
                r.title.includes("Paneer"))),
        );
        displayRecipes(filtered);
      }
    });
  });

  // Add Recipe Placeholder
  if (addRecipeBtn) {
    addRecipeBtn.addEventListener("click", () => {
      alert("This feature would open a form to contribute to recipes.json!");
    });
  }

  // Initial load
  loadRecipes();
});
