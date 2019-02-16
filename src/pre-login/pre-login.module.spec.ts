import { PreLoginModule } from './pre-login.module';

describe('PreLoginModule', () => {
  let preLoginModule: PreLoginModule;

  beforeEach(() => {
    preLoginModule = new PreLoginModule();
  });

  it('should create an instance', () => {
    expect(preLoginModule).toBeTruthy();
  });
});
