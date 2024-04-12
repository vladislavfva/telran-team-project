import classes from './Skeleton.module.css';

function Skeleton({ count }) {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div key={index} className={classes.skeleton}></div>
  ));

  return <div className={classes.skeleton_wrapper}>{skeletons}</div>;
}

export default Skeleton;
