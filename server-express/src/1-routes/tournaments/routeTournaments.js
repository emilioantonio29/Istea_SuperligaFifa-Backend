const express = require('express');
const { TournamentController } = require('../../2-controllers/tournaments/controllerTournaments');

// LAYER 1: ROUTES - PAYMENTS
const routerTournaments = () =>{

  const routerApi = express.Router();
  
  routerApi.post('/new', TournamentController.createTournament) // PASO 2
  routerApi.post('/createtournament', TournamentController.createTournamentStep1) // PASO 1
  routerApi.get('/getadmintournaments', TournamentController.getTournamentsByAdmin)
  routerApi.get('/getplayertournaments', TournamentController.getTournamentsByPlayer)
  routerApi.get('/getopentournaments/:name', TournamentController.getTournamentsOpen)
  routerApi.post('/updateplayeropentournaments', TournamentController.updateTournamentPlayer)
  routerApi.post('/testleagues', TournamentController.testLeagues)
  routerApi.post('/gettournamentdetail', TournamentController.tournamentDetail)
  routerApi.get('/getfixture/:id', TournamentController.getFixture)
  routerApi.post('/updatefixture', TournamentController.test)
  routerApi.post('/table', TournamentController.getTable)


  return routerApi;

}

module.exports ={
    routerTournaments
}