import classes from "./admin.module.css"

const LoginForm = ({submitHandler, usernameRef, passwordRef}) => {
  return (
    <form onSubmit={submitHandler} className={classes.adminForm}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="Enter username" ref={usernameRef}/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Enter password" ref={passwordRef}/>
      <button className="btn">Submit</button>
    </form>
  )
}

export default LoginForm