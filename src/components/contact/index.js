import React from "react";
import PropTypes from "prop-types";
import { Container, IconButton } from "@material-ui/core";
import ContactItems from "../../utils/contacts";

const Contact = ({ contacts }) => (
    <Container>
        {
            contacts.map(({ link, Icon }) => (
                <IconButton
                    key={link}
                    onClick={() => window.open(link)}
                >
                    <Icon/>
                </IconButton>
            ))
        }
    </Container>
);

Contact.defaultProps = {
    contacts: ContactItems
};

Contact.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            Icon: PropTypes.func.isRequired
        }).isRequired
    ).isRequired
};

export default Contact;