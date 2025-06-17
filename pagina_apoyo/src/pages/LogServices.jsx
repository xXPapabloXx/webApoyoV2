
import SubLogServices from "../components/logistics/log_serv/SubLogServices";
import Ware from "../components/logistics/ware/Ware";


const LogServices = () => {
  return (
   <div className="bg-gradient-to-b from-stone-950 via-slate-900 to-stone-900 pb-4">
    <SubLogServices />
    <Ware />
   </div>
  );
};

export default LogServices;
