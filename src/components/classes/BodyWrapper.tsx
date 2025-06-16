import { useEffect } from 'react';

const BodyWrapper = () => {

    useEffect(() => {
        document.body.classList.add('wrapper');

        return () => {
            document.body.classList.remove('wrapper');
        };
    }, []);

    return (
        <>

        </>
    );
};

export default BodyWrapper;