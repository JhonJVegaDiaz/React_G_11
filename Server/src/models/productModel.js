// Importar mongoose
const mongoose = require('mongoose');
// Crear el modelo de producto con la funcion Schema de mongoose
/*


Datos para el envío:
*Dia(fecha) de recogida del paquete.
*Horario de recogida del paquete.
** Se debe programar con mínimo 24 horas de anticipación.
**Dia(fecha) de entrega del paquete.
*Horario de entrega del 
*Dimensiones del paquete 
** ancho x alto x largo
*Caracteristica del paquete:
** Delicado
** No delicado
** Peso aproximado del paquete (en kg).
*Dirección y lugar de recogida (Incluyendo ciudad)
**Geolocalizacion
**Busqueda por direcciones
**Formulario de direcciones
*Datos de quien envía:
**Nombre completo de quien envía.
**Número de identificación personal de quien envia.
*Datos de quien Recibe:
*Dirección y lugar hacia donde se realiza el envío  (Incluyendo ciudad) :
**Geolocalizacion
**Busqueda por direcciones
**Formulario de direcciones
**Nombre completo de quien recibe
**Número de identificación personal de quien recibe.
*Botón para confirmación de los datos.
*Botón volver a la anterior vista. 
*/

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user:{ 
        _id: mongoose.Schema.Types.ObjectId, // Referencia a un usuario atravez de su id
        ref: 'User'
    }, 
    tipo_paquete: 
            {
                type: Array,
                // [
                    
                // Sobre/documentos:{type String} ,
                // 'Paquete pequeño (hasta 5kg)',
                // 'Paquete mediano (hasta 15 kg)',
                // 'Paquete grande (hasta 50 kg)',
                // 'Paquete extragrande (mayor a 50kg)'
                // ]
                require: true  
            }

    

});

// Exportar modelo de producto
module.exports = mongoose.model('Producto', productSchema);
