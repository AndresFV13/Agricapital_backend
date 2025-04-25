# Agricapital Backend

Este proyecto es el backend del aplicativo AgriMarket encargado de proveer servicios API-REST para obtener todos los 
productos en base de datos y un producto específico por su ID.

## 🧩 Stack tecnológico

- **Lenguaje**: TypeScript
- **Framework**: [NestJS](https://nestjs.com)
- **Base de Datos**: PostgreSQL
- **ORM**: TypeORM
- **Gestor de Dependencias**: npm
- **Documentación API**: Swagger

## Patrón de Desarrollo

El proyecto sigue el patrón de diseño **Modelo-Vista-Controlador (MVC)**, con una clara separación de responsabilidades:
- **Controladores**: Gestionan las solicitudes HTTP y delegan la lógica al servicio correspondiente.
- **Servicios**: Contienen la lógica de negocio.
- **DTOs**: Se utilizan para la transferencia de datos entre capas.
- **Entidades**: Representan las tablas de la base de datos y son gestionadas por TypeORM.
- **Repositorios**: Encapsulan la lógica de acceso a datos y permiten realizar consultas a la base de datos.

## Arquitectura

El proyecto está diseñado bajo una arquitectura modular, característica de NestJS, lo que permite una alta escalabilidad
y mantenibilidad. Cada módulo agrupa controladores, servicios y otros componentes relacionados.


## 📁 Estructura del Proyecto

```bash
src/
├── main.ts
├── app.module.ts      
├── product/   
│   ├── commons/
│   │   └── builder/  #Clase encargada de aplicar el patrón builder
│   │   └── dtos/     # DTOs de entrada/salida 
│   │   └── mappers/  # Mapean de entidades a DTOs
│   ├── controllers/  # Controladores de la API
│   ├── models/       # Entidades del dominio           
│   ├── repository/   # lógica de acceso a datos                 
│   ├── services/     # lógica de negocio.                               
│   └── products.module.ts         
```

## 📡 Endpoints de la API

| Método | Ruta            | Descripción                        | Cuerpo requerido |
|--------|-----------------|------------------------------------|------------------|
| GET    | /products       | Obtener todos los productos        | ❌               |
| GET    | /products/:id   | Obtener un producto por su ID      | ❌               |





## 🔧 Instalación y Ejecución

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Clona el repositorio

```bash
git clone https://github.com/AndresFV13/Agricapital_backend.git
cd Agricapital_backend
```

### 2. Instalar dependencias

```bash
npm install

```

### 3. Configura las variables de entorno

Copia el archivo `.env.example` a `.env` y ajusta las variables de entorno según tu configuración local.
```bash
DB_TYPE=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=agro_market

```

### 4. Ejecuta la aplicación

```bash
npm run start:dev

```




