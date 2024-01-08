  const initDB = async () => {
  const pgp = require('pg-promise')();
  const db = pgp(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5434/logistica');

  try {
    // Crea la tabla envios si no existe
    await db.none(`
      CREATE TABLE IF NOT EXISTS envios (
        id SERIAL PRIMARY KEY,
        destinatario VARCHAR(255) NOT NULL,
        remitente VARCHAR(255) NOT NULL,
        contenido TEXT NOT NULL,
        fecha_envio DATE NOT NULL,
        distancia DECIMAL NOT NULL,
        tarifa DECIMAL NOT NULL
      );
    `);

    console.log('Base de datos inicializada correctamente.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  } finally {
    pgp.end();
  }
};

initDB();