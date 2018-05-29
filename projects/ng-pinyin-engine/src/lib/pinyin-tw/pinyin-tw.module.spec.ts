import { PinyinTwModule } from './pinyin-tw.module';

describe('PinyinTwModule', () => {
  let pinyinTwModule: PinyinTwModule;

  beforeEach(() => {
    pinyinTwModule = new PinyinTwModule();
  });

  it('should create an instance', () => {
    expect(pinyinTwModule).toBeTruthy();
  });
});
