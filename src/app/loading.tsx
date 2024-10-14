import "../styles/loader.scss";
export default function Loading() {
  return (
    <div className="w-full p-4 bg-black flex flex-row items-center h-[100vh] justify-evenly">
      <div className="hidden md:block w-1/3" />
      <div className={`loader w-full md:w-1/3`}></div>;
      <div className="hidden md:block w-1/3" />
    </div>
  );
}
