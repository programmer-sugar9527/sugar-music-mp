// index.ts

import { sayHello } from '../../api/test'

Page({
  data: {
    message: 'Hello World'
  },
  hi() {
    sayHello().then(data => {
      this.setData({
        message: data as string
      })
    })
  },
  onLoad() {

  },
})
