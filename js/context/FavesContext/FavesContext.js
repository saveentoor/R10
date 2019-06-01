import React, { Component } from "react";
import { queryFaves, createFave, removeFave } from "../../config/models";

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
      this.setState({ faveIds });
    } catch (e) {
      return false;
    }
  };

  addFaveSession = async sessionId => {
    try {
      await createFave(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      return false;
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await removeFave(sessionId);
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
