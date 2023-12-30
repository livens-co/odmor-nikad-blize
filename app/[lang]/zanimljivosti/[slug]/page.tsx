import { RichTextComponents } from "@/components/RichTextComponent/RichTextComponents";
import { Locale } from "@/i18n.config";
import getArticle from "@/sanity/actions/get-article";
import { PortableText } from "@portabletext/react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import Gallery from "@/components/Gallery/Gallery";
import { getDictionary } from "@/lib/dictionary";
import getArticles from "@/sanity/actions/get-articles";

interface ArticlePageProps {
  params: {
    lang: Locale;
    slug: string;
  };
}

interface Dictionary {
  articlePage: {
    featured: string;
    button: string;
  };
}

const ArticlePage: React.FC<ArticlePageProps> = async ({
  params: { lang, slug },
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  const article = await getArticle(lang, slug);
  const articles = await getArticles(lang);

  return (
    <div className="articlePage">
      <header>
        <h1>{article?.title}</h1>
      </header>
      <main>
        <div className="headerImage">
          <Image
            priority
            src={article?.headerImage}
            width={800}
            height={300}
            alt={article?.title}
          />
        </div>
        
        <div className="line" />
        
        <article>
          <PortableText
            value={article?.content}
            components={RichTextComponents}
          />
        </article>

        {/* GALLERY */}

        {article?.images === null ? null : (
          <div className="galleryContainer">
            <Gallery images={article?.images} />
          </div>
        )}

        {/* FOOTER */}

        <div className="articleFooter">
          <Link href={`/${lang}/zanimljivosti`} className="articlesBtn">
            {t.articlePage.button}
          </Link>
          <div className="featuredArticles">
            <h1>{t.articlePage.featured}</h1>
            <div className="articles">
              {articles
                .map((a) => (
                  <div className="articleCard" key={a.slug}>
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
                ))
                .slice(0, 2)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;
