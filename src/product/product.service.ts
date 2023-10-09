import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct: Product = new Product();
    newProduct.Name = createProductDto.Name;
    newProduct.Price = createProductDto.Price;
    newProduct.Gmail = createProductDto.Gmail;
    return this.productRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const newProduct: Product = new Product();
    newProduct.Name = updateProductDto.Name;
    newProduct.Price = updateProductDto.Price;
    newProduct.Gmail = updateProductDto.Gmail;
    newProduct.id = id;
    return this.productRepository.save(newProduct);
  }

  remove(id: number): Promise<Product[]> {
    this.productRepository.delete(id);
    return this.productRepository.find();
  }
}
