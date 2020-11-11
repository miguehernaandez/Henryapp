import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/home/landingPage.jsx";
import Home from "./components/home/home.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { yellow, grey } from "@material-ui/core/colors";
import Footer from "./components/footer/footer";
import Register2 from "./components/forms/register2.jsx";
import Login from "./components/forms/login.jsx";
import UserProfile from "./components/userProfile/index.jsx";
import Student from "./components/students/students.jsx";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffff01",
    },
    secondary: grey,
  },
  display: "flex",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route path="/root" render={() => <NavBar />} />
        <Route exact path="/root/userprofile" render={() => <UserProfile />} />
        <Route exact path="/root/home" render={() => <Home />} />
        <Route exact path="/root/student" render={() => <Student />} />
        {/* <Route path="/root" render={() => <Footer />} /> */}
        <Route exact path="/root/register" render={() => <Register2 />} />
        <Route exact path="/root/login" render={() => <Login />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
