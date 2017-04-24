
var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");



router.get("/", function(req, res){
    Campground.find({},function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }
    });
        
});


router.post("/",middleware.isLoggedIn, function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var price = req.body.price;
   var desc = req.body.description;
   var author = {
       id: req.user._id,
       username: req.user.username
   }
   var newCampground = {name:name, price:price, image: image, description: desc, author:author};
   Campground.create(newCampground, function(err, newlyCreated)   {
       if(err){
           console.log(err)
       } else{
           res.redirect("/campgrounds");
       }
   });
   
});

router.get("/new",middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new.ejs");
});
//show
router.get("/:id",function(req, res){
   Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log(err);
       } else{
           console.log(foundCampground);
           res.render("campgrounds/show", {campground: foundCampground});
       }
   });
    
});
//edit
router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req, res){
        Campground.findById(req.params.id, function(err, foundCampground){
               res.render("campgrounds/edit", {campground: foundCampground});
               });
});
//update
router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground,function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/"+req.params.id);
        }
    });
});

//Destroy
router.delete("/:id",middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err, deleteCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});




module.exports = router;