const express = require('express');


var articles = [
    {
        title: 'Chaleya ',
        img: 'chal.jpg',
        info:`Anirudh Ravichander`
    },
    {
        title: 'Heeriye',
        img: 'heer.jpg',
        info:`Arijit Sing`
    },
    {
        title:'Kesariya',
        img:'kes.jpg',
        info:`Pritam, Arijit Singh, Amitabh Bhattacharya`
        
    }
]
var blogs = [
    {
        atitle: 'Chaleya ',
        img: 'chal.jpg',
        desc: 'Take a deep dive into the rocky planets that make up our local neighborhood.',
    },
    {
        atitle: 'Heeriye',
        img: 'heer.jpg',
        desc: 'Arijit Sing',
    },
    {
        atitle:'Kesariya',
        img:'kes.jpg',
        desc:'Pritam, Arijit Singh, Amitabh Bhattacharya'
    }
];

const home = (req, res) => {
    res.render('index', {
        title: 'Home',
        blog: blogs
    });
};

const articleinfo = (req, res) => {
    const articleIndex = parseInt(req.query.article); 
    if (articleIndex >= 0 && articleIndex < articles.length) {
      const article = articles[articleIndex];
      res.render('article-info', { article });
    } else {
      // Handle invalid article index or show an error page
      res.status(404).send('Article not found');
    }
  };


module.exports = { home ,articleinfo};
