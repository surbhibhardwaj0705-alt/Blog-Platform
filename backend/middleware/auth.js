import middleware from 'express';
import jwt from 'jsonwebtoken';

module.exports = function(req, res, next){
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json (
            {message: "NO TOKEN PROVIDED"}
        );
    }
    next();
};