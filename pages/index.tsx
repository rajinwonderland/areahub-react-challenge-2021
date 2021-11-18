import { Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landfills App</title>
        <meta
          name="description"
          content="Landfills Frontend Interview Challenge Submission"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" p="4">
        Welcome to the AreaHub React Challenge 🎉!
      </Heading>
      {/* Your code here */}
    </>
  );
}
