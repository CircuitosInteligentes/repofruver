import { type } from 'os';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Categoria } from './Categoria.entity';
import { Ventas } from './Ventas.entity';


@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cantidadIngresada: number;

  @Column()
  costoXcantidad: number;

  @Column()
  fechaIngreso: string;

  @Column()
  cantidadVenta: number;

  @Column()
  precioVenta: number;

  @Column()
  fechaInventario: string;

  @Column()
  cantidadActual: number;

  @Column()
  avisoReposicion: boolean;

  @Column({type: "bigint", unique:true})
  codigoBarra: number;

  @Column()
  imagen: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  @JoinColumn()
  categoria: Categoria;

  @ManyToOne(() => Ventas, (ventas) => ventas.productos)
  ventas: Ventas;

  @Column()
  activo: boolean;
}
