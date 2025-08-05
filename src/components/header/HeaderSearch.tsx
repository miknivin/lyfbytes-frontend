interface HeaderSearchProps {
    searchClose: () => void;
    openSearch: () => void;
}

interface FormEventHandler {
    // eslint-disable-next-line no-unused-vars
    (event: React.FormEvent<HTMLFormElement>): void;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ searchClose, openSearch }) => {

    const handleSearch: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
    }

    return (
        <>
            <div className="top-search">
                <div className="container-xl">
                    <form onSubmit={handleSearch}>
                        <div className="input-group">
                            <span className="input-group-addon" onClick={openSearch}><i className="fa fa-search" /></span>
                            <input type="text" className="form-control" placeholder="Search" name="Search" autoComplete="off" required />
                            <span className="input-group-addon close-search" onClick={searchClose}><i className="fa fa-times" /></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HeaderSearch;