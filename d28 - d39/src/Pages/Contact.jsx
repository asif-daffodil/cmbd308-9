import { Helmet } from "react-helmet";
import ContactForm from "../Components/ContactCompo/ContactForm";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Page</title>
            </Helmet>
            <ContactForm />
        </div>
    );
};

export default Contact;