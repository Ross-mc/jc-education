import classes from "./loading.module.css";

const Loading = () => {
  return (
    <div >
      <img className={classes.loading} src="/loading/spinner.gif" alt="Loading Animation" />
    </div>
  )
}

export default Loading