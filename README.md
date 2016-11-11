# Don't Forget The Milk

[Live Site](http://dontforgetmilk.herokuapp.com)

Don't Forget The Milk is a single page web application allowing users to make and organize to-do lists. It is inspired by Remember The Milk. It is built on a React/Redux frontend with a Ruby on Rails and Postgres backend.

## Features

 Don't Forget The Milk allows users to:

* Create, edit and delete to-do lists
* Create, edit and delete tasks in to-do lists
* Edit the name, priority, start date, due date, time estimate and completion of a task.
* Move tasks between lists.
* View a summary of a list which includes: number of completed and incomplete tasks, total time of tasks and number of overdue tasks
* Sort tasks by priority, due date, start date, date created, or time estimate
* Search for tasks
* View all tasks or tasks sorted by due date of today or in the next week

## Intuitive URLs

Because Don't Forget The Milk is a single page web app, the user is never redirected from the root URL. By using the React Router package Don't Forget The Milk is able to give every location in the app a descriptive URL without reloading the page. This allows a user to navigate smoothly using the back and forward buttons and even to navigate to a specific list or task with a bookmarked URL.

![alt-tag](docs/screenshots/url-navigation.gif)

## Task Sorting

Within any list the tasks can be sorted based on their dates, prirority or the estimated time they will take. This feature automatically updates the order of tasks when they are updated. 

![alt-tag](docs/screenshots/task-sorting.gif)

## Future Features

I plan to add the following features to Don't Forget the Milk:

* Users can add locations to tasks and view tasks by location using the Google Places API
* Users receive notification emails reminding them of tasks due or starting the current day
* Users can add tags to tasks and view tasks based on tags
* Users can create smart lists based on inclusion or exclusion of words