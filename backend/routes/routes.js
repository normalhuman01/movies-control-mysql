module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bienvenido al catálogo de series y películas.'})
    })

    server.get('/movies', (require, response) => {
        const sql = 'SELECT * FROM `movies`';
        connection.query(sql, (error, res) => {
            if (error){
                return error;
            } console.log("movies: ", res);
            response.json(res)
        })
    })
};
