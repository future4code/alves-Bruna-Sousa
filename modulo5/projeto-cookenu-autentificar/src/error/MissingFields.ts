import { BaseError } from "./BaseErros";

export class MissingFields extends BaseError{
    constructor(){
        super("esta faltando parametros",404)
    }
}