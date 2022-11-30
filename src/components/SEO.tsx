import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  name?: string;
  type?: string;
};

const SEO = ({ title, description, image, name, type }: SEOProps) => {
  return (
    <Helmet prioritizeSeoTags>
      {/* standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="og:image" content={image} />

      {/* twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
    </Helmet>
  );
};

export default SEO;
