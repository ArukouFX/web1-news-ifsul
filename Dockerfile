# Usa una imagen base de nginx
FROM nginx:alpine

# Copia los archivos de tu proyecto al directorio predeterminado de NGINX
COPY src /usr/share/nginx/html
COPY css /usr/share/nginx/html/css
COPY img /usr/share/nginx/html/img
COPY script /usr/share/nginx/html/script

# Cambiar permisos para asegurar que NGINX pueda leer los archivos
RUN chmod -R 755 /usr/share/nginx/html

# Exponer el puerto en el que NGINX está escuchando
EXPOSE 80
