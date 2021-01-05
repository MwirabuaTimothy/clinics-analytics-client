import React from 'react';
import { render,  act } from '@testing-library/react';
import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import ClinicsNav from './ClinicsNav';

const GET_CLINICS_QUERY = gql`
  query GetClinics(
    $startDate: Float!,
    $endDate: Float!,
  ) {
    clinics(
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      name
      location
      visitsCount
    }
  }
`

const startDate = 1612051200000 
const endDate = 1612137600000 

const mocks:any = [
  {
    request: {
      query: GET_CLINICS_QUERY,
      variables: {
        startDate: startDate,
        endDate: endDate
      }
    },
    result: {
      data: {
        "clinics": [
          {
            "id": "1",
            "name": "Kiambiu",
            "location": "Kenya",
            "visitsCount": 9
          },
          {
            "id": "2",
            "name": "Mukuru Kwa Reuben",
            "location": "Kenya",
            "visitsCount": 11
          },
          {
            "id": "3",
            "name": "Mukuru Kwa Njenga",
            "location": "Kenya",
            "visitsCount": 12
          },
          {
            "id": "4",
            "name": "Baba Dogo",
            "location": "Kenya",
            "visitsCount": 11
          },
          {
            "id": "5",
            "name": "Kosovo",
            "location": "Kenya",
            "visitsCount": 12
          },
          {
            "id": "6",
            "name": "Mukuru Kayaba",
            "location": "Kenya",
            "visitsCount": 10
          }
        ]
      },
    },
  },
]

let component: any

beforeEach( async ()=>{
  await act( async () => {
    component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ClinicsNav  startDate={startDate} endDate={endDate} setClinic={()=>{}} />
      </MockedProvider>,
    )
  })
})

it('renders the component title', async() => {
  const title = await component.findByText(/Visits/)
  expect(title).toBeInTheDocument()
});


it('renders the first clinic', async() => {
  const firstClinic = await component.findByText(/Kiambiu/)
  expect(firstClinic).toBeInTheDocument();
});
  
it('renders full list of clinics eventually', async() => {
  const buttons = await component.getAllByRole('button')
  expect(buttons).toHaveLength(6)
});

