// USAMOS - requerimos el servidor

const app = require('./app');

async function Servidor(){
    await app.listen(3000);
    console.log('server port 3000');
}

Servidor();