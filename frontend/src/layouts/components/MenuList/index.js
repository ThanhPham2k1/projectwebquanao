import className from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import App2 from '~/App2';
import { Button } from 'antd';
import { useAuthContext } from '~/context/AuthContext';
import config from '~/config';
import { useNavigate } from 'react-router-dom';
import { hideSidebar, toggleShowSidebar } from '~/redux/showSlice';
import style from './MenuList.module.scss';
import { removeToken } from '~/helpers';
const cx = className.bind(style);

function MenuList({ vertical, className }) {
    const { user, setUser } = useAuthContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        removeToken();
        setUser(undefined);
        navigate('/signin', { replace: true });
    };
    const handleClickMenuItem = () => {
        dispatch(hideSidebar());
        window.scrollTo(0, 0);
    };

    return (
        <>
            <ul className={`${cx('menu-list', { vertical })} ${[className]}`}>
                <li className={cx('menu-item')}>
                    <NavLink
                        onClick={handleClickMenuItem}
                        className={(nav) => cx('menu-link', { active: nav.isActive })}
                        to={config.router.home}
                    >
                        Home
                    </NavLink>
                </li>

                <li className={cx('menu-item')}>
                    <NavLink
                        onClick={handleClickMenuItem}
                        className={(nav) => cx('menu-link', { active: nav.isActive })}
                        to={config.router.products}
                    >
                        Products
                    </NavLink>
                </li>
                <li className={cx('menu-item')}>
                    <NavLink
                        onClick={handleClickMenuItem}
                        className={(nav) => cx('menu-link', { active: nav.isActive })}
                        to={config.router.contact}
                    >
                        contact
                    </NavLink>
                </li>
            </ul>
            {user ? (
                <>
                    <Button className="auth_button_login" href="/profile" type="link">
                        {user.username}
                    </Button>
                    <Button className="auth_button_signUp" type="primary" onClick={handleLogout}>
                        {user.username}
                        Logout
                    </Button>
                </>
            ) : (
                <>
                    <Button className="auth_button_login" href="/signin" type="link">
                        Login
                    </Button>
                    <Button className="auth_button_signUp" href="/signup" type="primary">
                        SignUp
                    </Button>
                </>
            )}
        </>

        // </div>
    );
}

MenuList.propTypes = {
    vertical: PropTypes.bool,
};

export default MenuList;
