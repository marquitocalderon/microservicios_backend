const { Pool } = require('pg');

class UserService {
  constructor(databaseName) {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: databaseName,
      password: 'marquinho1701',
      port: 5432,
    });
  }

  // Función para conectar y manejar la lógica de conexión
  async conectarBaseDeDatos() {
    try {
      const client = await this.pool.connect();
      console.log(`Conexión exitosa a la base de datos: ${this.pool.options.database}`);
      // Puedes hacer operaciones en la base de datos usando "client" aquí
      // ...

      // Finalmente, liberar el cliente de la pool cuando hayas terminado
      client.release();
    } catch (error) {
      console.error('Error al conectar a PostgreSQL:', error.message);
    }
  }
}

module.exports = UserService;
