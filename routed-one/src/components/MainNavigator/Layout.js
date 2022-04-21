import classes from "./Layout.module.css";
import MainNavigator from './MainNavigator';

const Layout = (props) => {
  return (
    <div>
        <MainNavigator/>
        
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
