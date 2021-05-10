import { useState, useRef, useEffect } from "react";
// import { signIn, useSession, getSession  } from "next-auth/client";
import { useRouter } from "next/router";

import LoginForm from "./LoginForm";
import BlogForm from "./BlogForm";

const Admin = () => {
  //login form refs
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  //login related states
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  //blogform refs

  const titleRef = useRef("");
  const contentRef = useRef("");
  const [images, setImages] = useState([]);

  const fileToDataUri = (image) => {
    return new Promise((res) => {
      const reader = new FileReader();
      const { type, name, size } = image;
      reader.addEventListener("load", () => {
        res({
          base64: reader.result,
          name: name,
          type,
          size: size,
        });
      });
      reader.readAsDataURL(image);
    });
  };

  const storeImage = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImagesPromises = [];
      for (let i = 0; i < e.target.files.length; i++) {
        newImagesPromises.push(fileToDataUri(e.target.files[i]));
      }
      const newImages = await Promise.all(newImagesPromises);
      //grab all the images, save them to state
      setImages([
        ...images,
        ...newImages.filter((image) => image !== undefined),
      ]);
    }
  };

  useEffect(async () => {
    try {
      const result = await fetch("api/auth/account");
      const data = await result.json();
      if (data.username) {
        setUser(data.username);
        setLoggedIn(true);
        passwordRef.current.value = "";
        usernameRef.current.value = "";
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

      if (result.status === 200) {
        setLoggedIn(true);
        const data = await result.json();
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitBlogPost = async (e) => {
    e.preventDefault();
    console.log(titleRef.current.value);
    console.log(contentRef.current.value);
    console.log(images[0]);
    let base64Img = "placeholder"
    if (images.length > 0){
      base64Img = images[0].base64
    }
    const newBlogPost = {
      title: titleRef.current.value,
      text: contentRef.current.value,
      base64Img,
    }
    const result = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBlogPost)
    })
    const response = await result.json();
    console.log(response)


  };

  return (
    <section>
      {isLoggedIn ? (
        <BlogForm
          user={user}
          contentRef={contentRef}
          titleRef={titleRef}
          storeImage={storeImage}
          submitHandler={submitBlogPost}
        />
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
