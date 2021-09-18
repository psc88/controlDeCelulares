import { AppBar, Avatar, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useState } from "react";
import logo from "../imagenes/logo.jfif";
import SearchIcon from "@material-ui/icons/Search";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  const classes = useStyle();
  const displayMobile = () => {};
  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      <img src={logo} className={classes.logo} />
      <div className={classes.center}>
        <InputBase
          fullWidth
          placeholder="Buscador ..."
          inputProps={{ className: classes.input }}
        />
        <SearchIcon />
      </div>
      <div className = {classes.right}>
        <Typography>Ingresar</Typography>
        <Avatar className={classes.avatar}/>
      </div>
    </Toolbar>
  );
  return (
    <AppBar className= {classes.root}>
      {
      mobile ? displayMobile() : displayDesktop()
      }
    </AppBar>
  )
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#0D0732",
    zIndex: 99,
    width: "100%"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "210px",
    margin: "10px",
    objectFit: "contain",
    borderRadius: "50%",
  },
  center: {
    display: "flex",
    alignItems: "center",
    padding: "5px",
    margin: "1px",
    border: "1px solid lightgray",
    minWidth: "300px",
    borderRadius: "20px",
  },
  input: {
    fontSize: "25px",
    padding: "5px",
    color: "white"
  },
  right: {
      color: "white",
      display: "flex",
      alignItems: "center",
  },
  avatar: {
    marginLeft: "15px"
  }
}));

export default Header;
