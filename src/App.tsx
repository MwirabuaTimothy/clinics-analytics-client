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
          <Body>
            <ClinicsNavContainer>
              <ClinicsNav/>
            </ClinicsNavContainer>
            <Inner>
              <KeyIssues/>
              <MonitoringPeriod/>
              <Graphs/>
              <StaffTable/>
            </Inner>
          </Body>
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
  margin-top: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
`
const Body = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const ClinicsNavContainer = styled.div`
  width: 300px;
  @media (max-width: 900px) {
    width: 96%;
  }
`
const Inner = styled.div`
  margin-left: 2%;
  padding-right: 2%;
  flex-grow: 1;
  @media (max-width: 900px) {
    margin-top: 30px;
    margin-left: 0;
    margin-right: 2%;
  }
`
