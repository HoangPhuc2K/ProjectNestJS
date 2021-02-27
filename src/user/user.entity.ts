import { Photo } from 'src/photo/photo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 1 })
  age: number;

  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];
}