import { INewsArticle } from "@/types/league";

export async function fetchArticles(query: string): Promise<INewsArticle[]> {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&pageSize=5&language=en&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch articles");

  const data = await res.json();
  return data.articles;
}
