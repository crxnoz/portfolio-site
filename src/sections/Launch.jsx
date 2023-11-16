import Nav from "../components/Nav";
import ImageRoulette from "../components/ImageRoulette";

function Launch() {
  return (
    <div className="flex justify-around flex-col h-screen">
      <Nav />
      <div className="flex items-start justify-center">
        <div className="flex items-center justify-center">
          <ImageRoulette />
        </div>
        <div className="ml-10 flex h-full justify-center flex-col">
          <h1 className="text-white font-bold text-8xl">Luis Carreno</h1>
          <h1 className="text-white font-bold text-3xl opacity-80">
            Web Developer & UI Designer
          </h1>
          <div className="w-80 h-16 border-4 mt-6 flex justify-center items-center opacity-70 hover:opacity-100 transition-[opacity] active:opacity-80">
            <a className="text-slate-200 font-bold text-2xl font-mono">
              ABOUT ME
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-screen justify-end items-center text-2xl">
        <h1 className="opacity-70">new york, ny</h1>
        <div className="border-b w-24 h-0 opacity-70"></div>
      </div>
    </div>
  );
}

export default Launch;
