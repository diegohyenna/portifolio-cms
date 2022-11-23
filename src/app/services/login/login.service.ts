import { Injectable } from '@angular/core';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  User,
} from 'firebase/auth';

export interface IResponse {
  status: string;
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {
    // onAuthStateChanged(getAuth(), (e) => {
    //   if (!e?.getIdToken()) {
    //     this.logout();
    //   }
    // });
  }

  isLogged() {
    let token = localStorage.getItem('token');

    return token ? true : false;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password)
      .then(async (userCredential: UserCredential) => {
        let user = await userCredential.user;
        let token = await user.getIdToken();

        this.setLogin(user, token);

        return {
          status: 'success',
          message: 'Login efetuado com sucesso!',
          data: userCredential,
        } as IResponse;
      })
      .catch((response: any) => {
        console.log(response);
        let errorMessage = JSON.stringify(response);
        if (errorMessage.includes('auth/too-many-requests'))
          return {
            status: 'error',
            message: 'O limite de conexões foi atingido',
            data: response,
          } as IResponse;

        if (errorMessage.includes('auth/wrong-password'))
          return {
            status: 'error',
            message: 'Email e senha errados!',
            data: response,
          } as IResponse;

        return {
          status: 'error',
          message: 'Não foi possível efetuar o login',
          data: response,
        } as IResponse;
      });
  }

  logout() {
    return signOut(getAuth())
      .then((response) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return response;
      })
      .catch((response) => response);
  }

  setLogin(user: User, token: string) {
    localStorage.setItem('user', user.uid);
    localStorage.setItem('token', token);
  }
}
