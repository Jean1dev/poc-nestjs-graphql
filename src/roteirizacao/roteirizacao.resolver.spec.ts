import { Test, TestingModule } from '@nestjs/testing';
import { RoteirizacaoResolver } from './roteirizacao.resolver';

describe('RoteirizacaoResolver', () => {
  let resolver: RoteirizacaoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoteirizacaoResolver],
    }).compile();

    resolver = module.get<RoteirizacaoResolver>(RoteirizacaoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
