import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'users'})
export class Dto {

  @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
    
    @Column()
    Password: string
}

