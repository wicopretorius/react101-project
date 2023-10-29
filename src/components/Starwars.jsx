import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from '@mui/material/Grid';

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      imageUrl: null,
      films: [],
    };
  }

  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88);
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          imageUrl: data.image,
          loadedCharacter: true,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="content">
          {this.state.loadedCharacter && (
            <div>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                <h1>{this.state.name}</h1>
              <p>{this.state.height} m</p>
              <p>Homeworld: {this.state.homeworld}</p>
                </Grid>
                <Grid item xs={6}>
                <p>
                <img
                  src={this.state.imageUrl}
                  alt={this.state.name}
                  className="img"
                />
              </p>
                </Grid>
              </Grid>
            </div>
          )}
        
          <Button
            variant="contained"
            color="success"
            onClick={() => this.getNewCharacter()}
            endIcon={<SendIcon />}
          >
            Randomize Character
          </Button>
        </div>
        <div
          className="bg-img"
          style={{ backgroundImage: `url(${this.state.imageUrl})` }}
        ></div>
      </div>
    );
  }
}

export default StarWars;
