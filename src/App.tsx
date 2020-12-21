import React from 'react';
import Header from './components/Header/Header'
import LeftNav from './components/LeftNav/LeftNav'
import ClinicsNav from './components/ClinicsNav/ClinicsNav'
import KeyIssues from './components/KeyIssues/KeyIssues'
import MonitoringPeriod from './components/MonitoringPeriod/MonitoringPeriod'
import StaffTable from './components/StaffTable/StaffTable'
import styled from 'styled-components'
import './css/skeleton.css';

const App: React.FC = () => {

  return (
    <Wrapper>
      <LeftNav/>
      <Container className="eleven columns">
        <Header/>
        <Content>
          <div className="three columns">
            <ClinicsNav/>
          </div>
          <div className="nine columns">
            <KeyIssues/>
            <MonitoringPeriod/>
            <StaffTable/>
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
  height: 100%;
  border-left: 2px solid #eee;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
`
const Content = styled.div`
  width: 97%;
  padding: 50px;
  background: #f5f6fa;
  flex: 1;
`