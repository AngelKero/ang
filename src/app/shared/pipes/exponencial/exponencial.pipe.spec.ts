import { ExponencialPipe } from './exponencial.pipe';

xdescribe('ExponencialPipe', () => {
  it('create an instance', () => {
    const pipe = new ExponencialPipe();
    expect(pipe).toBeTruthy();
  });
});
