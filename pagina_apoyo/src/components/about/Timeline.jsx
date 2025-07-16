import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2011",
    text: "La empresa Maquila Confección surge subarrendando un pequeño espacio dentro de una bodega de Zona Franca, donde solo se tenían 2 trabajadores y su actividad económica era el maquilado y la manufactura.",
  },
  {
    year: "2014",
    text: "Tres años más tarde, se crea en el barrio el Porvenir Confección Maquila, una empresa de confección de solo 7 empleados.",
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
    <div className="relative  text-texto pt-10 px-4 md:px-16 pb-4">
      <div className="w-1/2 text-4xl mb-8 text-center mx-auto font-bold shadow-md shadow-secundario p-3">
        Nuestra Historia
      </div>

      <div className="flex flex-col gap-15 relative z-10 w-full bg-gradient-to-b from-0% via-secundario/10 to-100% rounded-2xl">
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
                  className={`text-8xl font-extrabold mb-2 bg-white/30 inline-block shadow-inner px-4 shadow-acento ${
                    index % 2 == 0 ? "rounded-r-4xl" : "rounded-l-4xl"
                  }  text-texto`}
                >
                  {year}
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="origin-center w-24 h-1 m-auto bg-acento shadow shadow-acento rounded-full"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, x: alignLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`w-full md:w-1/2 mx-auto shadow-inner shadow-complemento text-texto p-6 rounded-xl`}
              >
                <p className="text-xl font-serif font-semibold text-justify">{text}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
