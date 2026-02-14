# Contributing to Community Cookbook

First off, thank you for considering contributing to the Community Cookbook! It's people like you that make this community great.

We welcome all types of contributions:
-   **Recipes**: Add your favorite dishes!
-   **Code**: Improve the website's design or functionality.
-   **Documentation**: Fix typos or improve guides.

## workflow: The Fork, Branch, Commit, and Pull Request Cycle

If you are new to open source, here is the standard workflow we use:

### 1. Fork the Repository
Click the **Fork** button at the top right of the repository page. This creates a copy of the project in your own GitHub account.

### 2. Clone Your Fork
Clone your forked repository to your local machine:
```bash
git clone https://github.com/YOUR-USERNAME/The-community-kitchen.git
cd The-community-kitchen
```

### 3. Create a Branch
Always work on a new branch for each contribution. Name it descriptively (e.g., `add-lasagna-recipe` or `fix-header-style`):
```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes
Edit the files in your favorite text editor.

### 5. Commit Your Changes
Stage and commit your changes with a clear message:
```bash
git add .
git commit -m "Add new recipe for Vegetable Lasagna"
```

### 6. Push to GitHub
Push your changes to your forked repository:
```bash
git push origin feature/your-feature-name
```

### 7. Submit a Pull Request (PR)
Go to the original `The-community-kitchen` repository on GitHub. You should see a prompt to create a Pull Request from your new branch. Click it, describe your changes, and submit!

---

## 📝 For Documenters: How to Add a Recipe

If you are adding a recipe, you don't need to touch the HTML or JS files! All you need to do is edit the `data/recipes.json` file.

### JSON Format Requirements

1.  Open `data/recipes.json`.
2.  Add a new project object to the array.
3.  Look for the **latest ID** in the file and increment yours by 1.
4.  Follow this strict format:

```json
{
  "id": 3,
  "title": "Recipe Name",
  "contributor": "Your Name",
  "image": "URL to an image (Unsplash or local asset)",
  "description": "A short, mouth-watering description of the dish.",
  "ingredients": [
    "Quantity + Ingredient 1",
    "Quantity + Ingredient 2"
  ],
  "instructions": [
    "Step 1: Do this first.",
    "Step 2: Then do this."
  ]
}
```

### Guidelines
-   **Images**: Please use high-quality images. If you don't have one, you can use a placeholder or find a free one on Unsplash.
-   **Clarity**: Keep instructions clear and concise.
-   **Formatting**: ensure your JSON is valid (no trailing commas, all strings in quotes).

## 🐛 Reporting Bugs

If you find a bug, please create a new **Issue** in the repository describing the problem and how to reproduce it.

Happy Cooking and Coding! 🥘👨‍💻
