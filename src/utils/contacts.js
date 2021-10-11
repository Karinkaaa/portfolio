import { GITHUB, LINKED_IN, TELEGRAM } from "./links";
import { GitHub, LinkedIn, Telegram } from "@material-ui/icons";

const iconStyle = {
    fontSize: "xx-large",
    color: "white",
    marginLeft: "20px"
};

const ContactItems = [
    {
        link: TELEGRAM,
        Icon: () => <Telegram style={iconStyle}/>
    },
    {
        link: LINKED_IN,
        Icon: () => <LinkedIn style={iconStyle}/>
    },
    {
        link: GITHUB,
        Icon: () => <GitHub style={iconStyle}/>
    }
];

export default ContactItems;