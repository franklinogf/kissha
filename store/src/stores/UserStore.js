import { observable, action, computed, decorate } from "mobx"
import { asyncComputed } from "computed-async-mobx"
import AxiosClient from "../config/axios"

export class UserStore {
  user = JSON.parse(localStorage.getItem("loggedUser")) || {
    isLoggedIn: false,
    id: 0,
  }

  setLogin = newUser => {
    if (newUser.isLoggedIn && newUser.id) {
      this.user = newUser
      localStorage.setItem("loggedUser", JSON.stringify(this.user))
    }
  }

  findUser = asyncComputed({}, 600, async () => {
    const response = await AxiosClient.get(
      `/users/${this.user.id}/limited`
    ).then(response => response.data.data)
    return response
  })

  get obtainUser() {
    return this.findUser.get()
  }

  get isLogged() {
    return this.user.isLoggedIn
  }

  setLogout = () => {
    this.user = {
      isLoggedIn: false,
      id: 0,
    }
    localStorage.setItem("loggedUser", JSON.stringify(this.user))
  }
}

decorate(UserStore, {
  user: observable,
  setLogin: action,
  logout: action,
  obtainUser: computed,
  isLogged: computed,
})
