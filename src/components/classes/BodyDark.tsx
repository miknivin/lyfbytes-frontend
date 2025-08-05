import { useEffect } from 'react';

const BodyDark = () => {

    useEffect(() => {
        document.body.classList.add('bg-dark-secondary');

        return () => {
            document.body.classList.remove('bg-dark-secondary');
        };
    }, []);

    return (
        <>

        </>
    );
};

export default BodyDark;