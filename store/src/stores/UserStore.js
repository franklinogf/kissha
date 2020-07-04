import { observable, action, computed, decorate } from "mobx"
import { asyncComputed } from "computed-async-mobx"
import AxiosClient from "../config/axios"

export class UserStore {
  //OBSERVABLE
  loginStatus = null
  user = {}

  wrongLoginCollapse = false

  //FETCHS

  //GETTERS
  get obtainUser() {
    return this.user
  }

  get isLogged() {
    return this.isLogged
  }

  //SETTERS
  setLogin(status) {
    this.loginStatus = status
  }

  setUser(user) {
    this.user = user
  }

  setLogout(status) {
    this.loginStatus = status
    this.user = {}
  }
}

decorate(UserStore, {
  loginStatus: observable,
  user: observable,
  wrongLoginCollapse: observable,
  obtainUser: computed,
  isLogged: computed,
  setLogin: action,
  setUser: action,
  setLogout: action,
})
