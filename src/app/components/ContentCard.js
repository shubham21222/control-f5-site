"use client";
import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";

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

  const renderContentWithImages = (content) => {
    // Create a temporary DOM element to parse the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    // Extract and replace <img> tags with Next.js <Image> component
    const images = tempDiv.getElementsByTagName("img");
    Array.from(images).forEach((img) => {
      const src = img.getAttribute("src");
      const alt = img.getAttribute("alt") || "";
      
      // Create an Image component for each image
      const nextImage = (
        <Image
          key={src}
          src={src}
          alt={alt}
          width={500} // Set a fixed width or calculate based on your layout
          height={300} // Set a fixed height or calculate based on your layout
        />
      );

      // Replace the <img> tag in the temporary DOM element with the Next.js Image component
      img.replaceWith(nextImage);
    });

    return tempDiv.innerHTML; // Return the modified HTML
  };

  return (
    <div className="content_container">
      {data.map(({ node }) => (
        <div
          key={node.id}
          className="rounded-lg p-10 flex flex-col justify-center items-center"
        >
          {/* Display the Title */}
          <div
            className="font-bold text-lg mb-2 text-center"
            dangerouslySetInnerHTML={{ __html: node.title }}
          />
          {/* Display the Content with Images */}
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: renderContentWithImages(node.content) }}
          />
        </div>
      ))}
    </div>
  );
};

export default ContentCard;
