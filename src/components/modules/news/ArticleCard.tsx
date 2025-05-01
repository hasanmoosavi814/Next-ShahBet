import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { INewsArticle } from "@/types/league";

import Image from "next/image";

const ArticleCard = ({ article }: { article: INewsArticle }) => (
  <Card className="hover:shadow-md transition">
    <CardHeader>
      <CardTitle className="text-base line-clamp-2">{article.title}</CardTitle>
    </CardHeader>
    <CardContent>
      {article.urlToImage && (
        <div className="relative w-full h-40 mb-2 rounded-md overflow-hidden">
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      <p className="text-sm text-muted-foreground line-clamp-3">
        {article.description}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 underline mt-2 inline-block"
      >
        Read full article →
      </a>
    </CardContent>
  </Card>
);

export default ArticleCard;
