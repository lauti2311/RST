import { Town } from "../entities/town";
import { BaseRepository } from "./baseRepository";


export class TownRepository extends BaseRepository<Town>{
    constructor(){
        super(Town)
    }
}