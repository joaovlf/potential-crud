import {app} from './app'

const PORT  = 8000;

const server = 
app.listen(PORT,()=>{
console.log(`app rodando na porta ${PORT}`)});
/*
* app finalizado ao encerrar processo
*/
process.on('SIGINT',()=>{
    server.close();
    console.log('app finalizado');
    
})