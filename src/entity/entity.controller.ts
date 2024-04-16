import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { EntityService } from './entity.service';

@Controller('entities')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Get()
  async getEntities(@Res() response: any, @Req() request: any) {
    const entities = await this.entityService.getEntities(request.query);
    const totalCount = await this.entityService.getEntityCount();
    return response.status(200).json({
      message: 'success',
      data: entities,
      pagination: {
        total: totalCount,
        perPage: request.query.limit ? parseInt(request.query.limit) : 10, // Set default perPage
        currentPage: parseInt(request.query.page) || 1,
        totalPages: Math.ceil(totalCount / (request.query.limit || 10)), // Calculate total pages
      },
    });
  }
  @Get(':id')
  async getEntity(@Res() response: any, @Param('id') id: string) {
    const entity = await this.entityService.getEntity(id);

    return response.status(200).json({
      message: 'success',
      data: entity,
    });
  }
}
