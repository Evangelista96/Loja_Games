import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { Repository } from 'typeorm';




@Injectable()
export class CategoriaService {
    findById(id: number) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) {}

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();

    }
}