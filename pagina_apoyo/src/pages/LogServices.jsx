import SubLogServices from "../components/logistics/log_serv/SubLogServices";
import Ware from "../components/logistics/ware/Ware";

const LogServices = () => {
  return (
    <div className="pb-4">
      <SubLogServices />
      <Ware />
    </div>
  );
};

export default LogServices;
