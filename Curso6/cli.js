import chalk from "chalk";
import {pegaArq} from "./index.js";
import {validaUrl} from "./valida-http.js";
const caminho = process.argv[2]
const validate = process.argv[3]
async function processaText(caminho) {
    const result = await pegaArq(caminho)
    if (validate === 'validar'){
        console.log(await validaUrl(result))
    } else{
        console.log(chalk.yellow('lista de links'), result)
    }
}
processaText(caminho)