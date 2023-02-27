/* eslint-disable jsx-a11y/alt-text */
import { MenuOutlined } from '@ant-design/icons';
import className from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import config from '~/config';
import MenuList from '../../MenuList';
import style from './LeftHeader.module.scss';
import { toggleShowSidebar } from '~/redux/showSlice';

const cx = className.bind(style);
function LeftHeader({ smallDeviceMode }) {
    const dispatch = useDispatch(toggleShowSidebar());
    const handleClickOnMenu = () => {
        dispatch(toggleShowSidebar());
    };
    return (
        <div className={cx('menu')}>
            {smallDeviceMode && (
                <span className={cx('menu-icon')} onClick={handleClickOnMenu}>
                    <MenuOutlined />
                </span>
            )}
            <Link to={config.router.home}>
                <img
                    className={cx('menu-logo')}
                    src="https://th.bing.com/th?id=OIP.rlONxCGVjh5Z_mM4rAc_PQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                />
            </Link>
            {/* ={screenWidth < 992} */}
            {!smallDeviceMode && <MenuList />}
        </div>
    );
}

export default LeftHeader;
