import classes from "./App.module.scss";
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";

function App() {
    return (
        <div className={classes.main}>
            <Header />
            <Routes />
        </div>
    );
}

export default App;
