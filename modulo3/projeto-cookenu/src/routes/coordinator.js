

export const PageLogin = (navigate) => {
    navigate("/")
}
export const PageCadastro = (navigate) =>{
    navigate("/Cadastrar")
}
export const PageDetalhes = (navigate, id) => {
    navigate(`/Detalhes/${id}`)
}
export const PageReceitas = (navigate) => {
    navigate("/Receitas")
}
export const PageAdicionar = (navigate) => {
    navigate("/Adicionar-receitas")
}
export const VoltarPage = (navigate) => {
    navigate(-1)

}