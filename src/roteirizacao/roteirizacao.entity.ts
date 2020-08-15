import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

@Entity('roteirizacao')
@ObjectType()
export default class Roteirizacao extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    @Field(() => Number, { nullable: true })
    id: number

    @Column()
    @Field(() => Boolean)
    teveAlgumaRotaCriada?: boolean
}