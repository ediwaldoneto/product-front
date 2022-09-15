function Table({ vetor }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                    
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((element, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{element.nome}</td>
                            <td>{element.marca}</td>
                            <td><button className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;