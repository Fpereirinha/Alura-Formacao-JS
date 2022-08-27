import chalk from "chalk";
import fs from 'fs';
const errad = (erro) => {
    throw new Error(chalk.red(erro, 'arquivo não encontrado.'))
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
        return Pegalink(value)
    } catch (erro){errad(erro)}
}

const Pegalink = (x) => {
    const resultados = []
    const regex = /\[([^\]]*)\]\(([^\)]*)\)/gm;
    let temp;
    while ((temp = regex.exec(x)) !== null){
        resultados.push({[temp[1]] : temp[2]})
    }
    return resultados.length === 0 ? 'não há links' : resultados
}

export {pegaArq}
