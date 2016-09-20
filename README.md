# Emoji

Emoji is based on [emojione](http://emojione.com) for Vue bulma.


## Installation

```
$ npm install vue-bulma-emoji --save
```


## Examples

```vue
<template>
  <div>
    <p>{{ 'Hello world! 😄 :smile:' | emoji }}</p>
    <p>{{ 'Hello world! 😄' | emoji('toShort') }}</p>
    <p>{{ 'Hello world! :smile:' | emoji('shortnameToImage') }}</p>
    <p>{{ 'Hello world! 😄' | emoji('unicodeToImage') }}</p>
    <emoji-icon class="e1a-smile"></emoji-icon>
  </div>
</template>

<script>
import Vue from 'vue'
import { EmojiIcon, filter } from 'vue-bulma-emoji'

Vue.use(filter)

export default {
  components: {
    EmojiIcon
  }
}
</script>
```


## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> [fundon.me](https://fundon.me) &nbsp;&middot;&nbsp;
> GitHub [@fundon](https://github.com/fundon) &nbsp;&middot;&nbsp;
> Twitter [@_fundon](https://twitter.com/_fundon)

