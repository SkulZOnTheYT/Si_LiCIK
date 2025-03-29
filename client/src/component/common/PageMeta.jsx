const PageMeta = ({ title, description }) => {
    return (
      <>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </>
    );
  };

export default PageMeta;