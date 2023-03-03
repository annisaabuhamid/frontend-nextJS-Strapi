import React from "react";

import Articles from "../../../components/articles";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import { fetchAPI } from "../../../lib/api";


const News = ({ articles, categories, news }) => {
 
  return (
    <Layout categories={categories}>
      
      <div className="uk-section">
        <div className="uk-container uk-container-large">
        <h1>News</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, newsRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" })
    
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      
    },
    revalidate: 1,
  };
}


export default News;