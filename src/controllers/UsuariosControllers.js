const UserService = require('../../conexiones'); // Replace with the actual path to your UserService module

const UsuarioController = async (req, res) => {
    try {
        const userService = new UserService('base1'); // Pass 'base1' as a parameter
        const result = await userService.pool.query('SELECT * FROM usuariosbase1');
        // Do something with the query result if needed
        console.log(result);
        // Send the results as a response
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error executing the query:', error);
        res.status(500).send('Internal Server Error');
    }
};

const UsuarioController2 = async (req, res) => {
    try {
        const userService = new UserService('base2'); // Pass 'base1' as a parameter
        const result = await userService.pool.query('SELECT * FROM usuariosbase2');
        // Do something with the query result if needed
        console.log(result);
        // Send the results as a response
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error executing the query:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {UsuarioController, UsuarioController2};
