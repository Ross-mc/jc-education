import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

import LoginForm from "./LoginForm";
import BlogForm from "./BlogForm";

const Admin = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const [isLoggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  const submitLoginRequest = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    console.log(result);
  };

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
