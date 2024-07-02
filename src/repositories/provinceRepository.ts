import { Province } from "../entities/province";
import { BaseRepository } from "./baseRepository";


export class ProvinceRepository extends BaseRepository<Province>{
    constructor(){
        super(Province)
    }
}