/**Archivo para confiurar el puerto y verificar que el servidor está corriendo */
const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
