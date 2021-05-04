import classes from "./App.module.css";
import Main from "./components/Main/Main";
import Wrapper from "./components/Wrapper/Wrapper";

const App = () => {
  return (
    <div className={classes.app}>
      <Wrapper>
        <Main />
      </Wrapper>
    </div>
  );
};

export default App;
