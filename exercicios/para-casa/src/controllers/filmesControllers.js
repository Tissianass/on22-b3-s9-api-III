const filmesGhibliJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (req, res) => {
    res.status(200).json([{
        "filmes": filmesGhibliJson
    }])
}

//declaro minha constante de atualizar o DIRETOR do filme

const updateDirectorById = (req,res) => {
    const idRequest = req.params.id //defino que vou buscar pelo Id, pq Id é único
    let newRunning_time = req.body.director // altero o DIRETOR pelo body através do Id
    let findMovie = filmesGhibliJson.find(movie => movie.id == idRequest) //filtrei o banco de dados para encontrar o id
    //depois disso, no meu filme a parte específica do DIRETOR será alterada pelo novo DIRETOR
    findMovie.director = newRunning_time

    res.status(200).json([{
        "message": "o diretor do seu filme foi atualizado / updated director",
        findMovie
    }])
}

//declaro minha constante de atualizar o RUNNING_TIME do filme

const updateRunningTimeById = (req,res) => {
    const idRequest = req.params.id //defino que vou buscar pelo Id, pq Id é único
    let newRunning_time = req.body.running_time // altero o RUNNING_TIME pelo body através do Id
    let findMovie = filmesGhibliJson.find(movie => movie.id == idRequest) //filtrei o banco de dados para encontrar o id
    //depois disso, no meu filme a parte específica do RUNNING_TIME será alterada pelo novo RUNNING_TIME
    findMovie.running_time = newRunning_time

    res.status(200).json([{
        "message": "o running_time do seu filme foi atualizado / updated running_time",
        findMovie
    }])
}

//declaro minha constante de atualizar o FILME colocando (PUT) a DESCRIÇÃO:

const updateMovieById = (req, res) => {
    const idRequest = req.params.id
    let movieRequest = req.body
    let findMovie = filmesGhibliJson.findIndex(movie => movie.id == idRequest)

    filmesGhibliJson.splice(findMovie, 1, movieRequest) //está removendo um elemento a partir do INDEX encontrado e adicionando o movieRequest no lugar

    res.status(200).json([{
        "message": "updated movie/filme atualizado",
        filmesGhibliJson
    }])


}

// declaro minha constante de deletar o FILME a partir do PRODUTOR:

const deleteMovieByProducer = (req,res) => {
    const idRequest = req.params.producer.toLocaleLowerCase()
    const deleteMovie = filmesGhibliJson.findIndex(movie => movie.producer.toLocaleLowerCase() == idRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json ([{
        "message": "delete movie by producer",
        "Delete": idRequest,
        filmesGhibliJson


    }])
}

// declaro minha constante de obter (GET) o FILME a partir (BY) do ID:


module.exports = {
   
    getAll,
   updateDirectorById,
   updateRunningTimeById,
   updateMovieById,
   deleteMovieByProducer,
   }
