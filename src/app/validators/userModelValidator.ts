import { UserModel } from "../models/userModel";
import { CommonValidator } from "./commonValidator";

export class UserModelValidator {

    public static validateUserModel(userModel:UserModel):boolean {
        return !CommonValidator.isEmpty(userModel) && !CommonValidator.isEmpty(userModel.username) && 
        !CommonValidator.isEmpty(userModel.password) && CommonValidator.validateString(userModel.username, 1, 256) && 
        CommonValidator.validateString(userModel.password, 1, 256);
    }

}