import React from "react";
import { contenedores } from "./dataContenedores";

const ContainerCap = () => {
  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full  text-sm text-center table-fixed">
        <thead className="shadow shadow-secundario bg-complemento/30">
          <tr className="text-xl  font-light">
            <th rowSpan={2} className="p-2 shadow shadow-secundario">
              Tipo
            </th>
            <th colSpan={3} className="p-2 shadow shadow-secundario">
              Peso
            </th>
            <th colSpan={3} className="p-2 shadow shadow-secundario">
              Medidas Internas
            </th>
            <th rowSpan={2} className="p-2 shadow shadow-secundario">
              CBM
            </th>
            <th colSpan={2} className="p-2 shadow shadow-secundario">
              Cantidad Pallets
            </th>
          </tr>
          <tr className="font-bold">
            <th className="p-2 shadow shadow-secundario">Tara</th>
            <th className="p-2 shadow shadow-secundario">Carga Máx.</th>
            <th className="p-2 shadow shadow-secundario">Máx. Bruto</th>
            <th className="p-2 shadow shadow-secundario">Largo</th>
            <th className="p-2 shadow shadow-secundario">Ancho</th>
            <th className="p-2 shadow shadow-secundario">Alto</th>
            <th className="p-2 shadow shadow-secundario">Standard</th>
            <th className="p-2 shadow shadow-secundario">Europallet</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {contenedores.map((c, i) => (
            <tr key={i} className=" shadow shadow-secundario bg-complemento/20 odd:bg-complemento/10 ">
              <td className="p-2 shadow shadow-secundario font-semibold">{c.tipo}</td>
              <td className="p-2 shadow shadow-secundario">{c.peso.tara}</td>
              <td className="p-2 shadow shadow-secundario">{c.peso.cargaMax}</td>
              <td className="p-2 shadow shadow-secundario">{c.peso.brutoMax}</td>
              <td className="p-2 shadow shadow-secundario">{c.medidas.largo}</td>
              <td className="p-2 shadow shadow-secundario">{c.medidas.ancho}</td>
              <td className="p-2 shadow shadow-secundario">{c.medidas.alto}</td>
              <td className="p-2 shadow shadow-secundario">{c.cbm}</td>
              <td className="p-2 shadow shadow-secundario">{c.pallets.standard}</td>
              <td className="p-2 shadow shadow-secundario">{c.pallets.europallet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContainerCap;
