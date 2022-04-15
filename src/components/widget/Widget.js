import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import classes from './Widget.module.scss';
import clsx from 'clsx';

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlined className={clsx(classes.icon, classes.user)}/>,
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlined className={clsx(classes.icon, classes.order)} />,
      };  
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlined className={clsx(classes.icon, classes.earning)} />,
      };  
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlined className={clsx(classes.icon, classes.balance)} />,
      };
      break;
    default:
      break;
  }

  // temporary
  const amount = 100;
  const diff = 20;

  return (
    <div className={classes.widget}>
      <div className={classes.left}>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.counter}>{data.isMoney && "$"} {amount}</div>
        <div className={classes.link}>{data.link}</div>
      </div>
      <div className={classes.right}>
        <div className={clsx(classes.percentage, classes.positive)}>
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget