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
    const groceriesData = [
        'Fruits and vegetables.',
        'Grains',
        'Meat',
        'Dairy',
        'Fish',
        'Beverages',
        'Condiments and spices',
        'Cleaning supplies',
    ]
    const electronicsData = [
        'Computer',
        'Speaker',
        'Bulb',
        'Home appliances',
        'Smartphones',
        'Audio players',
        'Blender',
        'Bread Maker',
        'Charger',
    ]
    const fashionData = [
        'Jacket',
        'Jeans',
        'Blouse',
        'Cardigan',
        'Blazer',
        'Cargo pants',
        'Skirt',
        'Bathing suit'

    ]
    const aboutData = [
        'This ecommerce platform built using Botble CMS, showcasing its capabilities for creating online stores. It likely features a modern, responsive design with a focus on selling home-related products such as smart home devices, home decor, or furniture. Key features include product showcases, secure checkout, blog/resource sections, and customer support tools. Botble CMS offers customization, scalability, and SEO optimization, making it ideal for small to medium-sized businesses. This demo serves as an example of how to build a functional and visually appealing ecommerce website using Botble.'

    ]
    const shopData = [
        'Department stores',
        'Specialty stores',
        'Convenience stores',
        'Drug stores',
        'Boutiques',
        'Discount stores',
        'Supermarkets',
        'Warehouse stores'
    ]
    const authInfo = {
        homeData,
        groceriesData,
        electronicsData,
        fashionData,
        aboutData,
        shopData

    }
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
ContextProvider.propTypes = {
    children: PropTypes.object
}

export default ContextProvider;