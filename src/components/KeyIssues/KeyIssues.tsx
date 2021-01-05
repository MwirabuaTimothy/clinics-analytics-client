import React, { useState } from 'react';
import styled from 'styled-components'
import { Button, Title } from '../../css/styled';
import { ReactComponent as Dots } from '../../icons/v-menu.svg';
import { useGetIssuesQuery } from "../../graphql/generated";

interface Props {
  setIssue: (issueId:string) => void; 
}

const KeyIssues: React.FC<Props> = (props) => {

  const [active, setActive] = useState('0')
  
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
      <Title>Key Issues</Title>
      <div>
        {issues?.map(issue => (
          <Button key={issue.id} className={issue.id === active ? "active" : ''} onClick={() => props.setIssue(issue.id)}>
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
      line-height: 20px;
    }
    > small {
      display: block;
      font-size: 10px; 
      line-height: 14px;
      color: #aaa;
    }
  }
`