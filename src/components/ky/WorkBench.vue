<script>
import pick from 'lodash/pick'
import WorkbenchMenu from './workbenchMenu'
export default {
  functional: true,
  name: 'Workbench',
  components: {
    WorkbenchMenu
  },
  props: {
    menu: { type: Array, default: null },
    menuStatus: { type: String, default: 'show' },
    header: { type: Boolean, default: true }
  },
  render: function (h, context) {
    const { data, props } = context
    const attrs = pick(data, ['attrs'])
    const { menu, menuStatus, header } = props
    // 类样式
    const styleClass = ['workbench']
    if (menu) {
      styleClass.push('menu')
      menu.open && styleClass.push('expand')
    }
    data.staticClass && styleClass.push(data.staticClass)
    data.class && styleClass.push(data.class)
    //行内样式
    const style = {}
    data.staticStyle && style.push(data.staticStyle)
    data.style && style.push(data.style)
    const renderMenu = () => {
      if (menu) {
        return <WorkbenchMenu menuData={menu} open={true} />
      } else {
        return ''
      }
    }
    const renderHeader = () => {
      if (header) {
        return <workbench-header></workbench-header>
      } else {
        return ''
      }
    }
    const renderMenuBody = () => {
      const cssClass = `workbench_inner-page workbench-menu-1`;
      return (        
        <div class={cssClass}>
          { context.slots().default }
        </div>
      )
    }
    const renderBody = menu?renderMenuBody:context.slots().default
    return(
        <div {...attrs} class={styleClass.join(' ')} style={style}>
        {renderHeader()}
        {renderMenu()}
        {renderBody}
        </div>
    )
  }
}
</script>
