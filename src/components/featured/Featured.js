import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import classes from './Featured.module.scss'
import 'react-circular-progressbar/dist/styles.css'
import clsx from 'clsx'

const Featured = () => {
  return (
    <div className={classes.featured}>
      <div className={classes.top}>
        <h1 className={classes.title}>Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className={classes.bottom}>
        <div className={classes.featuredChart}>
          <CircularProgressbar value={70} text={`${70}%`} strokeWidth={5}/>
        </div>
        <p className={classes.title}>Total sales made today</p>
        <p className={classes.amount}>$420</p>
        <p className={classes.desc}>Previous transactions processing. Last payments may not be included.</p>
        <div className={classes.summary}>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Target</div>
            <div className={clsx(classes.itemResult, classes.negative)}>
              <KeyboardArrowDown fontSize="small"/>
              <div className={classes.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Last Week</div>
            <div className={clsx(classes.itemResult, classes.positive)}>
              <KeyboardArrowUp fontSize="small"/>
              <div className={classes.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Last Month</div>
            <div className={clsx(classes.itemResult, classes.positive)}>
              <KeyboardArrowUp fontSize="small"/>
              <div className={classes.resultAmount}>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured