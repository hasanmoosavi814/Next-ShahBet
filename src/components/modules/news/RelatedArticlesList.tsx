"use client";

import { useEffect, useState } from "react";
import { fetchArticles } from "@/lib/fetchArticles";
import { INewsArticle } from "@/types/league";

import ArticleSkeleton from "./ArticleSkeleton";
import ArticleEmpty from "./ArticleEmpty";
import ArticleCard from "./ArticleCard";

const RelatedArticlesList = ({ teamName }: { teamName: string }) => {
  const [articles, setArticles] = useState<INewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles(teamName)
      .then(setArticles)
      .finally(() => setLoading(false));
  }, [teamName]);

  if (loading) return <ArticleSkeleton />;
  if (!articles.length) return <ArticleEmpty />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {articles.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
};

export default RelatedArticlesList;
