const focus = {
  "&:focus": {
    opacity: 0.7,
    outline: "none"
  }
};

const active = {
  "&:active": {
    position: "relative",
    top: "1px",
    left: "1px"
  }
};

module.exports = {
  mixins: {
    "h1-desktop": {
      "font-weight": "500",
      "font-size": "40px",
      "line-height": "60px"
    },
    "h1-mobile": {
      "font-weight": "500",
      "font-size": "30px",
      "line-height": "40px"
    },
    "h2-desktop": {
      "font-weight": "500",
      "font-size": "30px",
      "line-height": "40px"
    },
    "h2-mobile": {
      "font-weight": "500",
      "font-size": "25px",
      "line-height": "35px"
    },
    "h3-desktop": {
      "font-weight": "500",
      "font-size": "24px",
      "line-height": "30px"
    },
    "h3-mobile": {
      "font-weight": "500",
      "font-size": "20px",
      "line-height": "30px"
    },
    "text-desktop": {
      "font-size": "24px",
      "line-height": "34px"
    },
    "text-mobile": {
      "font-size": "20px",
      "line-height": "30px"
    },
    "text-secondary": {
      "font-size": "16px",
      "line-height": "24px"
    },
    "button-big": {
      "font-size": "20px",
      "line-height": "30px"
    },
    "button-small": {
      "font-size": "16px",
      "line-height": "25px"
    },
    link: {
      color: "var(--color-blue)",
      "&:hover, &:active": {
        opacity: 0.7
      },
      ...focus,
      ...active
    },
    focus,
    active
  }
};
