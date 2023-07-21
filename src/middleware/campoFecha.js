export function cambioFecha(campo){
    return (req,res,next) => {
        req.body[campo] = new Date(req.body[campo]);
        next();
    }
}