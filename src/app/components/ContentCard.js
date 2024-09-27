"use client";
import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";

const ContentCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GraphQL API Endpoint
  const endpoint = "https://onlinebooktrip.com/graphql";

  // GraphQL Query
  const query = gql`
    query NewQuery($format: PostObjectFieldFormatEnum = RENDERED) {
      pages {
        edges {
          node {
            id
            uri
            title
            content(format: $format)
          }
        }
      }
    }
  `;

  useEffect(() => {
    const client = new GraphQLClient(endpoint);

    const fetchData = async () => {
      try {
        const response = await client.request(query);
        // Process and set the data from the response
        setData(response.pages.edges);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="content_container ">
      {data.map(({ node }) => (
        <div
          key={node.id}
          className="border rounded-lg p-10 flex flex-col justify-center items-center shadow-lg"
        >
          {/* Display the Title using dangerouslySetInnerHTML */}
          <div
            className="font-bold text-lg mb-2 text-center"
            dangerouslySetInnerHTML={{ __html: node.title }} 
          />
          {/* Display the Content */}
          <p className="text-center" dangerouslySetInnerHTML={{ __html: node.content }}></p>
        </div>
      ))}
    </div>
  );
};


export default ContentCard;
