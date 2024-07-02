import { Provider } from "../entities/provider";
import { ProviderRepository } from "../repositories/providerRepository";
import { BaseController } from "./baseController";


export class ProviderController extends BaseController<Provider>{

    private providerRepository: ProviderRepository;

    constructor(){
        super(Provider);

        this.providerRepository = new ProviderRepository;
    }
    
}