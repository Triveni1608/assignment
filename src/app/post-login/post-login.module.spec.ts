import { PostLoginModule } from './post-login.module';

describe('PostLoginModule', () => {
  let postLoginModule: PostLoginModule;

  beforeEach(() => {
    postLoginModule = new PostLoginModule();
  });

  it('should create an instance', () => {
    expect(postLoginModule).toBeTruthy();
  });
});
