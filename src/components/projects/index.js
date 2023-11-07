import { makeStyles, Toolbar, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BLUE, YELLOW } from "../../utils/colors";
import { PROJECTS } from "../../utils/ids";
import ProjectItems from "../../utils/projects";
import Project from "./Project";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minWidth: "100%",
    background: "linear-gradient(#010512, #00428b)",
    padding: 75,
    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px 75px"
    }
  },
  title: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  typo: {
    color: "whitesmoke",
    fontSize: 36,
    fontWeight: 600,
    marginBottom: 75,
    textShadow: `5px 3px 5px ${BLUE}`,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      marginBottom: 25,
    },
  },
  dots: {
    "& li.slick-active button::before": {
      color: YELLOW,
      opacity: 1,
    },
    "& li": {
      "& button::before": {
        color: "white",
        fontSize: 16,
        opacity: .5,
        margin: "15px 0",
      },
    }
  },
  arrow: {
    display: "block",
    position: "absolute",
    cursor: "pointer",
    top: "50% ",
    color: YELLOW,
    width: 20,
    height: 20,
  },
  prev: {
    left: -40,
  },
  next: {
    right: -40,
  },
}));

const Projects = ({ projects }) => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  const slidesCount = () => {
    if (sm) return 1;
    else if (md) return 2;
    else return 3;
  }

  const PrevArrow = ({ onClick }) => (
    <div className={`${classes.arrow} ${classes.prev}`} onClick={onClick}>
      <ArrowBackIos fontSize="large" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className={`${classes.arrow} ${classes.next}`} onClick={onClick}>
      <ArrowForwardIos fontSize="large" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesCount(),
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: `slick-dots ${classes.dots}`,
  };

  return (
    <div id={PROJECTS} className={classes.root}>
      <Toolbar />
      <div className={classes.title}>
        <Typography className={classes.typo}>Projects</Typography>
      </div>
      <Slider {...settings}>
        {projects.map(({ link, title, subtitle, technologies, image }) => (
          <Project
            key={link}
            link={link}
            title={title}
            subtitle={subtitle}
            technologies={technologies}
            image={image} />
        ))}
      </Slider>
    </div>
  );
};

Projects.defaultProps = {
  projects: ProjectItems,
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Projects;
