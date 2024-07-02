import { Province } from "../entities/province";
import { ProvinceRepository } from "../repositories/provinceRepository";
import { BaseController } from "./baseController";

export class ProvinceController extends BaseController<Province>{
    
    private provinceRepository: ProvinceRepository;

    constructor(){
        super(Province);

        this.provinceRepository = new ProvinceRepository;
    }
}