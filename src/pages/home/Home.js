import Sidebar from '../../components/sidebar/Sidebar';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.home}>
      <Sidebar />
      <div className={classes.homeContainer}>container</div>
    </div>
  )
}

export default Home