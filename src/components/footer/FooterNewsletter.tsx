import { toast } from "react-toastify";

const FooterNewsletter = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        form.reset();
        toast.success("Subscribed Successfully!");
    };

    return (
        <>
                <form onSubmit={handleForm}>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                        name="email"
                        autoComplete="off"
                        required
                    />
                    <button type="submit"> Subscribe
                        <i className="fas fa-long-arrow-right" />
                    </button>
                </form>
        </>
    );
};

export default FooterNewsletter;
