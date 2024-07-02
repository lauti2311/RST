import { FactureDetails } from "../entities/factureDetails";
import { FactureDetailsRepository } from "../repositories/factureDetailsRepository";
import { BaseController } from "./baseController";


export class FactureDetailsController extends BaseController<FactureDetails>{

    private factureDetailsRepository: FactureDetailsRepository;

    constructor(){
        super(FactureDetails);
        this.factureDetailsRepository = new FactureDetailsRepository;
    }
}