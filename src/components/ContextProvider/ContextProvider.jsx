import { createContext } from "react";
export const AuthContext = createContext(null);
import PropTypes from 'prop-types'

const ContextProvider = ({ children }) => {

    const homeData = [
        'Banana',
        'Grapes',
        'Mangoes',
        'Carpenter',
        'Pencil',
        'Pen'
    ]
    const authInfo = {
        homeData

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
ContextProvider.propTypes = {
    children:PropTypes.object
}

export default ContextProvider;