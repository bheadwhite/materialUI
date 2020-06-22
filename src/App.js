import React, { useState } from "react"
import "./App.css"
import { Error, FileCopy } from "@material-ui/icons"
import { TextField, Button, Switch, makeStyles, useMediaQuery, useTheme } from "@material-ui/core"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//how to import react-toastify
//material-ui icons/ prebuilt components
//material-ui styles using makeStyles
//media queries

const useStyles = makeStyles((theme) => ({
  btn: {
    background: "green",
    color: "white",
    marginLeft: "1rem",
    [theme.breakpoints.down(500)]: {
      color: "red",
      background: "blue",
    },
  },
}))

function App() {
  const [field, setField] = useState("")
  const [checked, setChecked] = useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const matchesWOtheme = useMediaQuery("(min-width:400px)")
  const matchesWithTheme = useMediaQuery(theme.breakpoints.up("sm"))

  const handleChecked = () => {
    setChecked(!checked)
    toast.error(<ErrorMessage>you have set the taost to be {checked.toString()}</ErrorMessage>)
    toast.info("this is blue")
    toast.warn("this is yellow")
  }

  const ErrorMessage = ({ children }) => (
    <div>
      <Error />
      {children}
    </div>
  )

  if (matchesWithTheme) {
    return null
  }

  return (
    <div className='App'>
      <form>
        <h1>This is my Form</h1>
        <FileCopy />
        <Switch
          checked={checked}
          onChange={handleChecked}
          color='primary'
          name='checkedB'
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <TextField value={field} onChange={(e) => setField(e.target.value)} />
        <input value={field} onChange={(e) => setField(e.target.value)} />
        <Button type='submit' className={classes.btn}>
          Submit
        </Button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default App
