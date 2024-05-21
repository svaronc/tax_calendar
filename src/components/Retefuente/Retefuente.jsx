import './Retefuente.css'
import { datos } from '../../data/clientes';

const Retefuente = () => {
  return (
    <div className='container'>
      <h1>RETENCION EN LA FUENTE</h1>
      <input type="text" placeholder="Buscar cliente" className='search'/>
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>NIT</th>
            <th>DV</th>
            <th>ULTIMO</th>
            <th>ULTIMOS 2</th>
            <th>ENERO</th>
            <th>FEBRERO</th>
            <th>MARZO</th>
            <th>ABRIL</th>
            <th>MAYO</th>
            <th>JUNIO</th>
            <th>JULIO</th>
            <th>AGOSTO</th>
            <th>SEPTIEMBRE</th>
            <th>OCTUBRE</th>
            <th>NOVIEMBRE</th>
            <th>DICIEMBRE</th>
          </tr>
        </thead>
        <tbody>
        {datos.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.NOMBRE}</td>
              <td>{cliente.NIT}</td>
              <td>{cliente.DV}</td>
              <td>{cliente.ULTIMO}</td>
              <td>{cliente.dosDv}</td>
            </tr>
          ))}
          {/* Add more rows for additional data */}
        </tbody>
      </table>
    </div>
  );
};

export default Retefuente;
