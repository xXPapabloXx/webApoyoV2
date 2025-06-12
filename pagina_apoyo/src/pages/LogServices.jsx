
import SubLogServices from "../components/logistics/log_serv/SubLogServices";
import Ware from "../components/logistics/ware/Ware";


const LogServices = () => {
  return (
   <div className="grid grid-rows-2">
    <SubLogServices />
    <Ware />
   </div>
  );
};

export default LogServices;
