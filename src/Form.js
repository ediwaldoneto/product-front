function Form({ botao, eventKeys, cadastrar, obj}) {
    return (
        <form>
            <input type='text' value={obj.nome} onChange={eventKeys} name='nome' placeholder='Nome'  className='form-control' />
            <input type='text' value={obj.marca} onChange={eventKeys} name='marca' placeholder='Marca' className='form-control' />

            {
                botao
                    ?
                    <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary' />
                    :
                    <div>
                        <input type='button' value='Alterar' className="btn btn-warning" />
                        <input type='button' value='Excluir' className="btn btn-danger" />
                        <input type='button' value='Cancelar' className="btn btn-secondary" />
                    </div>
            }



        </form>
    )
}

export default Form;