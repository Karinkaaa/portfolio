import { GitHub, LinkedIn, Telegram } from "@material-ui/icons";
import { GITHUB, LINKED_IN, TELEGRAM } from "./links";

const ContactItems = [
  {
    link: TELEGRAM,
    Icon: ({ classes }) => <Telegram className={classes.icon} />,
  },
  {
    link: LINKED_IN,
    Icon: ({ classes }) => <LinkedIn className={classes.icon} />,
  },
  {
    link: GITHUB,
    Icon: ({ classes }) => <GitHub className={classes.icon} />,
  },
];

export default ContactItems;
