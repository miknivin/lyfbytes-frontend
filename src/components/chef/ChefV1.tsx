import TeamData from "../../assets/jsonData/team/TeamData.json"
import SingleChefV1 from "./SingleChefV1";

interface DataType {
    sectionClass?: string
}

const ChefV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`chef-style-one-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Professional Chef</h4>
                                <h2 className="title">Meet Our Kitchen Kings</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {TeamData.slice(0, 4).map(team =>
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

export default ChefV1;