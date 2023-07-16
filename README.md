# Disney+ UI build with ReactJS, Firebase

![Home page](https://res.cloudinary.com/dbiliw2ja/image/upload/v1689479598/homePage_tsxid1.png)
![Detail page](https://res.cloudinary.com/dbiliw2ja/image/upload/v1689479597/detailPage_teu90j.png)

This simple UI project is just a way for me to learn more about ReactJS, Firebase and styled-component.

As written above, don't expect any fancy features.

Using libraries such as the following: 

- Redux, redux toolkit.
- React-router-dom, react-slick and react-carousel for slider image .
- Firebase.

### Cloning the repository

```shell
git clone https://github.com/tuanloc288/disney-plus-ui.git
```

### Install packages

```shell
npm install 
```

### Setup firebase config

```js
apiKey: "",
authDomain: "",
projectId: "",
storageBucket: "",
messagingSenderId: "",
appId: "",
```

### Set up firebase db

Contain properties:

```js
backgroundImg: "Image URL for background on movie's detail page"
cardImg: "Image URL for listing card on home page"
description: "Description about the movie"
subTitle: "Information about the movie, such as year, genre,..."
title: "Movie title",
titleImg: "An image version of movie title"
type:"Movie type (for sorting on home page)"
```

### Start the app

```shell
npm start
```
