export default interface Tecnologia {

    id: number
    nome: string
    descricao: string
    imagem: string
    destaque: boolean

}

//const tec: Tecnologia = { id: 1, nome: "Java", descricao: "Teste", imagem: "132d1f65ads", destaque: true }
//const tec: Partial<Tecnologia> = { id: 1, nome: "Java", descricao: "Teste", destaque: true }
//console.log(tec)