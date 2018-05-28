## PinyinEngine

[pinyin-engine](https://github.com/aui/pinyin-engine) Angular 封装。

## 安装


使用 `yarn` 或者 `npm`
```
yarn add ng-pinyin-engine

npm install ng-pinyin-engine
```


## 使用

### 导入

可直接导入 `NgPinyinEngineModule` 模块。

```typescript
import { NgPinyinEngineModule } from 'ng-pinyin-engine';

@NgModule({
  ...
  imports: [
    NgPinyinEngineModule
  ]
  ...
})
```

或者导入具体的 `pipe`，根据需要导入简体或者繁体搜索管道。

```typescript
// 简体搜索
import { PinyinCnPipe } from 'ng-pinyin-engine';

// 繁体搜索
// import { PinyinTwPipe } from 'ng-pinyin-engine';

@NgModule({
  ...
  declarations: [
    PinyinCnPipe,
    // PinyinTwPipe
  ]
  ...
})
``` 

### 调用

如果待搜索列表为简单的字符串数组，则只需要传入 `keyword` 查询参数即可。

```html
<li *ngFor="let item of list | pinyinCn:keyword;">{{item}}</li>
```

如果待搜索列表为对象数据组，则除了需要传入 `keyword` 查询参数，还需要传入索引 Key 的配置数组，关于索引 Key 的说明可查看 [pinyin-engine](https://github.com/aui/pinyin-engine) 的文档。

```html
<li *ngFor="let item of list | pinyinCn:keyword:['name'];">{{item.name}}</li>
```

