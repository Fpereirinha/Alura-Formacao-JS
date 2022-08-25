import chalk from "chalk";
import fs from 'fs';
const errad = (erro) => {
    throw new Error(chalk.red(erro.code, 'arquivo não encontrado.'))
}
/*const pegaArquivo = (caminho) =>{
    fs.readFile(caminho, "utf-8", (err, text) => {
        if (err){
            errad(err)
        }
        console.log(chalk.green(text))
    })
}*/
/*const pegaArquivo = (caminho) => {
    fs.promises.readFile(caminho, "utf-8")
        .then((texto) => console.log(chalk.yellowBright(texto)))
        .catch((error) => errad(error))
}*/
async function pegaArq(x){
    try{
        const value = await fs.promises.readFile(x, "utf-8")
        console.log(chalk.cyanBright(value))
    } catch (x){errad(x)}
    finally {console.log(chalk.blue('Finalizado.'))
    }
}


pegaArq('links.md')

