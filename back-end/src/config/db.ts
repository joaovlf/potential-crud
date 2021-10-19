import { createConnection } from "typeorm";

export const connectServerOnBD = async () =>{
    const connection = await createConnection();
    console.log(`app conectado em ${connection.options.database} `);

    process.on('SIGINT',()=>{
        connection.close().then(()=>{
            console.log("conexao com db fechada");
        })
    })
};