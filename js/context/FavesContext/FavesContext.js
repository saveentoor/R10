import React, { createContext, Component } from "react";
import { queryFaves, createFav } from "../../config/models";

const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }

  async componentDidMount() {
    this.getFavedSessionIds();
  }

  getFavedSessionIds = async () => {
    try {
      const faves = await queryFaves();
      const faveIds = faves.map(fave => fave[0]);
      console.log(faves);
      this.setState({ faveIds });
    } catch (e) {
      return false;
    }
  };

  addFaveSession = async sessionId => {
    try {
      const newFave = await createFav(sessionId);
      if (newFave) {
        this.setState({ faveIds: [...this.state.faveIds, newFave.id] });
      }
    } catch (e) {
      return false;
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await removedFav(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      return false;
    }
  };

  render() {
    console.log(this.state.faveIds);
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
