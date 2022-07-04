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
    // function promisify(original) {
    //   function fn(...args) {
    //     return new Promise((resolve, reject) => {
    //       args.push((err, ...values) => {
    //         if (err) {
    //           return reject(err)
    //         }
    //         resolve(values)
    //       })
    //       console.log(args, 'args')
    //       Reflect.apply(original, this, args)
    //     })
    //   }
    //   return fn
    // }
    //     const loadImagePromise = function(src){
    //     return new Promise(function(resolve, reject){
    //         loadImage(src, function (err, image) {
    //             if(err){
    //                 reject(err);
    //                 return;
    //             }
    //             resolve(image);
    //         });
    //     });
    // };
    // loadImagePromise(imageSrc).then(res => {
    //     console.log(res);
    // })
    // .catch(err => {
    //     console.log(err);
    // });

    // const imageSrc = 'https://www.themealdb.com/images/ingredients/Lime.png'

    // function loadImage(src, callback) {
    //   const image = document.createElement('img')
    //   image.src = src
    //   image.alt = '公众号若川视野专用图？'
    //   image.style = 'width: 200px;height: 200px'
    //   image.onload = () => callback(null, image)
    //   image.onerror = () => callback(new Error('加载失败'))
    //   document.body.append(image)
    // }
    // const loadImagePromise = promisify(loadImage)
    // async function load() {
    //   try {
    //     const res = await loadImagePromise(imageSrc)
    //     console.log(res)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    // load()
    // const url = 'http://poetry.apiopen.top/sentences'
    // function request(url, callback) {
    //   // 1.创建对象
    //   const xhr = new XMLHttpRequest()

    //   // 2.初始化,设置请求方式和接口地址
    //   xhr.open('GET', url)
    //   xhr.onload = function () {
    //     if (this.status >= 200 && this.status < 300) {
    //       callback(xhr.response)
    //     } else {
    //       callback({
    //         status: this.status,
    //         statusText: xhr.statusText
    //       })
    //     }
    //   }
    //   xhr.onerror = function () {
    //      callback({
    //         status: this.status,
    //         statusText: xhr.statusText
    //       })
    //   }
    //   // 3.发送请求
    //   xhr.send()
    // }
    // const req = promisify(request)
    // req(url)
    //   .then((res) => {
    //     console.log(res, 'resss')
    //   })
    //   .catch((err) => {
    //     console.log(err, 'err')
    //   })
    // const delay1 = (ms)=>{
    //   return new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //       resolve()
    //     },ms)
    //   })
    // }
    // (async()=>{
    //   await delay1(1000)
    //   console.log('输入这句')
    // })()
    //  const delay2 = (ms,{value}={})=>{
    //   return new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //       resolve(value)
    //     },ms)
    //   })
    // }
    // (async()=>{
    //   const result = await delay2(1000,{value:'我是若川'})
    //   console.log('输出结果' ,result)
    // })()
    //  const delay3 = (ms,{value,willResolve}={})=>{
    //   return new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //       if(willResolve){
    //        resolve(value)
    //       }else{
    //         reject(value)
    //       }
          
    //     },ms)
    //   })
    // }
    // (async()=>{
    //   try{const result = await delay3(1000,{value:'我是若川',willResolve:false})
    //   console.log('永远不会输出这句')
    //   }catch(err){
    //   console.log('输出结果'),err
    //   }
    // })()
    //箭头函数双函数
//     const isType =(type: string) => (value: any) =>
//   typeof(value) === type;
// const isType = function （type）{
//    return function (value) {
//    	return typeof(value) === type;
//    	}
//    }

//     const randomInteger = (minimum, maximum) => Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);

// const createDelay = ({willResolve}) => (ms, {value} = {}) => {
//     return new Promise((relove, reject) => {
//         setTimeout(() => {
//             if(willResolve){
//                 relove(value);
//             }
//             else{
//                 reject(value);
//             }
//         }, ms);
//     });
// }

// const createWithTimers = () => {
//     const delay = createDelay({willResolve: true});
//     delay.reject = createDelay({willResolve: false});
//     delay.range = (minimum, maximum, options) => delay(randomInteger(minimum, maximum), options);
//     return delay;
// }
// const delay4 = createWithTimers();



   
//      (async()=>{
//       try{const result = await delay4.reject(1000,{value:'我是若川',willResolve:false})
//       console.log('永远不会输出这句')
//       }catch(err){
//       console.log('输出结果',err)
//       }
//       const result2 = await delay4.range(10,2000,{value:'我是若川,range'})
//       console.log('输出结果',result2)

//     })()
// const randomInteger = (minimum, maximum) => Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);

// const createDelay = ({willResolve}) => (ms, {value} = {}) => {
//     let timeoutId;
//     let settle;
//     const delayPromise = new Promise((resolve, reject) => {
//         settle = () => {
//             if(willResolve){
//                 resolve(value);
//             }
//             else{
//                 reject(value);
//             }
//         }
//         timeoutId = setTimeout(settle, ms);
//     });

//     delayPromise.clear = () => {
//         clearTimeout(timeoutId);
// 		timeoutId = null;
// 		settle();
//     };

//     return delayPromise;
// }

// const createWithTimers = () => {
//     const delay = createDelay({willResolve: true});
//     delay.reject = createDelay({willResolve: false});
//     delay.range = (minimum, maximum, options) => delay(randomInteger(minimum, maximum), options);
//     return delay;
// }
// const delay5 = createWithTimers();
// (async () => {
//     const delayedPromise = delay5(5000, {value: '我是若川'});

//     setTimeout(() => {
//         delayedPromise.clear();
//     }, 300);

//     // 300 milliseconds later
//     console.log(await delayedPromise);
//     //=> '我是若川'
// })();
// const randomInteger = (minimum, maximum) => Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);

// const createAbortError = () => {
// 	const error = new Error('Delay aborted');
// 	error.name = 'AbortError';
// 	return error;
// };

// const createDelay = ({willResolve}) => (ms, {value, signal} = {}) => {
//   debugger
//     if (signal && signal.aborted) {
// 		return Promise.reject(createAbortError());
// 	}

//     let timeoutId;
//     let settle;
//     let rejectFn;
//     const signalListener = () => {
//       console.log(rejectFn,'555')
//         clearTimeout(timeoutId);
//         rejectFn(createAbortError());
//     }
//     const cleanup = () => {
// 		if (signal) {
// 			signal.removeEventListener('abort', signalListener);
// 		}
// 	};
//     const delayPromise = new Promise((resolve, reject) => {
//         settle = () => {
// 			cleanup();
// 			if (willResolve) {
// 				resolve(value);
// 			} else {
// 				reject(value);
// 			}
// 		};

//         rejectFn = reject;
//         console.log(rejectFn,'rejectFn')
//         timeoutId = setTimeout(settle, ms);
//     });
    
//     if (signal) {
// 		signal.addEventListener('abort', signalListener, {once: true});
// 	}

//     delayPromise.clear = () => {
// 		clearTimeout(timeoutId);
// 		timeoutId = null;
// 		settle();
// 	};

//     return delayPromise;
// }

// const createWithTimers = () => {
//     const delay = createDelay({willResolve: true});
//     delay.reject = createDelay({willResolve: false});
//     delay.range = (minimum, maximum, options) => delay(randomInteger(minimum, maximum), options);
//     return delay;
// }
// const delay6 = createWithTimers();
// (async () => {
//     const abortController = new AbortController();

//     setTimeout(() => {
//         abortController.abort();
//     }, 500);

//     try {
//         await delay6(1000, {signal: abortController.signal});
//     } catch (error) {
//         // 500 milliseconds later
//         console.log(error.name)
//         //=> 'AbortError'
//     }
// })();
const randomInteger = (minimum, maximum) => Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);

const createAbortError = () => {
	const error = new Error('Delay aborted');
	error.name = 'AbortError';
	return error;
};

const createDelay = ({clearTimeout: defaultClear, setTimeout: set, willResolve}) => (ms, {value, signal} = {}) => {
    if (signal && signal.aborted) {
		return Promise.reject(createAbortError());
	}

    let timeoutId;
    let settle;
    let rejectFn;
    const clear = defaultClear || clearTimeout;

    const signalListener = () => {
        clear(timeoutId);
        rejectFn(createAbortError());
    }
    const cleanup = () => {
		if (signal) {
			signal.removeEventListener('abort', signalListener);
		}
	};
    const delayPromise = new Promise((resolve, reject) => {
        settle = () => {
			cleanup();
			if (willResolve) {
				resolve(value);
			} else {
				reject(value);
			}
		};

        rejectFn = reject;
        timeoutId = (set || setTimeout)(settle, ms);
    });
    
    if (signal) {
		signal.addEventListener('abort', signalListener, {once: true});
	}

    delayPromise.clear = () => {
		clear(timeoutId);
		timeoutId = null;
		settle();
	};

    return delayPromise;
}

const createWithTimers = clearAndSet => {
    const delay = createDelay({...clearAndSet, willResolve: true});
    delay.reject = createDelay({...clearAndSet, willResolve: false});
    delay.range = (minimum, maximum, options) => delay(randomInteger(minimum, maximum), options);
    return delay;
}
const delay7 = createWithTimers();
delay7.createWithTimers = createWithTimers;
const customDelay = delay7.createWithTimers({clearTimeout, setTimeout});

(async() => {
      const abortController = new AbortController();

    setTimeout(() => {
        abortController.abort();
    }, 500);
    try{
    await customDelay(1000, {signal: abortController.signal});
    } catch(err){
      console.log(err,'err')
    }

    // Executed after 100 milliseconds
  
    //=> '我是若川'
})();
// const CancelToken = axios.CancelToken;
// let cancel;

// axios.get('http://112.29.246.236:6500/application/afterWork', {
//   cancelToken: new CancelToken(function executor(c) {
//     // executor 函数接收一个 cancel 函数作为参数
//     cancel = c;
//   })
// });

// cancel();
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/afterWork', {
  cancelToken: source.token
})

source.cancel();

    
  }
}

</script>
