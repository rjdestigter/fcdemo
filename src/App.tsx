import * as React from 'react';
import './App.css';

import logo from './logo.svg';

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { connect } from 'react-redux'

// Selectors
import { regions$ } from './modules/assets/selectors'

// IO
import IO, { inject } from '@farmersedge/io'
import ioAssets, { ioRegions } from './modules/assets/io'

// Components
import {
  List,
  SimpleListItem
} from 'rmwc/List';

// Assets
import { Asset } from '@farmersedge/model-assets'

class Assets extends React.PureComponent<{regions: Asset[]}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Regions</h1>
        </header>
        <List twoLine>
          {this.props.regions.map(region => (
            <SimpleListItem key={region.id} graphic="mood" text={region.label} secondaryText="Chocolate cookie dough" meta="info" />
          ))}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    regions: regions$(state),
  }
}

const io = IO.combine([
  ioAssets,
  IO.task(ioRegions)
])

const AssetsContainer = inject(io)(connect(mapStateToProps)(Assets));

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store as any}>
        <AssetsContainer />
      </Provider>
    );
  }
}