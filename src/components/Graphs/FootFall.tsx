import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components'

interface Props {
  title: string;
  figure: string;
  sub: string;
  data: number[];
  trend: {
    icon: string,
    value: string,
    textClass: string
  };
}

const FootFall: React.FC<Props> = (props) => {
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true,
            }
        },
        xaxis: {
            crosshairs: {
                width: 1,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: ['#43d39e'],
    };
    const type = 'line';
    const series = [{ name: props.title || 'Data', data: props.data || [] }];

    return (
      <Styled>
        <Title>{props.title}</Title>
          <Left>
              <Figure>{props.figure}</Figure>
              <Sub>{props.sub}</Sub>
              <Indicator className={props.trend.textClass}><i className={`${props.trend.icon}`}></i>{props.trend.value}</Indicator>
          </Left>
          <Right>
            <Chart options={options} series={series} type={type} height="100%" width="100%" />
          </Right>
      </Styled>
    );
};

export default FootFall;

const Styled = styled.div`
  background-color: #fff;
  padding: 20px;
`
const Title = styled.h4`
  font-size: 20px;
`
const Left = styled.div`
  width: 30%;
  height: 100px;
  float: left;
`
const Right = styled.div`
  width: 70%;
  height: 100px;
  float: right;
`
const Figure = styled.h4`
  font-size: 30px;
  margin-bottom: 5px;
`
const Sub = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`
const Indicator = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`
