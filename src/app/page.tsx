export default function Home({}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] ">
        <div className="flex flex-col place-items-center gap-8">
          <div className="font-bold text-4xl font-serif text-blue-500">
            | ToDo Lists |
          </div>
          <input className="flex bg-white w-[400px] h-[30px]"></input>
          <button className="flex place-content-center rounded-md bg-blue-500 w-[56px] h-[25px]">
            Add
          </button>
        </div>
      </section>
    </main>
  );
}
