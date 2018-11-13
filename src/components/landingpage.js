import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%',height:'auto', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Web Developer</h1>

            <hr/>

          <p>HTML/CSS | PHP | JavaScript | React </p>


       
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
