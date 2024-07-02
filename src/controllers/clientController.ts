import { Client } from "../entities/client";
import { ClientRepository } from "../repositories/clientRepository";
import { BaseController } from "./baseController";


export class ClientController extends BaseController<Client>{

    private clientRepository: ClientRepository;

    constructor(){
        super(Client)
        this.clientRepository= new ClientRepository;
    }
}