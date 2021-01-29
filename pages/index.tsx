import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bao Tran</title>
      </Head>
      <main className="flex items-center justify-center h-screen">
        <div className="w-8 h-8 overflow-hidden rounded-full">
          <a href="https://github.com/btrnaoa" target="_blank">
            <img
              className="object-cover w-full h-full"
              src="/github-icon.svg"
              alt="GitHub Mark"
            />
          </a>
        </div>
      </main>
    </>
  );
}
