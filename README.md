# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> AJAX CRUD Book App Lab

In this lab you will CRUD resources using AJAX and a RESTful JSON API. Your goal is to `create`, `read`, `update`, and `delete` books, and to render those books to the page using jQuery and AJAX.

## Getting Started

1. Fork this repo, and clone it into your `dev` folder on your local machine.
2. Familiarize yourself with the Super CRUD API (below). We will be using the `/books` endpoint.
3. As you tackle the user stories below, make sure to commit frequently and push your changes to github.
4. Finally, make sure your app is nice to use! Make sure to style your page using css & bootstrap (feel free to come up with your own design, or go off the screenshot below).

## User Stories

**A user should be able to...**

1. See (`read`) a list of all books (this is often called the "index")
2. Fill out a form to `create` a new book
3. Click a button to `delete` an existing book
4. Edit or `update` an existing book

**Additonally...**

* Your changes should be reflected both on the server and the page (how can you be sure they're in sync?)!
* And, importantly, submitting a form should never cause the page to refresh!

## API Documentation

**Base URL**: https://super-crud.herokuapp.com

####Books Endpoint

| Request | URL | Action |
| :--- | :--- | :--- |
| GET | `/books` | READS all books |
| POST | `/books` | CREATES new book |
| GET | `/books/:id` | READS one book |
| PUT | `/books/:id` | UPDATES one book |
| DELETE | `/books/:id` | DELETES one book |

#### Sample Response

GET `/books`

```js
{
  books: [
    {
      _id: "563970891719c56cac83e5bb",
      title: "Around the World in 80 Days",
      author: "Jules Verne",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg",
      releaseDate: "January 30, 1873",
      __v: 0
    },
    {
      _id: "563970891719c56cac83e5bc",
      title: "The Four Hour Workweek",
      author: "Tim Ferriss",
      image: "https://cloud.githubusercontent.com/assets/7833470/10892117/865b465a-8156-11e5-834b-9c4172d4b0fe.jpg",
      releaseDate: "April 1, 2007",
      __v: 0
    }
  ]
}
```

## Recommended

There are a lot of gotchas you'll encounter as you CRUD your books! As you run into issues with our API add them to a list of problems you can research later (e.g. "I found it difficult to find documentation on what was returned from the API").

Prove to us you've read the document by including your list of 5 issues and any supporting references from the document in your submission pull request.

And don't forget to take a look at the [solution branches](/branches)! There is a solution branch for each user story, as well as an advance solution branch that uses handlebars templating.

## Lab Submission

* As you make code changes, frequently commit and push to GitHub.
* Please submit this lab as a pull request.

## Example Book App Screenshot

![screenshot-of-book-app](https://cloud.githubusercontent.com/assets/7833470/10989235/997e6de8-83f9-11e5-9267-5e65839a01ab.png)
