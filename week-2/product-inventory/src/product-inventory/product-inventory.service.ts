import { Injectable } from '@nestjs/common';
import { CreateProductInventoryDto } from './dto/create-product-inventory.dto';
import { UpdateProductInventoryDto } from './dto/update-product-inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { stockLevel } from 'enum';

@Injectable()
export class ProductInventoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProductInventoryDto: CreateProductInventoryDto) {
    try {
      return this.prismaService.product.create({
        data: createProductInventoryDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  findAll() {
    try {
      return this.prismaService.product.findMany();
    } catch (error) {
      return error.message;
    }
  }

  async stockLevel(): Promise<stockLevel> {
    try {
      const products = await this.prismaService.product.findMany();
      const totalQuantity = products.reduce(
        (acc, product) => acc + product.quantity,
        0,
      );
      if (totalQuantity > 100) {
        return stockLevel.HIGH;
      } else if (totalQuantity < 100 && totalQuantity >= 50) {
        return stockLevel.MEDIUM;
      } else {
        return stockLevel.LOW;
      }
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return this.prismaService.product.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(
    id: number,
    updateProductInventoryDto: UpdateProductInventoryDto,
  ) {
    try {
      return this.prismaService.product.update({
        where: {
          id: id,
        },
        data: updateProductInventoryDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  remove(id: number) {
    try {
      return this.prismaService.product.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error.message;
    }
  }
}
