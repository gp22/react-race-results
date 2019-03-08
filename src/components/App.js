import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import openSocket from 'socket.io-client';
import { cloneDeep } from 'lodash';
import RaceTable from './RaceTable';
import RaceTableRow from './RaceTableRow';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

const Container = styled.div`
  align-items: center;
  background: linear-gradient(45deg,#4158d0,#c850c0);
  display: flex;
  flex-direction: column;
  font-family: OpenSans;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-weight: normal;
  margin: 40px 0 0;
  width: 800px;
`;

const socket = openSocket('http://localhost:5000');

class App extends Component {
  componentDidMount() {
    socket.on('captures', (data) => {
      this.props.addCapture(data);
    });
  }

  render() {
    var sortedCaptures =
      cloneDeep(this.props.captures)
      .sort((a, b) => {
        if (a.secondCapture && b.secondCapture) {
          return new Date(a.secondCapture.timestamp) -
                 new Date(b.secondCapture.timestamp);
        } else {
          return new Date(b.timestamp) -
                 new Date(a.timestamp);
        }
      });

    return (
      <>
        <Normalize />
        <Container>
          <Title>Mooncascade Marathon Race Results</Title>
          <RaceTable>
            {sortedCaptures.map(capture => {
              var timestamp = capture.secondCapture
                ? new Date(capture.secondCapture.timestamp).toTimeString()
                : null;

              return (
                <RaceTableRow
                  key={capture.id}
                  number={capture.athlete.number}
                  name={capture.athlete.name}
                  timestamp={timestamp}
                />
              )
            })}
          </RaceTable>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({ captures: state.captures, readers: state.readers });

export default connect(mapStateToProps, actions)(App);
