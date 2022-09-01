function Table({ vetor }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((element, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{element.nome}</td>
                            <td>{element.marca}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;