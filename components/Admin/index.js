import { useState, useRef, useEffect, useContext } from "react";
import LoginForm from "./LoginForm";
import BlogForm from "./BlogForm";
import NotificationCtx from "../../store/notificationCtx";
import Loading from "../Loading";

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

  const notificationCtx = useContext(NotificationCtx);

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
        <div style={{ width: "50%", margin: "0 auto" }}>
          <Loading />
        </div>
      </section>
    );
  }

  const submitLoginRequest = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setLoading(true);

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
      } else {
        notificationCtx.updateNotification("Invalid Login Credentials", false);
        notificationCtx.toggleNotification();
      }
    } catch (error) {
      console.log(error);
      notificationCtx.updateNotification({
        text: "Internal Server Error",
        success: false,
      });
      notificationCtx.toggleNotification();
    }
    setLoading(false);
  };

  const submitBlogPost = async (e) => {
    e.preventDefault();
    //validate user inputs
    if (!titleRef.current.value.trim() || !contentRef.current.value.trim()) {
      notificationCtx.updateNotification(
        "Blog Post missing Title or Content",
        false
      );
      notificationCtx.toggleNotification();
      return;
    }
    let base64Img = "placeholder";
    if (images.length > 0) {
      base64Img = images[0].base64;
    }
    const newBlogPost = {
      title: titleRef.current.value.trim(),
      text: contentRef.current.value.trim(),
      base64Img,
    };

    setLoading(true);

    //wrap api call in try catch
    const result = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlogPost),
    });
    setLoading(false);
    if (result.ok) {
      notificationCtx.updateNotification("Success! Blog Post was saved!", true);
      notificationCtx.toggleNotification();
    } else {
      notificationCtx.updateNotification(
        "Error connecting with database. Please try again later",
        false
      );
      notificationCtx.toggleNotification();
    }
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
      {loading && (
        <div style={{ width: "50%", margin: "0 auto" }}>
          <Loading />
        </div>
      )}
    </section>
  );
};

export default Admin;
