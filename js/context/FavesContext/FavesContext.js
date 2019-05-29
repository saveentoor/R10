import React, { createContext, Component } from 'react';

const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  // more code will go here!
}
export { FavesProvider };
export default FavesContext;