import Home from "../pages/Home/Home";
import Debt from "../pages/Debt/Debt";

const routes = [
        {
            path:'/',
            component: Home,
            exact: true
        },
        {
            path:'/debt',
            component: Debt,
            exact: false
        }
    ]

export default routes