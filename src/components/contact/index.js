import { Container, IconButton, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { BLUE } from "../../utils/colors";
import ContactItems from "../../utils/contacts";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "xx-large",
    color: "white",
    marginLeft: 20,
    "&:hover": {
      color: BLUE,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "x-large",
      marginLeft: 10,
    },
  },
}));

const Contact = ({ contacts }) => {
  const classes = useStyles();

  return (
    <Container>
      {contacts.map(({ link, Icon }) => (
        <IconButton key={link} onClick={() => window.open(link)}>
          <Icon classes={classes} />
        </IconButton>
      ))}
    </Container>
  );
};

Contact.defaultProps = {
  contacts: ContactItems,
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      Icon: PropTypes.func.isRequired,
    }).isRequired
  ).isRequired,
};

export default Contact;
