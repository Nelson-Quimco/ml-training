import AddUser from "./components/AddUser";
import GetUser from "./components/GetUser";

export default function Home() {
  return (
    <main className=" mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <AddUser />
        <GetUser />
      </div>
    </main>
  );
}
