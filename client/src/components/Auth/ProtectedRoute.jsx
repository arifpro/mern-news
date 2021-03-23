import { Route, Redirect } from 'react-router-dom';
import { isAuthenticate, isAdmin } from './fetchApi';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAdmin() && isAuthenticate() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/account',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

export default ProtectedRoute;
