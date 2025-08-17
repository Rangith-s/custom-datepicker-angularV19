import { MyDemoPipePipe } from './my-demo-pipe.pipe';

describe('MyDemoPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyDemoPipePipe();
    expect(pipe).toBeTruthy();
  });
});
