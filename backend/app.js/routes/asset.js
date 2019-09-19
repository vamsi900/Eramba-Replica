var express = require('express');
var router = express.Router();
var Asset = require('../DB/schemas/asset');

/* GET home page. */
// router.get('/', function(req, res, next) {
  
// });

router.post('/postAsset', function(req, res, next) {

    var asset = new Asset(req.body)
    
    console.log('hi');
    asset.save((err,data) => {
        if(err){
            res.send(err);
        } else {
            res.send({'asset' : data});
        }
    })
    });


router.get('/getAsset', function(req, res,){ 

    Asset.find({},function (err,data){    
        if (err) {
            res.json({err});
            }
            else{
            res.json(data);   
            }
        });
    });

router.put('/editAsset', function(req ,res ,next){
    console.log('request',req.body);
    Asset.update({_id:req.body._id}, req.body ,{new:true},function (err,data){
        if(err){
            res.json(err);
        }
        else{
            console.log(data)
            res.json(data);
            }
        });
    });
    
    
    
router.delete('/deleteAsset/:id',function(req,res ,next){
Asset.deleteOne({_id:req.params.id},function(err,data){
    if(err){
        res.json(err);
    }
    else
    res.json(data);
        })
    });

module.exports = router;