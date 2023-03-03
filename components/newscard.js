import React from "react";
import Link from "next/link";
import NextImage from "./image";

const NewsCard = ({ article }) => {
  return (
   
      
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
        
          <div className="uk-card-body">
          <Link href={`/category/${article.attributes.slug}`}>
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.data.attributes.name}
            </p>
            </Link>
           
          </div>
        </div>
     
    
  );
};

export default NewsCard;