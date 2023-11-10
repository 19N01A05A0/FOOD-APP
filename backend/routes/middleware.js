var mdlwre=function(req,res,next)
{
    console.warn("current route is:",req.originalUrl)
    next()
}
module.exports=mdlwre