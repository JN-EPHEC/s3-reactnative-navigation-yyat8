# React Native Navigation & Routing

This repository contains a series of exercises designed to help you master navigation and routing in React Native using the `react-navigation` library.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <your-assignment-repository-url>
    cd <your-assignment-name>
    ```

2.  **Install dependencies:**
    This project uses `npm`. Run the following command in the root directory:

    ```bash
    npm install
    ```

3.  **Install React Navigation libraries:**
    You will need to install the core libraries for navigation.

    ```bash
    npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer

    npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
    ```

4.  **Run the application:**

    ```bash
    npm start
    ```

---

## The Exercises

1.  Ensure you are on the `main` branch: `git checkout main`
2.  Create and switch to the exercises branch: `git checkout -b week3-exercises`
3.  Modify the files inside your Expo project as described below.
4.  Commit your changes to the `week3-exercises` branch. **Do not merge it into `main`**.

### Exercise 1: Create a Simple Stack Navigator (The Blog)

`For this exercice, the files are given and you just have to implement some parts of the code. For the other exercises, you'll have to create new files.`

**Goal:** Understand the fundamentals of a Stack Navigator by creating a simple blog-style navigation flow.

**Requirements:**

1.  Create a **Stack Navigator** with two screens in **app/\_layout.tsx**:

    - `PostListScreen`: This screen should display a list of 3-4 fake blog post titles (e.g., "React Native is Awesome", "State Management Tips", "UI Design Principles").
    - `PostDetailScreen`: This screen will show the details of a single post.

2.  From the `PostListScreen`, make each blog post title a tappable button.

3.  When a user taps a post title, they should be navigated to the `PostDetailScreen`.

4.  **Crucially**, you must **pass the post title and some content** from the `PostListScreen` to the `PostDetailScreen` as route parameters.

5.  The `PostDetailScreen` should display the title and content it received via its route params.

6.  The `PostDetailScreen` should automatically have a "Back" button in the header to return to the `PostListScreen`.

**File Structure Suggestion:**

```
/app
  /screens
    PostListScreen.tsx
    PostDetailScreen.tsx
```

---

### Exercise 2: Implement a Tab Navigator (The Social App)

**Goal:** Learn how to use a Tab Navigator for the main sections of an application.

**Requirements:**

1.  Create a **Bottom Tab Navigator** with three tabs:

    - `HomeScreen`: A simple screen with a "Welcome to the App\!" message.
    - `ProfileScreen`: A screen displaying some static user information (e.g., Name: "John Doe", Username: "@johndoe").
    - `SettingsScreen`: A screen with a simple text message like "App Settings".

2.  Set the `HomeScreen` as the default screen that loads when the app starts.

3.  **Customize the tabs:**

    - Add appropriate icons for each tab (you can use a library like `react-native-vector-icons` or just simple text/emojis for now).
    - Give each tab a custom label (e.g., "Home", "Profile", "Settings").

**Bonus Challenge:**

- Change the active tab color to something different from the inactive tab color.

---

### Exercise 3: Combine Navigators (The E-commerce App)

**Goal:** Understand how to nest different types of navigators to build a realistic app structure. This is a very common pattern in real-world applications.

**Requirements:**

1.  Start with a **Bottom Tab Navigator** as the main navigator. It should have two tabs:

    - `Shop`: This tab will contain our product navigation.
    - `My Cart`: A simple screen that says "Your Shopping Cart is empty."

2.  Inside the `Shop` tab, you should **nest a Stack Navigator**. This stack will handle the flow from viewing a list of products to viewing a single product.

3.  The `Shop` stack navigator should have two screens:

    - `ProductListScreen`: Displays a list of 2-3 products (e.g., "Laptop", "Mouse", "Keyboard").
    - `ProductDetailScreen`: Displays the details of a selected product.

4.  When a user is on the `Shop` tab and taps a product in the `ProductListScreen`, they should navigate to the `ProductDetailScreen` **within the same tab**, and the bottom tab bar should still be visible.

**Flow Diagram:**

```
App
└── Bottom Tab Navigator (tabs)
    ├── Shop Tab
    |   └── Stack Navigator
    |       ├── ProductListScreen
    |       └── ProductDetailScreen
    └── My Cart Tab
        └── CartScreen
```

---

## ASSIGNMENT: Build a Complete Mini-App

`` For this assignment, commit your final code to the `main` branch. !! Also, add a screenshot of each page of your assignment in the root of the repository. !! ``

**Goal:** Synthesize everything you've learned about Stack, Tab, and Drawer navigators, including passing parameters and nesting, to build a small but complete application.

### App Concept: "Course Finder"

Imagine an app where users can browse courses, view their details, and manage their profile.

### Core Features to Implement:

1.  **Main Navigation (Drawer Navigator):**
    The root of your application should be a **Drawer Navigator**. The drawer should contain links to two main sections:

    - `Courses`: This will be the main course browsing area.
    - `My Profile`: The user's profile screen.

2.  **Course Browsing Section (Nested Tab & Stack):**

    - When a user selects `Courses` from the drawer, they should be taken to a **Bottom Tab Navigator**.
    - This Tab Navigator should have two tabs:
      - `All Courses`: This tab should display a **Stack Navigator**.
        - The initial screen of the stack (`CourseListScreen`) shows a list of courses (e.g., "Intro to React Native", "Advanced JavaScript", "UI/UX for Developers").
        - Tapping a course should navigate to a `CourseDetailScreen` within the same stack, passing the `courseId`, `title`, and a short `description` as parameters.
      - `My Wishlist`: A simple screen that says "Your wishlist is empty."

3.  **Profile Section (Simple Screen):**

    - When a user selects `My Profile` from the drawer, they should see a simple screen (`ProfileScreen`) with some static user data.

4.  **Header and Drawer Control:**

    - Every screen should have a header.
    - The screens inside the "Courses" section should have a "hamburger" icon in the header that opens the main drawer navigator.

### Summary of the Navigation Structure:

```
App
└── Drawer Navigator
    ├── Courses (Leads to a Tab Navigator)
    |   └── Bottom Tab Navigator
    |       ├── All Courses Tab
    |       |   └── Stack Navigator
    |       |       ├── CourseListScreen
    |       |       └── CourseDetailScreen
    |       └── My Wishlist Tab
    |           └── WishlistScreen
    └── My Profile (Leads to a Screen)
        └── ProfileScreen
```

# Bibliography & Useful Resources

## Primary Documentation (Essential Reading)

These are the most important resources. The official React Navigation documentation is comprehensive and should be your first stop for any questions.

- **[React Navigation - Main Documentation](https://reactnavigation.org/)**

  - This is the homepage for the library. It contains everything you need, from basic installation to advanced concepts. Start here.

- **[React Navigation - Getting Started](https://reactnavigation.org/docs/getting-started)**

  - The official installation and setup guide. Follow this carefully to ensure all dependencies like `react-native-screens` and `react-native-gesture-handler` are correctly configured.

- **[Hello React Navigation](https://reactnavigation.org/docs/hello-react-navigation)**

  - A quick "Hello World" style tutorial that walks you through creating your very first stack navigator. Perfect for Exercise 1.

## Navigator-Specific Documentation

For each exercise, you will need to consult the documentation for the specific navigator you are implementing.

- **[Stack Navigator](https://reactnavigation.org/docs/stack-navigator)**

  - **Essential for Exercise 1 & 3.** This page explains how to create a stack, add screens, and configure options like the header title.

- **[Tab Navigator](https://reactnavigation.org/docs/5.x/tab-based-navigation/)**

  - **Essential for Exercise 2 & 3.** This documentation shows how to create a bottom tab navigator and customize its appearance, including labels and icons.

- **[Drawer Navigator](https://reactnavigation.org/docs/drawer-navigator)**

  - **Essential for the Final Assignment.** Learn how to set up a drawer, add items to it, and open/close it from your screen headers.

## Key Concepts Documentation

These pages cover fundamental concepts required to build dynamic and interactive navigation.

- **[Passing Parameters to Routes](https://reactnavigation.org/docs/params)**

  - **Crucial for Exercise 1 and the Assignment.** This is a must-read guide on how to send data from one screen to another (e.g., sending a product ID to a detail screen).

- **[Nesting Navigators](https://reactnavigation.org/docs/nesting-navigators)**

  - **Crucial for Exercise 3 and the Assignment.** This page explains the powerful pattern of placing one navigator inside another (e.g., a Stack Navigator inside a Tab Navigator). It also covers how navigation actions behave in a nested structure.

- **[Configuring the Header Bar](https://reactnavigation.org/docs/headers)**

  - Useful for customizing the look and feel of your stack navigator's header, including adding buttons (like a drawer-opening "hamburger" icon).

## Additional Resources (Icons & General Help)

- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)**

  - A highly recommended library for adding icons to your application, especially for tab bars and headers. The repository includes installation instructions and a list of all available icons.

- **[Official React Native Documentation](https://reactnative.dev/docs/getting-started)**

  - While not specific to navigation, the official React Native docs are an essential resource for understanding core components (`View`, `Text`, `Button`, `StyleSheet`, etc.) that you will use to build your screens.
