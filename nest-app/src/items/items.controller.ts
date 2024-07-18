// src/items/items.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './schemas/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.update(id, createItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Item> {
    return this.itemsService.remove(id);
  }
}
