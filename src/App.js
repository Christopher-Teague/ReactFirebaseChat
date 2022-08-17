import React from "react";
import NavBar from "./components/NavBar";
import Chat from "./components/Chat";
///// Auth from Firebase \\\\\
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  container: `max-w-[728px] mx-auto text-center`,
  main: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border realtive`,
};

function App() {
  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className={style.container}>
      <section className={style.main}>
        {/* NavBar */}
        <NavBar />
        {/* Chat Window*/}
        {user ? <Chat /> : <p className="mt-5">Log in to Chat</p>}
      </section>
    </div>
  );
}

export default App;
