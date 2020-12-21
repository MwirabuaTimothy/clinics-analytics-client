import React from 'react';
import Header from './components/Header/Header'
import LeftNav from './components/LeftNav/LeftNav'
import ClinicsNav from './components/ClinicsNav/ClinicsNav'
import KeyIssues from './components/KeyIssues/KeyIssues'
import MonitoringPeriod from './components/MonitoringPeriod/MonitoringPeriod'
import Graphs from './components/Graphs/Graphs'
import StaffTable from './components/StaffTable/StaffTable'
import styled from 'styled-components'
import './css/skeleton.css';

const App: React.FC = () => {

  return (
    <Wrapper>
      <LeftNav/>
      <Container>
        <Header/>
        <Content>
          <h1>Analytics</h1>
          <div>
            <div className="three columns">
              <ClinicsNav/>
            </div>
            <Inner className="nine columns">
              <KeyIssues/>
              <MonitoringPeriod/>
              <Graphs/>
              <StaffTable/>
            </Inner>
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100%;
`
const Container = styled.div`
  background: #f5f6fa;
  margin-left: 80px;
  width: calc(100% - 80px);
  display: inline-block;
`
const Content = styled.div`
  margin-top: 50px;
  padding-left: 40px;
  padding-bottom: 40px;
  display: inline-block;
`
const Inner = styled.div`
  margin-left: 2%;
`
