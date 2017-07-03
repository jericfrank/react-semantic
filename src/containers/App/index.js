import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import SideBar from '../../components/SideBar';

class App extends Component {
  render() {
    return (
  	  <Grid columns={2}>
	    	<Grid.Row>
	      	<Grid.Column width={1}>
	        	<SideBar/>
	        </Grid.Column>
	      	<Grid.Column width={15}>
	   				asd
	      	</Grid.Column>
	    	</Grid.Row>
	    </Grid>
    )
  }
}

export default App;
