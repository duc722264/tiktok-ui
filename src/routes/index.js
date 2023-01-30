//! Layouts
import { HeaderOnly } from '~/components/Layout';

//* Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//todo: Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },

    {
        path: '/following',
        component: Following,
    },

    {
        path: '/profile',
        component: Profile,
    },

    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
]; //? auto

const privateRoutes = []; //? must login

export { publicRoutes, privateRoutes };
