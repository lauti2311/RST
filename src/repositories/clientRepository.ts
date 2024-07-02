import { Client } from "../entities/client";
import { BaseRepository } from "./baseRepository";

export class ClientRepository extends BaseRepository<Client>{
    constructor(){
        super(Client)
    }
}