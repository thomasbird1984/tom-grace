import { PartialsModule } from './partials.module';

describe('PartialsModule', () => {
  let partialsModule: PartialsModule;

  beforeEach(() => {
    partialsModule = new PartialsModule();
  });

  it('should create an instance', () => {
    expect(partialsModule).toBeTruthy();
  });
});
