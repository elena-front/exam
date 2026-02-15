const morgan = require('morgan');
const express = require('express');
const path = require('path')
const removeXPoweredByHeader = require('../middleware/removeHeader');

const serverConfig = (app) => {
    app.use(morgan('dev'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(removeXPoweredByHeader);
    app.use(express.static(path.join(__dirname, '../public')))
}

module.exports = serverConfig;