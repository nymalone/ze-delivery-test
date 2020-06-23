import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';

const GET_POC_INFO = gql`
  query getPocInfo($lat: String!, $long: String!) {
    pocSearch(now: "${new Date().toISOString()}", algorithm: "NEAREST", lat: $lat, long: $long) {
      id
      officialName
    }
  }
`;

function GetPocInfo({ lat, long }) {
  const { data, loading, error } = useQuery(GET_POC_INFO, {
    variables: {
      lat,
      long
    }
  });

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <Redirect
      to={{
        pathname: '/products',
        state: {
          pocId:
            data && data.pocSearch && data.pocSearch[0] && data.pocSearch[0].id
        }
      }}
    />
  );
}

export default GetPocInfo;
