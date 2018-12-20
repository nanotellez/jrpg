const Player = require("../models/models");
const Monster = require("../models/models");

module.exports = {
    cbCreatePlayer: function(req,res){
        console.log('Inside cbCreatePlayer()');
        console.log(req.body);
        Player.create(req.body)
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbGetPlayers: function(req,res){
        Player.find().sort({PlayerType: 1})
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbGetPlayer: function(req,res){
        Player.findById({_id: req.params.id})
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbUpdatePlayer: function(req,res){
        console.log('Inside cbUpdatePlayer()');
        console.log(req.body);
        Player.findOneAndUpdate({ _id: req.params.id }, req.body, {runValidators: true, context: 'query' })
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbRemovePlayer: function(req,res){
        console.log('Inside cbRemovePlayer()');
        console.log(req.params.id);
        Player.findByIdAndRemove(req.params.id)
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },

    cbCreateMonster: function(req,res){
        console.log('Inside cbCreateMonster()');
        console.log(req.body);
        Monster.create(req.body)
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbGetMonsters: function(req,res){
        Monster.find()
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbGetMonster: function(req,res){
        Monster.findById({_id: req.params.id})
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbUpdateMonster: function(req,res){
        console.log('Inside cbUpdateMonster()');
        console.log(req.body);
        Monster.findOneAndUpdate({ _id: req.params.id }, req.body, {runValidators: true, context: 'query' })
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbRemoveMonster: function(req,res){
        console.log('Inside cbRemoveMonster()');
        console.log(req.params.id);
        Monster.findByIdAndRemove(req.params.id)
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },

    world: (req,res) => {
        context = {
            gridSize: 50,
        }
        res.render('worldMap', context);
    }


}