import { Address } from "../entities/address";
import { AddressRepository } from "../repositories/addressRepository";
import { BaseController } from "./baseController";


export class AddressController extends BaseController<Address>{

    private addressRepository: AddressRepository;

    constructor(){
        super(Address)
        this.addressRepository= new AddressRepository;
    }
}