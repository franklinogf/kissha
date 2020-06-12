import { observable, action, computed, decorate } from "mobx"


export class UserStore {

    user = {
        isLoggedIn: false,
        firstName: '',
        lastName:'',
        email:''
    }
}

decorate(UserStore,{
    user: observable
});

