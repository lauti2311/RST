import { Town } from "../entities/town";
import { TownRepository } from "../repositories/townRepository";
import { BaseController } from "./baseController";


export class TownController extends BaseController<Town>{

    private townRepository: TownRepository;

    constructor(){
        super(Town);

        this.townRepository = new TownRepository;
    }
}