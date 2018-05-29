import { PinyinCnModule } from './pinyin-cn.module';

describe('PinyinCnModule', () => {
  let pinyinCnModule: PinyinCnModule;

  beforeEach(() => {
    pinyinCnModule = new PinyinCnModule();
  });

  it('should create an instance', () => {
    expect(pinyinCnModule).toBeTruthy();
  });
});
