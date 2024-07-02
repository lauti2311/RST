import { Facture } from "../entities/facture";
import { FactureRepository } from "../repositories/factureRepository";
import { BaseController } from "./baseController";


export class FactureController extends BaseController<Facture>{

    private factureRepository: FactureRepository;

    constructor(){
        super(Facture);
        this.factureRepository = new FactureRepository;
    }
    
}