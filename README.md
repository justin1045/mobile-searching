This project is a phone search application that fetches data from an API and displays phone details dynamically. The key steps involved:

Fetching Data from API:

Used the fetch() method inside an async function (getData) to retrieve phone data from the API.
Loaded default phone data on page load (getDefaultPhones).
Displaying Phone Data:

Created a displayData function that dynamically generates phone cards using document.createElement().
Added an event listener to fetch and display detailed information when the "SHOW DETAILS" button is clicked.
Handling User Search:

Used an event listener on the search form (form.addEventListener("submit")) to fetch and display phones based on user input.
Displayed a limited number of results at first, with a "SHOW ALL" button to reveal more.
Showing and Hiding Phone Details:

Clicking the "SHOW DETAILS" button fetches more information and displays it in a detail-div.
The "CLOSE" button hides the details again.
JavaScript Functionality Used
Fetch API (fetch) to retrieve data asynchronously.
Async/Await for handling API requests.
Event Listeners (addEventListener) for user interactions.
DOM Manipulation (document.createElement, .append) to dynamically create and update elements.
CSS Class Toggles (classList.add/remove) to show/hide details.
This approach ensures a responsive and interactive search experience for users. 🚀
