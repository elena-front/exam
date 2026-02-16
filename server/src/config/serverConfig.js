const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const path = require('path')
const removeXPoweredByHeader = require('../middleware/removeHeader');

const corsOptions = { origin: ['http://localhost:5173'], credentials: true };

const serverConfig = (app) => {
    app.use(morgan('dev'));
    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(removeXPoweredByHeader);
    app.use(express.static(path.join(__dirname, '../public')))
}

module.exports = serverConfig;