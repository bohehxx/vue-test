export default{
    functional:true,
    props:{
        render:Function
    },
    render:(h,ctx)=>{
        console.log(h,ctx,'hhhh')
        return ctx.props.render(h)
    }
}
