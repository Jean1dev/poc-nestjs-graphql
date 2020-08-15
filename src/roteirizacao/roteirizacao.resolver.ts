import { Resolver, Query } from '@nestjs/graphql';
import Roteirizacao from './roteirizacao.entity';

@Resolver('Roteirizacao')
export class RoteirizacaoResolver {

    @Query(returns => Roteirizacao)
    public async teste() {
        return []
    }

}
