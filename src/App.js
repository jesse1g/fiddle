import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const url = `https://api.github.com/users/axiomaticdesign/starred`;

// styles made using styled-components
const Container = styled.div`
  font-family: 'Segoe Ui';
  background: #eee;
  padding: 40px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Repo = styled.div`
  background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Repo_title = styled.h2`
  font-weight: normal;
`;
const Repo_link = styled.a`
  color: #007afb;
`;

const Repo_star = styled.i`
  color: #ffc500;
    margin-right: 7px;
`;

const Repo_counters = styled.div`
  display: flex;
     flex-flow: row nowrap;
     align-items: center;
     & > div {
       margin-right: 20px;
       i {
         color: #333;
         margin-right: 5px;
         font-size: 1.25em;
       }
       a:link,
       a:visited {
         color: #777;
         text-decoration: none;
       }
       a:hover,
       a:active {
         color: #ff5600;
       }
     }
`;


class App extends Component {

  constructor(props) {
    super(props);

    // initialize states(don't really need states for this app, but it is easy to use)
    this.state = {
      data: []
    };

    // fetch data(starred repos from axiomaticdesign) from the Github api
    axios.get(url)
      .then((response) => {this.setState({data: response.data})})
      .catch((error) => {console.log(error)});
  }

  // helper function to display each repo
  display_repo() {
    return this.state.data.map((repo) => {
      return (
        <Repo key={repo.id}>
          {/*Repo title*/}
          <Repo_title>
              <Repo_star className="fa fa-star" />
              <Repo_link href={repo.html_url}> {repo.full_name} </Repo_link>
          </Repo_title>
          {/*Repo description*/}
          <p>{repo.description}</p>
          {/*Repo footer(stars and forks)*/}
          <Repo_counters>
            <div className="stars">
              <i className="fa fa-star" />
              <a href={repo.stargazers_url}> {repo.stargazers_count} </a>
            </div>
            <div className="forks">
              <i className="fa fa-code-fork" />
              <a href={repo.forks_url}> {repo.forks_count} </a>
            </div>
          </Repo_counters>
        </Repo>
      );
    });
  }

  render() {
    return (
      <Container>
        <Title>Starred repos for <span>axiomaticdesign</span></Title>
        {this.display_repo()}
      </Container>
    );
  }

}

export default App;
