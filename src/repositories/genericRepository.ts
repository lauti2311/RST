import { Repository, EntityTarget, DeepPartial } from 'typeorm';
import { Base } from '../entities/base';
import { AppDataSource } from '../AppDataSource';

export class GenericRepository<T extends Base> extends Repository<T> {
    constructor(entity: EntityTarget<T>) {
        super(entity, AppDataSource.manager);
    }

    public async findAllEntities(): Promise<T[]> {
        return this.find();
    }

    public async findByIdEntity(idEntity: string): Promise<T> {
        return this.findOneOrFail({
            where: { id: idEntity as any }
        });
    }

    public async createEntity(data: DeepPartial<T>): Promise<T> {
        const entity = this.create(data);
        return this.save(entity);
    }

    public async updateEntity(idEntity: string, data: DeepPartial<T>): Promise<T | Error> {
        try {
            await this.update(idEntity, data as any);
            return this.findByIdEntity(idEntity);
        } catch (error) {
            return error as Error;
        }
    }

    public async deleteEntity(idEntity: string): Promise<T | Error> {
        try {
            const entity = await this.findByIdEntity(idEntity);
            await this.remove(entity);
            return entity;
        } catch (error) {
            return error as Error;
        }
    }

    public async logicDelete(idEntity: string): Promise<T> {
        const entity = await this.findByIdEntity(idEntity);
        entity.deletedAt = new Date();
        return this.save(entity);
    }

    public async restoreLogicDeleted(idEntity: string): Promise<T> {
        const entity = await this.findByIdEntity(idEntity);

        if (!entity) {
            throw new Error(`Entidad con ID ${idEntity} no encontrada`);
        }

        // Restaurar solo si la entidad está marcada como eliminada lógicamente
        if (entity.deletedAt !== null) {
            entity.deletedAt = new Date(); // Asigna la fecha actual o lógica apropiada
            return this.save(entity);
        }

        return entity; // Devuelve la entidad original si no estaba marcada como eliminada lógicamente
    }


    

}