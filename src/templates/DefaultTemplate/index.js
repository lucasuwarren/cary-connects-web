import React, { Component } from "react";
import NavigationMenu from "src/components/NavigationMenu";
import Map from "src/components/Map";
import flip from "geojson-flip";
import { withStyles } from "@material-ui/core/styles";
import Provider, { Context } from "../../components/Provider";
import MediaQuery from "react-responsive";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  mobileContainer: {
    "margin-top": "0rem",
    position: "fixed",
    top: "74px",
    "z-index": "-200",
    height: "80vh",
    display: "block"
  },
  computerContainer: {
    "margin-top": "2rem",
    position: "fixed",
    top: "74px",
    "z-index": "-200"
  },
  navContainer: {
    display: "block",
    position: "fixed"
  },
  bodyContainer: {
    height: "100%"
  }
});

class DefaultTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Provider>
        <Context.Consumer>
          {context => (
            <div id="default-template" onClick={context.clearResults}>
              <NavigationMenu className={classes.navContainer} />
              <div className={classes.bodyContainer}>
                <MediaQuery query="(min-width: 700px)">
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.computerContainer}
                  >
                    <Grid item xs={12} md={8}>
                      <Map polygonData={context.state.parkingData} />
                      {this.props.children}
                    </Grid>
                  </Grid>
                </MediaQuery>
                <MediaQuery query="(max-width: 700px)">
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.mobileContainer}
                  >
                    <Grid item xs={12} md={8}>
                      <Map polygonData={context.state.parkingData} />
                      {this.props.children}
                    </Grid>
                  </Grid>
                </MediaQuery>
              </div>
            </div>
          )}
        </Context.Consumer>
      </Provider>
    );
  }
}

export default withStyles(styles)(DefaultTemplate);