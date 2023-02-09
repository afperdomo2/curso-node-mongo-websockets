# Usa la imagen oficial de node
FROM node:18.13.0

# Define el directorio de trabajo en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json a el contendor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código del resto de la aplicación al contenedor
COPY . .

# Expone la aplicación por el puerto 3000
EXPOSE 3000

# Define el comando para correr la aplicación
CMD [ "npm", "start" ]
