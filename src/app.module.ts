import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { RoteirizacaoModule } from './roteirizacao/roteirizacao.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
      context: (req: any) => {
        return {
          request: req
        }
      }
    }),
    RoteirizacaoModule,
  ],
})
export class AppModule { }
