import TeamData from "../../assets/jsonData/team/TeamData.json"
import SingleChefV1 from "./SingleChefV1";

interface DataType {
    sectionClass?: string
}

const ChefFull = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`chef-style-one-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        {TeamData.map(team =>
                            <div className="col-lg-3 col-md-6 chef-one-single mb-30" key={team.id}>
                                <SingleChefV1 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefFull;