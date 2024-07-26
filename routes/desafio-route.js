const express = require('express');
const { 
    getUser, 
    getAllUser,
    signup,
    login,
} = require('../controllers/user-controller'); 

const router = express.Router();

router.use(express.json());

router.get("/", getAllUser);

router.get("/:id", getUser);

router.post("/signup", signup); 

router.post("/login", login); 

module.exports = router;
