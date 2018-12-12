# ts-type-ext

> Typescript 高级类型扩展

[![NPM](https://img.shields.io/npm/v/ts-type-ext.svg)](https://www.npmjs.com/package/ts-type-ext) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 场景

在使用 typescript 时, 经常需要定义一些自定义类型\
暂时只设置了 3 种类型, 欢迎贡献代码

## Install

```bash
npm install --save ts-type-ext
```

## Usage

### Omit

在 React 的属性定义中, 有时会遇到: 容器组件需要传递 props 给木偶组件\
这时, 二者的 props 存在重叠\
我们可以以木偶组件属性 IPropsBase 为基础, 计算容器组件的 IProps:

```tsx
import {Omit} from 'ts-type-ext';

// 子组件的属性
interface IPropsBase {
  id: string;         <== 共有
  name: string;       <== 共有
  content: string;    <== 仅子组件有
  onSubmit: (e: React.FormEvent) => ReactNode;  <== 仅子组件有
}

// 父组件的属性
type IProps = Omit<IPropsBase, 'onSubmit' | 'content'>

// IProps 现在相当于: {id:string; name:string;}

```

### Stringify / Boolify

假设我们在操作一个表单, 表单有 name, title, content 三个 field, 因此我们可以这样写 values 的类型定义:\

```tsx
interface Values {
  name: any;
  title: any;
  content: any;
}
```

由于每个字段都需要校验, 需要保存校验结果, 因此我们需要一个 Errors 类型定义, 它应该是这样的:\

```tsx
interface Errors {
  name: string;   <== string类型
  title: string;   <== string类型
  content: string;   <== string类型
}
```

可以看出, Errors 与 Values 的 key 完全相同, 但 value 的类型换成了 string\
Stringify 闪亮登场:\

```tsx
import { Stringify } from 'ts-type-ext';
type Errors = Stingify<Values>;
```

简单, 明快!

### Boolify

同 Stringify, 如果我们需要有一个 HasTouched , value 的类型显然都是 boolean, \
使用`type HasTouched = Boolify<Values>`就好了

## License

MIT © [g770728y](https://github.com/g770728y)
