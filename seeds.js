var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    { 
        name: "Clouds Rest", 
        image:"http://www.makeyourdayhere.com/ImageRepository/Document?documentID=51",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in "
    }, { 
        name: "Desert place", 
        image:"http://kon-tour.ru/upload/iblock/8fb/8fb81770a1a0db980121d13019f5580b.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in "
    }, { 
        name: "RV park", 
        image:"https://media-cdn.tripadvisor.com/media/photo-s/00/18/7c/e0/a-campsite.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in "
    }
]

function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        // } else{
        //     console.log("removed campgrounds!" );
        //     //adding campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //           if(err){
        //               console.log(err);
        //           } else {
        //               console.log("added campround");
        //               //adding comments
        //               Comment.create(
        //                   {
        //                       text:"This place is great, but I wish there was internet",
        //                       author: "Homer"
        //                   }, function(err, comment){
        //                       if(err){
        //                           console.log(err, comment)
        //                       } else{
        //                           campground.comments.push(comment);
        //                           campground.save();
        //                           console.log("Created a new comment");
        //                       }
        //                   });
        //           }
        //         });
        //     });
        }
    });    
}

module.exports = seedDB;