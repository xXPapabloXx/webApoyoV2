import React from "react";
import { vehiculos } from "./dataVehiculos";

const VehicleCap = () => {
  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full text-sm text-center table-fixed">
        <thead className="shadow shadow-emerald-500 bg-slate-800/60">
          <tr className="text-xl text-white font-light">
            <th className="p-3 shadow shadow-emerald-500">Tipo de Vehículo</th>
            <th className="p-3 shadow shadow-emerald-500">KILOS</th>
            <th className="p-3 shadow shadow-emerald-500">CBM</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((v, i) => (
            <tr
              key={i}
              className="text-white shadow shadow-emerald-500 bg-slate-800/60 odd:bg-slate-700/60"
            >
              <td className="p-3 shadow shadow-emerald-500 font-semibold">
                {v.tipo}
              </td>
              <td className="p-3 shadow shadow-emerald-500">{v.kilos}</td>
              <td className="p-3 shadow shadow-emerald-500">{v.cbm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleCap;
