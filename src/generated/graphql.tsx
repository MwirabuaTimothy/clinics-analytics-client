import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Clinic = {
  __typename?: 'Clinic';
  id: Scalars['ID'];
  name: Scalars['String'];
  location: Scalars['String'];
  visits: Array<Visit>;
};

export type Issue = {
  __typename?: 'Issue';
  id: Scalars['ID'];
  name: Scalars['String'];
  visits: Array<Visit>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createIssue: Issue;
  createStaff: Staff;
  createVisit: Visit;
  createClinic: Clinic;
};


export type MutationCreateIssueArgs = {
  name: Scalars['String'];
};


export type MutationCreateStaffArgs = {
  name: Scalars['String'];
};


export type MutationCreateVisitArgs = {
  staffId: Scalars['Float'];
  issueId: Scalars['Float'];
  clinicId: Scalars['Float'];
  promoter_score: Scalars['Float'];
  fee: Scalars['Float'];
  time: Scalars['String'];
  patient: Scalars['String'];
};


export type MutationCreateClinicArgs = {
  location: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  issues: Array<Issue>;
  staffs: Array<Staff>;
  visits: Array<Visit>;
  clinics: Array<Clinic>;
};


export type QueryVisitsArgs = {
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  orderBy?: Maybe<Scalars['String']>;
  ascending: Scalars['Boolean'];
  clinicId?: Maybe<Scalars['Float']>;
  issueId?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['Float']>;
};

export type Staff = {
  __typename?: 'Staff';
  id: Scalars['ID'];
  name: Scalars['String'];
  visits: Array<Visit>;
  rank: Scalars['Float'];
  efficiency: Scalars['Float'];
  efficiency_delta1: Scalars['String'];
  efficiency_delta2: Scalars['String'];
  nps_delta1: Scalars['String'];
  nps_delta2: Scalars['String'];
  reported_issues: Scalars['Float'];
};

export type Visit = {
  __typename?: 'Visit';
  id: Scalars['ID'];
  patient: Scalars['String'];
  time: Scalars['String'];
  fee: Scalars['Float'];
  promoter_score: Scalars['Float'];
  clinicId: Scalars['Float'];
  issueId: Scalars['Float'];
  staffId: Scalars['Float'];
};

export type GetClinicsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClinicsQuery = (
  { __typename?: 'Query' }
  & { clinics: Array<(
    { __typename?: 'Clinic' }
    & Pick<Clinic, 'id' | 'name' | 'location'>
    & { visits: Array<(
      { __typename?: 'Visit' }
      & Pick<Visit, 'id' | 'patient' | 'time' | 'fee'>
    )> }
  )> }
);


export const GetClinicsDocument = gql`
    query GetClinics {
  clinics {
    id
    name
    location
    visits {
      id
      patient
      time
      fee
    }
  }
}
    `;

/**
 * __useGetClinicsQuery__
 *
 * To run a query within a React component, call `useGetClinicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClinicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClinicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClinicsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetClinicsQuery, GetClinicsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetClinicsQuery, GetClinicsQueryVariables>(GetClinicsDocument, baseOptions);
      }
export function useGetClinicsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetClinicsQuery, GetClinicsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetClinicsQuery, GetClinicsQueryVariables>(GetClinicsDocument, baseOptions);
        }
export type GetClinicsQueryHookResult = ReturnType<typeof useGetClinicsQuery>;
export type GetClinicsLazyQueryHookResult = ReturnType<typeof useGetClinicsLazyQuery>;
export type GetClinicsQueryResult = ApolloReactCommon.QueryResult<GetClinicsQuery, GetClinicsQueryVariables>;