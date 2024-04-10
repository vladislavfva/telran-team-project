import classes from './BreadCrumbs.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BreadCrumbs() {
  const location = useLocation();

  const crumbs = ['main page', ...location.pathname.split('/')]
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      const currentLink = '/' + array.slice(1, index + 1).join('/');

      return (
        <Link className={classes.bread_crumb} key={crumb} to={currentLink}>
          {crumb}
        </Link>
      );
    });

  return <div className={classes.bread_crumbs}>{crumbs}</div>;
}

export default BreadCrumbs;
