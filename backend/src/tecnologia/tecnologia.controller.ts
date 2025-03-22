import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@core';
import { TecnologiaPrisma } from './tecnologia.prisma';

@Controller('tecnologias')
export class TecnologiaController {

    constructor(private readonly repo: TecnologiaPrisma) { }

    @Get()
    async obterTecnologias(): Promise<Tecnologia[]> {
        return this.repo.obterTecnologias();
    }

    @Get("destaques")
    async obterDestaques(): Promise<Tecnologia[]> {
        return this.repo.obterDestaques();
    }

}
