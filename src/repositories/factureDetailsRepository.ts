import { FactureDetails } from "../entities/factureDetails";
import { BaseRepository } from "./baseRepository";

export class FactureDetailsRepository extends BaseRepository<FactureDetails>{
    constructor(){
        super(FactureDetails)
    }
}