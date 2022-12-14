import {pegaArq} from "../index.js"

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArq).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArq('A:\\JSAlura\\Alura-Formacao-JS\\Curso6\\test\\arquivos\\texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArq('A:\\JSAlura\\Alura-Formacao-JS\\Curso6\\test\\arquivos\\texto1_semlinks.md')
        expect(resultado).toBe('não há links');
    })
    it('deve lançar um erro na falta de arquivo', () => {
        async function capturaErro() {
            await pegaArq('diretorio abs')
            expect(capturaErro).toThrowError(/não há arquivo no caminho/)
        }
    })
})