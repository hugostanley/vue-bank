/*
 * This is a sample implementation of state management in vue, reactive and
 * computed
 *
 * Docs link:
 * https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api
 * */
import router from "@/router";
import { reactive, computed } from "vue";

const initialUsers = JSON.parse(localStorage.getItem('users') || "[]")

function updateUsersInStorage(users) {
  localStorage.setItem('users', JSON.stringify(users))
}

/* reactive() is one of vue's reactivitiy api, it can be compared with react's
 * useState but vue's reactivity concept is much different compared with react.
 *
 * for example, this reactive api can be used outside of a vue component
 * */
export const users = reactive({
  users: initialUsers,
  getAll() {
    return this.users
  },
  getById(id) {
    const user = this.users.find(user => user.id === id)
    return user
  },
  addUser(data) {
    this.users.push(data)
    updateUsersInStorage(this.users)
    return this.users
  }
})


const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || "false")
function updateLoggedInUserInLocalStorage(user) {
  localStorage.setItem('loggedInUser', JSON.stringify(user))
}

export const auth = reactive({
  loggedInUser,
  maybeLoginUser({ username, password }) {
    const existingUser = users.getAll().find(user => user.username === username)

    if (!existingUser) {
      return false
    }

    const correctPassword = existingUser.password === password

    if (correctPassword) {
      this.loggedInUser = existingUser
      updateLoggedInUserInLocalStorage(this.loggedInUser)
    }

    return correctPassword
  },
  logOutUser() {
    this.loggedInUser = null
    updateLoggedInUserInLocalStorage(this.loggedInUser)
    router.push('/login')
  },
  maybeSignUpUser({ username, password }) {
    const existingUser = users.getAll().find(user => user.username === username)

    if (existingUser) {
      return false
    }

    users.addUser({ username, password })
    this.loggedInUser = { username, password }
    updateUsersInStorage(users.getAll())
    updateLoggedInUserInLocalStorage(this.loggedInUser)
    return true
  }
})

const allTransactions = JSON.parse(localStorage.getItem('transactions') || "[]")
function updateTransactionsInLocalStorage(transactions) {
  localStorage.setItem('transactions', JSON.stringify(transactions))
}

export const transactions = reactive({
  list: allTransactions,
  deposit(username, amount) {
    const transaction = {
      username,
      amount,
      date: Date.now(),
      type: 'deposit'
    }
    this.list.push(transaction)
    updateTransactionsInLocalStorage(this.list)
  }
})

/*
 * computed() is somewhat simiilar to react's useMemo but this api does not
 * necessarily need for the dependencies to be explicitly defined. cool!
 * */
export const currentUsersTransactions = computed(() =>
  transactions.list.filter(transaction => transaction.username === auth.loggedInUser.username)
)

export const currentUsersBalance = computed(() =>
  currentUsersTransactions.value.reduce((total, transaction) => total + transaction.amount, 0)
)
