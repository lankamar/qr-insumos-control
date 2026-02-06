/**
 * BACKEND PARA CONTROL DE EQUIPOS HOSPITALARIOS
 * Instrucciones:
 * 1. Crear una Planilla de Google nueva.
 * 2. Ir a Extensiones > Apps Script.
 * 3. Pegar este código.
 * 4. Implementar como "Aplicación Web".
 */

const SHEET_NAME = 'Registros de Control';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Fecha', 'Enfermero', 'ID Equipo', 'Nombre Equipo', 'Servicio', 'Cama']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#f3f3f3');
    }
    
    sheet.appendRow([
      new Date(),
      data.nurse_email,
      data.equipo_id,
      data.equipo_nombre,
      data.servicio,
      data.cama
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({'status': 'success'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({'status': 'error', 'error': error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('QR Insumos Control Backend Activo.');
}
