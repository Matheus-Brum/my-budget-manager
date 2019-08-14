import * as validator from 'validator';
import * as _ from 'underscore';

export class CommonValidator {

    public static validateString(string:string, minimumLength:number, maximumLength:number):boolean {
        return typeof string === "string" && validator.isLength(string, {min : minimumLength, max : maximumLength});
    }

    public static validateId(id:string):boolean {
        return typeof id === "string" && validator.isUUID(id, 4);
    }

    public static isEmpty(item:any):boolean {
        if(item){
            return _.isEmpty(item);
        }
        return true;
    }

    public static validateToken(token:any):boolean {
        return validator.isJWT(token);
    }

}