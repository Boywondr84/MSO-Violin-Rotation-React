import Head from "next/head";
import Header from "../components/header";
import AddViolin from "@/components/addViolinForm";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MSO Violin Rotation</title>
      </Head>
      <Header />
      <AddViolin />
    </>
  );
}