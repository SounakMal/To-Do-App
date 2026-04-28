# Talika - Modern Task Management Application

Talika is an elegant and responsive task management app built with React, Vite, and Tailwind CSS. It offers an intuitive interface for organizing your daily tasks with capabilities like creating, completing, removing, and searching tasks. All data persists across browser sessions using local storage.

## 🚀 Features

-   **Task Creation**: Add new tasks with titles and detailed descriptions
-   **Task Overview**: View all tasks in an expandable accordion layout
-   **Mark Complete**: Toggle tasks as finished with a single click
-   **Remove Tasks**: Delete unwanted tasks from your list
-   **Search Functionality**: Quickly find tasks by searching titles
-   **Data Persistence**: Tasks automatically save to browser's local storage
-   **Adaptive Design**: Fully responsive layout for all screen sizes

## 🛠️ Tech Stack

-   **Frontend**: React
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **UI Components**: Material-UI (Accordion)
-   **Icons**: Font Awesome

## 📂 Project Structure

```
/
├── public/
│   ├── logo.jpg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   └── todolist.svg
│   ├── components/
│   │   ├── CreateTask.jsx
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── SCpanel.jsx
│   │   │   └── TaskPanel.jsx
│   │   └── other/
│   │       ├── Navbar.jsx
│   │       └── Task.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🔧 Installation & Setup

1.  **Get the code**
    ```bash
    git clone https://github.com/SounakMal/Talika.git
    cd Talika
    ```

2.  **Install packages**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```

## 📖 How to Use

1.  **Add a Task**: Click "Create Task" to open the form. Fill in title and description, then submit.
2.  **View Details**: Expand any task to see its full description.
3.  **Complete a Task**: Click "Done" within the task to mark it complete.
4.  **Remove a Task**: Click "Delete" to remove a task permanently.
5.  **Search Tasks**: Type in the search bar to filter tasks by title.

## 📜 Available Scripts

-   `npm run dev`: Launch development server
-   `npm run build`: Generate production build
-   `npm run lint`: Run ESLint for code quality
-   `npm run preview`: Preview production build locally

## 🤝 Contributing

Contributions are welcome! Here's how:

1.  Fork the repository
2.  Create a feature branch
3.  Make your improvements
4.  Submit a pull request

## 📝 License

This project is open source under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sounak Mal**

-   GitHub: [SounakMal](https://github.com/SounakMal)
"# To-Do-App" 
