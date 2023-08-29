
import {
    ERROR404,
    INDEX_PATH,
    TIMES_PATH,
    PROFILE_PATH,
    LOGIN_PATH,
    REGISTRATION_PATH
} from "./routes";
import Calendar from "./components/calendarComponents/Calendar";
import CreateTimes from "./components/timesComponents/CreateTimes";
import Page404 from './helpers/Page404';
import AuthoСheck from './auth/AuthCheck';
import Login from './components/loginComponents/Login'
import Registration from "./components/loginComponents/Registration";
// import AuthSso from "./http/auth/AuthSso";
// import AuthCallback from "./http/auth/AuthCallback";
// import AuthoСheck from "./http/auth/AuthoСheck";

const AppRoutes = [
    {
        index: true,
        // element: <Home />
        element:
            <AuthoСheck>
                <Calendar />
            </AuthoСheck>
    },
    {
        path: TIMES_PATH,
        element:
            <AuthoСheck>
                <CreateTimes />
            </AuthoСheck>
    },
    {
        path: LOGIN_PATH,
        element:
            <AuthoСheck>
                <Login />
            </AuthoСheck>
    },
    {
        path: REGISTRATION_PATH,
        element:
            <AuthoСheck>
                <Registration />
            </AuthoСheck>
    },
    // {
    //     path: PROFILE_PATH,
    //     element:
    //         <AuthoСheck>
    //             <Event />
    //         </AuthoСheck>
    // },
    {
        path: ERROR404,
        element: <Page404 />
    },
    // {
    //     path: AUTH_SSO,
    //     element: <AuthSso />
    // },
    // {
    //     path: AUTH_CALLBACK,
    //     element: <AuthCallback />
    // }
];

export default AppRoutes;
