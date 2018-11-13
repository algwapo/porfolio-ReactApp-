import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Card } from 'antd';
import 'antd/dist/antd.css'; 

class Showcodes extends Component {
  constructor() {
    super();
    this.state = {
        codes:"Title",
    };
}
  render() {

    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <Card title="Index.js" bordered={false} style={{ width: 300 }}>
            <p>
             </p>
          </Card>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Showcodes;
