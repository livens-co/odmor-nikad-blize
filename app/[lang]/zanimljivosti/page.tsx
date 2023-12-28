import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import getArticles from "@/sanity/actions/get-articles";
import { Article } from "@/types";
import Link from "next/link";

import "./style.scss";
import Image from "next/image";
import PaginationControlsNews from "@/components/PaginationControlsNews";

export const revalidate = 0;

interface NewsPageProps {
  params: {
    lang: Locale;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

interface Dictionary {
  newsPage: {
    header: string;
  };
}

const NewsPage: React.FC<NewsPageProps> = async ({
  params: { lang },
  searchParams,
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  const articles: Article[] = await getArticles(lang);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = articles.slice(start, end);

  return (
    <div className="newsPage">
      <header>
        <h1>{t.newsPage.header}</h1>
      </header>
      <main>
        <div className="articlesGrid">
          {entries.map((a: any) => (
            <div className="articleCard" key={a._id}>
              <Link
                href={`/${lang}/zanimljivosti/${a.slug}`}
                className="articleImage"
              >
                <Image
                  src={a.headerImage}
                  alt={a.title}
                  width={356}
                  height={150}
                  priority
                />
              </Link>
              <Link
                href={`/${lang}/zanimljivosti/${a.slug}`}
                className="articleTitle"
              >
                <h3>{a.title}</h3>
              </Link>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <PaginationControlsNews
            hasNextPage={end < articles.length}
            hasPrevPage={start > 0}
            articleNum={articles.length}
            lang={lang}
          />
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
