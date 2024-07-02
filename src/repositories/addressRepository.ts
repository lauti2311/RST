import { BaseRepository } from "./baseRepository";
import { Address } from "../entities/address";

export class AddressRepository extends BaseRepository<Address>{
    constructor(){
        super(Address)
    }
}