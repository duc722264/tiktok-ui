import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/296720081_586848799549973_5374496180078452650_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OkGpTZgl1i4AX9uR2y7&tn=XZQv6j_RVzY8CrVU&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDObIj5BZDVVF12wQVHcTMSGReY28KFUc9J6A12JyVtGQ&oe=63DE30BB"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
