import { dashboard, transactions, trend } from "./icons"

export const menuItems = [
    {
        id:1,
        title: 'DashBoard',
        icon:<i className='bx bx-home-alt icon' ></i>,
        link: '/'
    },
    {
        id:2,
        title: 'Category',
        icon:<i className='bx bx-bar-chart-alt-2 icon' ></i>,
        link: '/category'
    },
    {
        id:3,
        title: 'Transactions',
        icon:<i className='bx bx-wallet icon' ></i>,
        link: '/transactions'
    }
]