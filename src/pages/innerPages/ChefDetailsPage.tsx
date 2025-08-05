import ChefDetailsContent from "../../components/chef/ChefDetailsContent";
import LayoutV5 from "../../components/layouts/LayoutV6";
import TeamData from "../../assets/jsonData/team/TeamData.json";
import { useParams } from "react-router-dom";

const ChefDetailsPage = () => {
  const { id } = useParams();
  const data = TeamData.find((team) => team.id === parseInt(id || "0"));

  return (
    <>
      <LayoutV5 breadCrumb="chef-details" title="Chef Details">
        {data && <ChefDetailsContent teamInfo={data} />}
        {!data && <div>Blog Not Found</div>}
      </LayoutV5>
    </>
  );
};

export default ChefDetailsPage;
