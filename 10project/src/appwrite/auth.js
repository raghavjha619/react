import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteprojectId) ;
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account(ID.unique(), email,password,name);

            if(userAccount){
                // call method
                return this.login(email,password)
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}){
        try {
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error
        }
    }

    async getUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("appwrite service :: getuser :: error: ",error);
        }

        return null; // if nothing is returnd from the try catch block , ie there is some error
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite service :: logout :: error: ",error);
            
        }
    }
}

const authService = new AuthService()

export default authService;