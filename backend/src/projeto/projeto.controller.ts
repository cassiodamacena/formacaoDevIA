import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoPrisma } from './projeto.prisma';
import { Projeto } from '@core';

@Controller('projetos')
export class ProjetoController {

    constructor(private readonly repo: ProjetoPrisma) { }

    @Get()
    async obterProjetos(): Promise<Projeto[]> {
        return this.repo.obterProjetos()
    }

    @Get(":id")
    async obterProjetoId(@Param("id") id: string): Promise<Projeto | null> {
        return this.repo.obterProjetoId(Number(id))
    }

}