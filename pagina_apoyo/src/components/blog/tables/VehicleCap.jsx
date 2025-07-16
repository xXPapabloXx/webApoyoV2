import React from "react";
import { vehiculos } from "./dataVehiculos";

const VehicleCap = () => {
  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-2/3 mx-auto text-sm text-center table-fixed">
        <thead className="shadow shadow-secundario">
          <tr className="text-xl  font-light bg-complemento/30">
            <th className="p-3 shadow shadow-secundario">Tipo de Vehículo</th>
            <th className="p-3 shadow shadow-secundario">KILOS</th>
            <th className="p-3 shadow shadow-secundario">CBM</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((v, i) => (
            <tr
              key={i}
              className="shadow shadow-secundario/20 bg-complemento/20 odd:bg-complemento/10"
            >
              <td className="p-3 shadow shadow-secundario font-bold text-md">
                {v.tipo}
              </td>
              <td className="p-3 shadow shadow-secundario">{v.kilos}</td>
              <td className="p-3 shadow shadow-secundario">{v.cbm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleCap;
