
# The Know - News Website

"The Know" is a dynamic News Website developed as a group project for the course Server-Side-Web Development (CPSC4125). It is designed to provide users with the latest news by fetching real-time data from the [GNews API](https://gnews.io/).
The site features many functionalities such as search capability, category filtering, and an interactive user interface with news cards and a carousel display on the homepage.


## 🎯Features

- __Real-Time News Updates__: Fetches the latest news articles from the GNews API.
- __Search Functionality__: Allows users to search for news articles based on keywords.
- __Category Filtering__: Users can filter news articles by different categories for more focused browsing.
- __Responsive Design__: News Cards and Carousel on the homepage to display news articles in an interactive and user-friendly manner.
- __External Article Redirection__: Clicking on a News Card redirects users to the original source of the article.


## 🖥️Tech Stack

- __React__: Utilizes React for its frontend development to create a responsive and interactive user interface.
- __Bootstrap__: Uses Bootstrap for its frontend development to create a responsive and interactive user interface.
- __Data Fetching__: Employs various methods like `fetch` and `axios` for API calls to GNews.
- __Testing__: Incorporates Cypress and Jest for comprehensive testing of the application's functionality and performance.


## ✅Getting Started

1. __Clone the Repository__:

```bash
git clone https://github.com/CSU-ServerSide-Fall-23/Group_2.git
cd news-website
```

2. __Install Dependencies__:
```bash
npm install
```

3. __Environment Variables__:
   Set up a .env file with your GNews API key:
```
REACT_APP_NEWS_API_KEY=<YOUR KEY HERE>
REACT_APP_NEWS_API_BASE_URL=<YOUR BASE URL> ex: https://gnews.io/api/v4 (if you use GNEWS)
```

4. __Run the Application__:
```bash
npm run start
```

## 🧪Testing

To run tests, execute the following command:

- For Jest tests:

```bash
npm run test
```

- For Cypress tests:
```bash
npm run cypress:open
```
## 🌐Live Demo

See the [Live Demo](https://group-2-news-website.onrender.com) - Deployed with [Render](https://render.com/).

## 📹Video Demos

[Demo 1](https://www.youtube.com/watch?v=5B3Ia7ED-V8)

[Demo 2](https://www.youtube.com/watch?v=5z1dbcHZP_w)

[Demo 3 (Final)](https://www.youtube.com/watch?v=Zn5PLwSY-Dw)


## Team Members

Group 2 - Furlong Logan, Shreya Kola, Mills Maria
