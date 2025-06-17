import React from "react";
import { contenedores } from "./dataContenedores";

const ContainerCap = () => {
  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full  text-sm text-center table-fixed">
        <thead className="shadow shadow-emerald-500 bg-slate-800/60">
          <tr className="text-xl text-white font-light">
            <th rowSpan={2} className="p-2 shadow shadow-emerald-500">
              Tipo
            </th>
            <th colSpan={3} className="p-2 shadow shadow-emerald-500">
              Peso
            </th>
            <th colSpan={3} className="p-2 shadow shadow-emerald-500">
              Medidas Internas
            </th>
            <th rowSpan={2} className="p-2 shadow shadow-emerald-500">
              CBM
            </th>
            <th colSpan={2} className="p-2 shadow shadow-emerald-500">
              Cantidad Pallets
            </th>
          </tr>
          <tr className=" text-white font-bold">
            <th className="p-2 shadow shadow-emerald-500">Tara</th>
            <th className="p-2 shadow shadow-emerald-500">Carga Máx.</th>
            <th className="p-2 shadow shadow-emerald-500">Máx. Bruto</th>
            <th className="p-2 shadow shadow-emerald-500">Largo</th>
            <th className="p-2 shadow shadow-emerald-500">Ancho</th>
            <th className="p-2 shadow shadow-emerald-500">Alto</th>
            <th className="p-2 shadow shadow-emerald-500">Standard</th>
            <th className="p-2 shadow shadow-emerald-500">Europallet</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {contenedores.map((c, i) => (
            <tr key={i} className="text-white shadow shadow-emerald-500 bg-slate-800/60 odd:bg-slate-700/60 ">
              <td className="p-2 shadow shadow-emerald-500 font-semibold">{c.tipo}</td>
              <td className="p-2 shadow shadow-emerald-500">{c.peso.tara}</td>
              <td className="p-2 shadow shadow-emerald-500">{c.peso.cargaMax}</td>
              <td className="p-2 shadow shadow-emerald-500">{c.peso.brutoMax}</td>
              <td className="p-2 shadow shadow-emerald-500">{c.medidas.largo}</td>
              <td className="p-2 shadow shadow-emerald-500">{c.medidas.ancho}</td>
              <td className="p-2 shadow shadow-emerald-500">{c.medidas.alto}</td>
              <td className="p-2 shadow shadow-emerald-500">{c.cbm}</td>
              <td className="p-2 shadow shadow-emerald-500">{c.pallets.standard}</td>
              <td className="p-2 shadow shadow-emerald-500">{c.pallets.europallet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContainerCap;
