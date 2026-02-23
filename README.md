# 🍳 Community Cookbook

Welcome to the **Community Cookbook**! This is an open-source initiative to collect, preserve, and share delicious recipes from our community. Whether you're a master chef or a home cook, your contributions are welcome here.

## 🎯 Project Goal

The goal of this project is to create a simple, accessible, and beautiful web interface where people can browse recipes contributed by others. We believe that food brings people together, and sharing recipes is one of the best ways to build community.

## 👥 Team Roles & Members

### Leadership & Management

| Role | Member | Registration Number | GitHub Username | Responsibilities |
|------|--------|-------------------|-----------------|------------------|
| **Project Lead** | Umar Yusuf Rimingado | CST/20/SWE/00506 | [@RBED001](https://github.com/RBED001) | Overall project coordination & technical leadership |
| **Repository Manager** | Yahaya Ibrahim Adinoyi | CST/21/SWE/00656 | [@wnnrfvr](https://github.com/wnnrfvr) | Repository setup and permissions management |

### Quality Assurance

| Role | Member | Registration Number | GitHub Username | Responsibilities |
|------|--------|-------------------|-----------------|------------------|
| **Code Reviewer** | Alfred Jacob Miracle | CST/20/SWE/00486 | [@ReignsFred](https://github.com/ReignsFred) | Pull request reviews and code quality |
| **Code Reviewer** | Abdussamad Sani Abdussamad | CST/20/SWE/00507 | [@ASAMASANAWA](https://github.com/ASAMASANAWA) | Pull request reviews and testing |

### Contributors

| Name | Registration Number | GitHub Username | Contributions |
|------|-------------------|-----------------|---------------|
| Fahad Saminu-Sanusi | CST/21/SWE/00687 | [@fahadsaminusanusi007](https://github.com/fahadsaminusanusi007) | Code and documentation |
| Umar Khalil Ibrahim | CST/20/SWE/00516 | [@kubbest](https://github.com/kubbest) | Code and documentation |
| Abubakar Mansir | CST/22/SWE/00926 | [@Abubakarmansir](https://github.com/Abubakarmansir) | Code and documentation |
| Yakubu Abdulhameed Ugbede | CST/21/SWE/00657 | [@Graveetee](https://github.com/Graveetee) | Code and documentation |
| IDRIS ILIYASU | CST/20/SWE/00496 | - | Code and documentation |
| Salma Iliyas | CST/21/SWE/00686 | [@salmailyas18](https://github.com/salmailyas18) | Code and documentation |
| Salim Abdulmumin Sadiq | CST/21/SWE/00676 | - | Code and documentation |
| Usman Abdullahi Ibrahim | CST/21/SWE/00667 | [@uaithegreat001](https://github.com/uaithegreat001) | Code and documentation |
| Muhammad Iliyasu Sarki | CST/20/SWE/00497 | [@Msarkii](https://github.com/Msarkii) | Code and documentation |

### Role Selection Process

**As per Assignment Section 3.3:**

- **Project Lead:** Selected via **Meritocratic Governance Model** based on technical contributions and leadership demonstrated through:
  - Most pull requests created (5+ PRs)
  - CI/CD pipeline implementation
  - Issue creation and management (7+ issues)
  - Technical problem-solving and team coordination
  - Code review leadership

- **Repository Manager:** Selected based on **Consensus** as the original repository creator with administrative access and setup responsibilities

- **Code Reviewers:** Assigned based on technical expertise and commitment to quality assurance tasks

- **Contributors:** All team members participate actively in code and documentation development

### Team Statistics

- **Total Members:** 13
- **Registration Years:** 2020-2022 cohorts  
- **Program:** Software Engineering (SWE)
- **Department:** Computer Science and Technology (CST)
- **Collaboration Platform:** GitHub with proper open-source workflow
- **Project Governance:** Combination of meritocratic and consensus-based decision making

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