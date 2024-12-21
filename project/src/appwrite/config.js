import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service{
    client = new Client;
    databases;
    buckets;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteprojectId);
        databases = new Databases(this.client);
        buckets = new Storage(this.client);
    }

    async createPost({title,slug,content,fearturedImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    fearturedImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("appwrite:: createpost:: ",error);
            
        }
    }

    async updatePost(slug,{title,content,fearturedImage,status}){
        try {
            return await databases.updateDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    fearturedImage,
                    status,
                }
            )
        } catch (error) {
            console.log("appwrite:: updatepost:: ",error);
            
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("appwrite:: deletePost:: error ",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await databases.getDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                [],
            );
        } catch (error) {
            console.log("appwrite:: getpost:: ",error);
            return false;
        }
    }

    // async listPost(){
    //     try {
    //         return await databases.listDocument(
    //             conf.appwritedatabaseId,
    //             conf.appwritecollectionId,
    //             [],
    //         );
    //     } catch (error) {
    //         console.log("appwrite:: listpost:: ",error);
    //         return false;
    //     }
    // }

    async getPosts(queries = Query.equal("status","active")){
        try {
            return await databases.getDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                queries,
            );
        } catch (error) {
            console.log("appwrite:: getpost:: queries:: ",error);
            return false;
        }
    }

    //upload file

    async uploadFile(file){
        try {
            return await this.buckets.createFile(
                conf.appwritebucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("appwrite:: uploadfile:: ",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.buckets.deleteFile(
                conf.appwritebucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("appwrite:: deletefile:: ",error);
            return false;
        }
    }

    getfilepreview(fileId){
        return this.buckets.getFilePreview(
            conf.appwritebucketId,
            fileId,
        )
    }
}

const service = new Service();
export default service