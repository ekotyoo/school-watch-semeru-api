import { PrimaryGeneratedColumn, Column, JoinColumn, Entity, BaseEntity, CreateDateColumn, OneToOne, OneToMany, Generated, UpdateDateColumn } from "typeorm";
import { SchoolAnalysis } from "./school_analysis.entity";
import { Report } from "./report.entity";
import { Room } from "./room.entity";

@Entity("schools")
export class School extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    @Generated("uuid")
    uuid!: string

    @Column()
    name!: string

    @Column()
    address!: string

    @Column({ nullable: true, default: null })
    cover_image_path!: string

    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date

    @OneToOne(() => SchoolAnalysis, { "cascade": ["insert"] })
    @JoinColumn()
    school_analysis!: SchoolAnalysis

    @OneToMany(() => Report, (report) => report.school)
    reports!: Report[]

    @OneToMany(() => Room, (room) => room.school, { "cascade": ["insert"] })
    rooms!: Room[]
}