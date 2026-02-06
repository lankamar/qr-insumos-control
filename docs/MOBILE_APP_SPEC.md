# Especificación Técnica: App Móvil QR Hospitalario

## 📱 Descripción
La aplicación móvil es el cliente de escaneo diseñado para el personal de enfermería. Permite validar los equipos médicos y registrar su uso por turno directamente en una planilla central de Google Sheets.

## 🔄 Flujo de Usuario
1. **Autenticación**: Inicio con email institucional.
2. **Escaneo**: Lectura del QR generado por la extensión o etiquetas físicas.
3. **Ubicación**: Ingreso de Servicio y Cama.
4. **Sincronización**: Envío instantáneo a la nube.

## 📊 Estructura de Datos
- `timestamp`: ISO 8601.
- `nurse_email`: Institucional.
- `equipo_id`: Código del insumo.
- `servicio`: Sector del hospital.
- `cama`: Identificador del lecho.
