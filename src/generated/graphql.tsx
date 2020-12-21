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

export type GetVisitsQueryVariables = Exact<{
  take: Scalars['Float'];
  skip: Scalars['Float'];
  orderBy: Scalars['String'];
  ascending: Scalars['Boolean'];
  page: Scalars['Float'];
  clinicId: Scalars['Float'];
  issueId: Scalars['Float'];
  startDate: Scalars['Float'];
  endDate: Scalars['Float'];
}>;


export type GetVisitsQuery = (
  { __typename?: 'Query' }
  & { visits: Array<(
    { __typename?: 'Visit' }
    & Pick<Visit, 'id' | 'patient' | 'time' | 'fee' | 'promoter_score' | 'staffId' | 'clinicId' | 'issueId'>
  )> }
);

export type GetStaffsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStaffsQuery = (
  { __typename?: 'Query' }
  & { staffs: Array<(
    { __typename?: 'Staff' }
    & Pick<Staff, 'id' | 'name' | 'rank' | 'efficiency' | 'efficiency_delta1' | 'efficiency_delta2' | 'nps_delta1' | 'nps_delta2' | 'reported_issues'>
  )> }
);


export const GetVisitsDocument = gql`
    query getVisits($take: Float!, $skip: Float!, $orderBy: String!, $ascending: Boolean!, $page: Float!, $clinicId: Float!, $issueId: Float!, $startDate: Float!, $endDate: Float!) {
  visits(take: $take, skip: $skip, orderBy: $orderBy, ascending: $ascending, page: $page, clinicId: $clinicId, issueId: $issueId, startDate: $startDate, endDate: $endDate) {
    id
    patient
    time
    fee
    promoter_score
    staffId
    clinicId
    issueId
  }
}
    `;

/**
 * __useGetVisitsQuery__
 *
 * To run a query within a React component, call `useGetVisitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVisitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVisitsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *      ascending: // value for 'ascending'
 *      page: // value for 'page'
 *      clinicId: // value for 'clinicId'
 *      issueId: // value for 'issueId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetVisitsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetVisitsQuery, GetVisitsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetVisitsQuery, GetVisitsQueryVariables>(GetVisitsDocument, baseOptions);
      }
export function useGetVisitsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetVisitsQuery, GetVisitsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetVisitsQuery, GetVisitsQueryVariables>(GetVisitsDocument, baseOptions);
        }
export type GetVisitsQueryHookResult = ReturnType<typeof useGetVisitsQuery>;
export type GetVisitsLazyQueryHookResult = ReturnType<typeof useGetVisitsLazyQuery>;
export type GetVisitsQueryResult = ApolloReactCommon.QueryResult<GetVisitsQuery, GetVisitsQueryVariables>;
export const GetStaffsDocument = gql`
    query getStaffs {
  staffs {
    id
    name
    rank
    efficiency
    efficiency_delta1
    efficiency_delta2
    nps_delta1
    nps_delta2
    reported_issues
  }
}
    `;

/**
 * __useGetStaffsQuery__
 *
 * To run a query within a React component, call `useGetStaffsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStaffsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStaffsQuery, GetStaffsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetStaffsQuery, GetStaffsQueryVariables>(GetStaffsDocument, baseOptions);
      }
export function useGetStaffsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStaffsQuery, GetStaffsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetStaffsQuery, GetStaffsQueryVariables>(GetStaffsDocument, baseOptions);
        }
export type GetStaffsQueryHookResult = ReturnType<typeof useGetStaffsQuery>;
export type GetStaffsLazyQueryHookResult = ReturnType<typeof useGetStaffsLazyQuery>;
export type GetStaffsQueryResult = ApolloReactCommon.QueryResult<GetStaffsQuery, GetStaffsQueryVariables>;