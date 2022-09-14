<template>
  <div>111144999</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {}
  },
  mounted() {
    const randomInteger = (minimum, maximum) =>
      Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
    const createDelay =
      ({ willResolve }) =>
      (ms, { value }) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (willResolve) {
              resolve(value)
            } else {
              reject(value)
            }
          }, ms)
        })
      }
    const createWithTimers = () => {
      const delay = createDelay({ willResolve: true })
      delay.reject = createDelay({ willResolve: false })
      delay.range = (minimum, maximum, options) =>
      delay(randomInteger(minimum, maximum), options)
      return delay
    }
    const delay4 = createWithTimers()
    ;(async () => {
      try {
        const result = await delay4.reject(1000, {
          value: '我是若川',
          willResolve: false
        })
        console.log('永远不会输出这句')
      } catch (err) {
        console.log('输出结果', err)
      }

      const result2 = await delay4.range(10, 20000, {
        value: '我是若川，range'
      })
      console.log('输出结果', result2)
    })()

    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    axios.get('/afterWork', {
      cancelToken: source.token
    })

    source.cancel()
  }
}
</script>
