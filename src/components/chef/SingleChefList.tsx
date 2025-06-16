interface DataType {
    listTitle?: string;
    memberInfo?: {
        id?: number;
        title?: string;
        info?: string;
        timeSpan: string
    }[] | undefined
}

const SingleChefList = ({ list }: { list: DataType }) => {
    const { listTitle, memberInfo } = list;

    return (
        <>
            <div className="chef-list-item" data-aos="fade-up">
                <h4>{[listTitle]}</h4>
                <ul>
                    {memberInfo ? (
                        memberInfo.map(info => (
                            <li key={info.id}>
                                <h5>{info.title}</h5>
                                <span>{info.info}</span>
                                <p>{info.timeSpan}</p>
                            </li>
                        ))
                    ) : (<li>No member information available.</li>)}
                </ul>
            </div>
        </>
    );
};

export default SingleChefList;