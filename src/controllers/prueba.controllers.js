const PruebaCtrl={}

PruebaCtrl.obtener=(req,res)=>{
    res.send('funcionando (GET)')
}

PruebaCtrl.crear=(req,res)=>{
    res.send('funcionando crear(POST)')
}

PruebaCtrl.actualizar=(req,res)=>{
    res.send('funcionando actualizar(put)')
}

PruebaCtrl.eliminar=(req,res)=>{
    res.send('funcionando eliminar(delete)')
}

module.exports=PruebaCtrl