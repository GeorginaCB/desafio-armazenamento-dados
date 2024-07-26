const  express = require('express')
const { 
    getUser, 
    getAllUser,
    createUser,
    updateUser,
    deleteUser
    } = require('../controllers/user-controller')
const router =  express.Router()

router.use(express.json())

router.get("/", getAllUser)

router.get("/:id", getUser);

router.post("/", createUser);
router.post("/", createUser);
module.exports = router;
