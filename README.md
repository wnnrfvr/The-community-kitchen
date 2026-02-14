# 🍳 Community Cookbook

Welcome to the **Community Cookbook**! This is an open-source initiative to collect, preserve, and share delicious recipes from our community. Whether you're a master chef or a home cook, your contributions are welcome here.

## 🎯 Project Goal

The goal of this project is to create a simple, accessible, and beautiful web interface where people can browse recipes contributed by others. We believe that food brings people together, and sharing recipes is one of the best ways to build community.

## 🚀 How to Run Locally

Since this is a static web application, running it locally is very simple. You don't need to install any heavy dependencies or databases.

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari).
- A text editor (VS Code, Sublime Text) if you plan to contribute.

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/wnnrfvr/The-community-kitchen.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd The-community-kitchen
    ```
3.  **Open the application:**
    -   Simply locate the `index.html` file in your file explorer and double-click it to open it in your browser.
    -   *Optional:* For a better development experience (to avoid CORS issues with fetching JSON locally in some browsers), you can use a simple local server like `Live Server` in VS Code or Python's http.server:
        ```bash
        # If you have Python installed:
        python -m http.server
        # Then visit http://localhost:8000
        ```

## 📂 Project Structure

-   `index.html`: The main entry point of the website.
-   `src/`: Contains the styling (`style.css`) and logic (`script.js`).
-   `data/`: Contains the `recipes.json` file where all recipe data is stored.
-   `assets/`: Images and other static assets.
-   `docs/`: Project documentation.

## 🤝 Contributing

We love contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file to learn how you can add your own recipes or improve the code.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
