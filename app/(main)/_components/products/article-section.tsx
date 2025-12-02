import React from 'react';

type Props = {
  content: string;
  searchParams?: Promise<{ tab: string }>;
};

export default async function ArticleSection(props: Props) {
  const { content } = props;

  return (
    <div
      className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
