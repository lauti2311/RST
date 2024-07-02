import { Facture } from "../entities/facture";
import { BaseRepository } from "./baseRepository";

export class FactureRepository extends BaseRepository<Facture>{

    constructor(){
        super(Facture)
    }
}