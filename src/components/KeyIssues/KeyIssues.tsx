import React, { useState } from 'react';
import styled from 'styled-components'
import { Button } from '../../css/styled';
import { ReactComponent as Dots } from '../../icons/v-menu.svg';
import { useGetIssuesQuery } from "../../generated/graphql";

const KeyIssues: React.FC = () => {

  const [active, setActive] = useState('0')
  
  const selectIssue = (issue_id: React.SetStateAction<string>) => {
    setActive(issue_id)
  }
  let { data, loading, error } = useGetIssuesQuery();

  if (loading) {
    return <div>Loading</div>;
  }
  
  if (error) {
    return <div>{error.message}</div>;
  }

  const issues = data?.issues;

  return (
    <Styled>
      <h4>Key Issues</h4>
      <div>
        {issues?.map(issue => (
          <Button className={issue.id === active ? "active" : ''} onClick={() => selectIssue(issue.id)}>
            <b>{ issue.name }</b>
            <small>{ issue.location }</small>
            <Dots className="icon dots" fill="#ddd" width="28" height="28"/>
          </Button>
        ))}
      </div>
    </Styled>
  );
};

export default KeyIssues;

const Styled = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  div > button {
    text-align: left;
    padding: 5px 25px 5px 10px;
    min-width: 145px;
    margin-right: 14px;
    > b {
      display: block;
      font-size: 11px; 
      line-height: 20px;
    }
    > small {
      display: block;
      font-size: 8px; 
      line-height: 14px;
    }
  }
`