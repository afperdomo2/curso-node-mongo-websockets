# Usa la imagen oficial de node
FROM node:18.13.0

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expone la aplicación por el puerto 3000
EXPOSE 3000

# Define el comando para correr la aplicación
CMD [ "npm", "start" ]
