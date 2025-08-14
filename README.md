# Debora Hair CRUD

Este proyecto es una aplicación completa para la gestión de clientes de Debora Sanabria Hair, desarrollada con Angular (frontend) y NestJS (backend). Permite registrar, editar, eliminar y listar clientes, además de enviar notificaciones automáticas por WhatsApp sobre mantenimientos.

## Tecnologías utilizadas
- **Frontend:** Angular
- **Backend:** NestJS + TypeORM + PostgreSQL
- **Mensajería:** Twilio API para WhatsApp (sandbox en desarrollo)

## Estructura del proyecto
```
Backend/
  backend-clientes/
    src/
      clientes/
        cliente.controller.ts
        cliente.entity.ts
        cliente.module.ts
        cliente.service.ts
        whatsapp.service.ts
        dto/
          create-cliente.dto.ts
          update-cliente.dto.ts
Frontend/
  src/
    app/
      clientes/
        pages/
          cliente-form/
          cliente-list/
        services/
        interfaces/
```

## Instalación

### Backend
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Configura la base de datos en `.env` (PostgreSQL) y las credenciales de Twilio.
3. Inicia el servidor:
   ```bash
   npm run start:dev
   ```

### Frontend
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia la aplicación:
   ```bash
   ng serve
   ```

## Uso
- Accede al frontend en `http://localhost:4200`.
- Registra clientes y gestiona sus datos.
- Al crear un cliente, se envía un mensaje de WhatsApp (sandbox Twilio) al número registrado, indicando la fecha de mantenimiento.

## Notas sobre WhatsApp
- En modo sandbox, el número de destino debe unirse al sandbox enviando el código de invitación al número de Twilio.
- Para producción, se requiere un número de WhatsApp Business verificado.

## Autor
Kevin Olivella

## Licencia
MIT
