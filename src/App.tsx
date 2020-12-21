import React from 'react';

import styled from 'styled-components'
const App: React.FC = () => {

  return (
    <Container>
      <LeftNav/>
      <Column>
        <Header/>
        <Column>
          <ClinicsNav/>
          <Column>
            <KeyIssues/>
            <MonitoringPeriod/>
            <StaffTable/>
          </Column>
        </Column>
      </Column>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: "100%";
`
const LeftNav = styled.div`
`
const Column = styled.div`
`
const Header = styled.div`
`
const ClinicsNav = styled.div`
`
const KeyIssues = styled.div`
`
const MonitoringPeriod = styled.div`
`
const StaffTable = styled.div`
`
