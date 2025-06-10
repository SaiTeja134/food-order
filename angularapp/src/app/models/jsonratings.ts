import { ratings } from "./ratings";

export interface jsonratings {
    error:boolean;
    message:string;
    data:ratings[];
}