const express = require('express')
const { Router } = require("express");
const User = require('../models/User');
const books = require('../models/books');
const user = require('../models/User');


const router = Router();

router.post('/user', (req, res) => {
    const user = new User(req.body);
    user.save();
    res.send(user)

});

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.find({ username: username, password: password }).then((result) => {
        res.send(result)
    })
})

router.post('/create', (req, res) => {
    const book = new books(req.body);
    book.save();
    res.send(book)
});

router.get('/books', (req, res) => {

    books.find().then((result) => {
        res.send(result)
    })

});

router.param("book", (req, res, next, title) => {
    books.find({ title: title }).exec((err, book) => {
        req.book = book;
        next();
    });
});

router.delete('/:title/delete', (req, res) => {
    res.json(req.book)
})



module.exports = router