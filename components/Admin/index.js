import { useState, useRef, useEffect } from "react";
// import { signIn, useSession, getSession  } from "next-auth/client";
import { useRouter } from "next/router";

import LoginForm from "./LoginForm";
import BlogForm from "./BlogForm";

const Admin = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  // const [session, loading] = useSession()

  const [isLoggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  const submitLoginRequest = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const result = await fetch("/api/auth/login", {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    console.log(result)
    const data = await result.json();
    console.log(data);

    const result2 = await fetch("/api/auth/account");
    console.log(result2);
    const data2 = await result2.json();
    console.log(data2)

    } catch (error) {
      console.log(error)
    }

    
  };

  // useEffect(() => {
  //   getSession().then(session => {
  //     console.log(session)
  //   })
  // })

  return (
    <section>
      {isLoggedIn ? (
        <BlogForm />
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
