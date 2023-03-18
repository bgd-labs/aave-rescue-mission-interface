import Head from 'next/head';
import React from 'react';

type MetaProps = {
  title: string;
  description: string;
};

export function Meta({ title, description }: MetaProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Aave - {title}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={`Aave - ${title}`} key="title" />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      <meta name="twitter:site" content="@AaveAave" key="twittersite" />
      <meta property="twitter:card" content="summary" key="twittercard" />
      <meta name="twitter:title" content={title} key="twittertitle" />
      <meta
        name="twitter:description"
        content={description}
        key="twitterdescription"
      />
      <meta
        name="keywords"
        key="keywords"
        content="Decentralized Finance, DeFi, rescue, Ethereum, assets, erc-20, smart contracts, open finance, trustless, Aave, BGD"
      />
    </Head>
  );
}
