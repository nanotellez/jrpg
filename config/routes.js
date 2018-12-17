const controller = require("../controllers/controller");

module.exports = function(app){
    // Players
    app.get('/api/players', controller.cbGetPlayers)
    app.get('/api/players/:id', controller.cbGetPlayer)

    app.delete('/api/players/:id', controller.cbRemovePlayer)
    
    app.post('/api/players', controller.cbCreatePlayer)
    
    app.put('/api/players/:id', controller.cbUpdatePlayer)

    // Monsters
    app.get('/api/monsters', controller.cbGetMonsters)
    app.get('/api/monsters/:id', controller.cbGetMonster)

    app.delete('/api/monsters/:id', controller.cbRemoveMonster)
    
    app.post('/api/monsters', controller.cbCreateMonster)
    
    app.put('/api/monsters/:id', controller.cbUpdateMonster)
}

