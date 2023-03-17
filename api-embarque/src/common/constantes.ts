export enum RabbitMQ {
  UsuarioCola = 'usuarios',
  PasajeroCola = 'pasajeros',
  VueloCola = 'vuelos',
}

export enum UserMSG {
  INSERTAR = 'CREAR_USUARIO',
  TODOS = 'TODOS_LOS_USUARIOS',
  UNO = 'UN_USUARIO',
  ACTUALIZAR = 'ACTUALIZAR_USUARIO',
  ELIMINAR = 'ELIMINAR_USUARIO',
  VALIDAR = 'VALIDAR_USUARIO',
}

export enum PasajeroMSG {
  INSERTAR = 'CREAR_PASAJERO',
  TODOS = 'TODOS_LOS_PASAJEROS',
  UNO = 'UN_PASAJERO',
  ACTUALIZAR = 'ACTUALIZAR_PASAJERO',
  ELIMINAR = 'ELIMINAR_PASAJERO',
}

export enum VueloMSG {
  INSERTAR = 'CREAR_VUELO',
  TODOS = 'TODOS_LOS_VUELOS',
  UNO = 'UN_VUELO',
  ACTUALIZAR = 'ACTUALIZAR_VUELO',
  ELIMINAR = 'ELIMINAR_VUELO',
  AGREGAR = 'AGREGAR_UN_PASAJERO_A_VUELO',
}
