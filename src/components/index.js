import Vue from 'vue'

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const requireComponent = require.context(
  '.', false, /\.vue$/
)

// 全局注册该文件夹下组件
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
