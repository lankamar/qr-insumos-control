# QR Insumos Control 🏥

**Sistema de Trazabilidad y Registro de Insumos Hospitalarios mediante códigos QR.**

Este proyecto permite al personal de enfermería escanear códigos QR en equipos e insumos médicos para registrar su uso, ubicación (servicio/cama) y responsable en una planilla centralizada de Google Sheets.

---

## 🚀 Componentes del Proyecto

1. **App Móvil**: Cliente de escaneo para Android/iOS.
2. **Backend (Google Apps Script)**: Middleware de integración con Google Sheets.
3. **Planilla Maestra**: Base de datos centralizada en la nube.

---

## 🛠️ Instalación y Configuración

### 1. Backend (Google Sheets)
- Copia el código en `backend/GOOGLE_APPS_SCRIPT.js` en una nueva implementación de Apps Script vinculada a tu planilla.
- Despliega como "Web App".

### 2. App Móvil
- Próximamente APK/IPA disponible en la sección de releases.

---

## 🔒 Privacidad de Datos
Este sistema **NO** almacena datos personales de pacientes (Nombre, DNI, etc.). Solo registra:
- ID del Insumo.
- Servicio y Cama.
- Fecha y Hora.
- Email del Enfermero responsable.

---

**Desarrollado por Lankamar**
