import React, { useContext, useState } from "react"
import axios from 'axios'
import { toast } from "react-hot-toast";


export const BASE_URL = "https://nodejs-income-expense.onrender.com/api/v1/transactions/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [category, setCategory] = useState([])
    const [error, setError] = useState(null)
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [loading,setLoading] = useState(false);
    const [users,setUsers] = useState({});


    const addCategory = async(category) => {
        const response = await axios.post("https://nodejs-income-expense.onrender.com/api/v1/category/add-category",category,
        {
            withCredentials: true,
            headers:{
              "Content-Type" : "application/json"
            },
          })
        .catch((err)=>{
            setError(err.response.data.message)
            toast.error(err.response.data.message)
        })
        toast("Category Added Succesfully")
        getCategory()
    }
    const getCategory = async ()=>{
        const response = await axios.get('https://nodejs-income-expense.onrender.com/api/v1/category/get-all',{withCredentials: true})
        setCategory(response.data.data)
    }
    const deleteCategory = async(id)=>{
        const res  = await axios.delete(`https://nodejs-income-expense.onrender.com/api/v1/category/${id}`,{withCredentials: true})
        getCategory()
        toast("Category Deleted Succesfully")
    }


    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income,
        {
            withCredentials: true,
            headers:{
              "Content-Type" : "application/json"
            },
          })
            .catch((err) =>{
                setError(err.response.data.message)
                toast(err.response.data.message)
            })
        toast("Income Added Sucesfully")
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`,{withCredentials: true})
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`,{withCredentials: true})
        getIncomes()
        toast("Income Deleted Sucesfully")
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income,
        {
            withCredentials: true,
            headers:{
              "Content-Type" : "application/json"
            },
          })
            .catch((err) =>{
                setError(err.response.data.message)
                toast(err.response.data.message)
            })
        toast("Expense Added Sucesfully")
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`,{withCredentials: true})
        setExpenses(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`,{withCredentials: true})
        getExpenses()
        toast("Expense Deleted Succesfully")
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        })

        return history
    }

    const getAllData = () => {
        getExpenses();
        getCategory();
        getIncomes();
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError,
            addCategory,
            getCategory,
            category,
            deleteCategory,
            getAllData,
            isAuthenticated,
            setIsAuthenticated,
            loading,
            setLoading,
            users,
            setUsers
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}