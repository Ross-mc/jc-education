import { useState, useRef, useEffect } from "react";
// import { signIn, useSession, getSession  } from "next-auth/client";
import { useRouter } from "next/router";

import LoginForm from "./LoginForm";
import BlogForm from "./BlogForm";

const Admin = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(async () => {
    try {
      const result = await fetch("api/auth/account");
      const data = await result.json();
      if (data.username) {
        setUser(data.username);
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading....</h1>
      </section>
    );
  }

  const submitLoginRequest = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const result = await fetch("/api/auth/login", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (result.status === 200){
        setLoggedIn(true);
        const data = await result.json();
        setUser(data.user)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      {isLoggedIn ? (
        <BlogForm user={user} />
      ) : (
        <LoginForm
          submitHandler={submitLoginRequest}
          usernameRef={usernameRef}
          passwordRef={passwordRef}
        />
      )}
    </section>
  );
};

export default Admin;
