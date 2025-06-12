import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2011",
    text: "La empresa Maquila Confección surge subarrendando un pequeño espacio dentro de una bodega de Zona Franca, donde solo se tenían 2 trabajadores y su actividad económica era el maquilado y la manufactura.",
  },
  {
    year: "2014",
    text: "Luego, tres años más tarde, se crea en el barrio el Porvenir Confección Maquila, una pequeña empresa de confección de solo 7 empleados.",
  },
  {
    year: "2017",
    text: "Fue solo hasta el año 2017 donde ambas empresas deciden fusionarse formando APOYO LOGÍSTICO ZF SAS, como una mediana empresa que hoy día cuenta con alrededor de 80 empleados, los cuales hacen posible que el camino que comenzó hace algunos años siga llevando su rumbo hacia la grandeza.",
  },
  {
    year: "2025",
    text: "Muchos han sido los altibajos por los que ha pasado la empresa, sin embargo, se ha logrado mantener y crecer mediante decisiones estratégicas en producción, fortalecimiento de procesos internos y adaptación a las nuevas demandas del sector.",
  },
];

export default function Timeline() {
  return (
    <div className="relative bg-gradient-to-b from-stone-950 to-slate-900 text-white py-20 px-4 md:px-16">
      <div className="w-full text-4xl mb-8 text-center font-bold">
        Nuestra Historia
      </div>

      <div className="flex flex-col gap-20 relative z-10">
        {timelineData.map(({ year, text }, index) => {
          const alignLeft = index % 2 === 0;
          return (
            <div
              key={year}
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
                alignLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="m-auto flex justify-center">
                <div
                  className={`text-6xl font-black mb-2 inline-block drop-shadow-sm ${
                    [
                      "text-purple-300",
                      "text-purple-400",
                      "text-purple-500",
                      "text-purple-600",
                    ][index] || "text-purple-700"
                  }`}
                >
                  {year}
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="origin-center w-24 h-1 m-auto bg-purple-500 rounded-full"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, x: alignLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`w-full md:w-1/2 mx-auto bg-white/10 text-slate-50 backdrop-blur-sm p-6 rounded-xl border-b-4 ${
                  [
                    "border-emerald-200",
                    "border-emerald-300",
                    "border-emerald-400",
                    "border-emerald-500",
                  ][index] || "border-emerald-600"
                } shadow-[inset_0_-4px_10px_rgba(5,150,105,0.2)]`}
              >
                <p className="text-sm leading-relaxed text-justify">{text}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
