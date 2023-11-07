const express = require("express");
const router = express.Router();
const booksController = require("../Controllers/booksController")
router.get("/test-me", function(req,res){
    res.send({status: false, message:"just testing"})
})

router.post("/createNewBook", booksController.createNewBook);
router.get("/getData", booksController.getData);
router.get("/getParticularBook/:id",booksController.getParticularBook);
router.put("/updateBook/:id",booksController.updatedBook);
 router.delete("/deleteBook/:id", booksController.deleteBook);

module.exports = router;




