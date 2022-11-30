// envs
declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    REACT_APP_apiKey: string;
    REACT_APP_authDomain: string;
    REACT_APP_projectId: string;
    REACT_APP_storageBucket: string;
    REACT_APP_messagingSenderId: string;
    REACT_APP_appId: string;
  }
}
