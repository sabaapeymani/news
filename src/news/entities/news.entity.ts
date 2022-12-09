import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm'

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ type: 'text' })
  excerpt?: string

  @Column({ type: 'text' })
  content: string

  @CreateDateColumn()
  created: Date
}