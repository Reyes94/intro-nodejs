# Desafio Latam: Introduction to Node.js

In this challenge, a small backend application is developed to record hours of attention in a veterinary clinic.

There are 3 files:
- index.js: Main file to interact with the application. Here the functions created in operations.js are imported.

- operaciones.js: It has 4 functions `registerAppointment`, `listAppointments`, `searchAppointment`, `eraseAppointment`.
     
- citas.json: Initializes as an empty array, where the appointments registered by command line are added.


## Commands

Allow you to enter arguments on the command line:

- `register` allows to register a new appointment, needs 5 arguments: name, age, animal, color, disease.
    ```
    node index.js register nombre "edad" animal color enfermedad
    ```
    Examples:

    ```
    node index.js register charlie "15 años" perro cafe vomitos
    ```

    ```
    node index.js register chicho "13 años" gato amarillo alergia
    ```

    ```
    node index.js register ringo "1 año" perro blanco fiebre
    ```

- `read` allows to view the entire agenda
   ```
   node index.js read
   ```

- `search` allows to view a specific appointment through the id
   ```
   node index.js search valorID
   ```
- `delete` allows to delete a specific appointment through the id
   ```
   node index.js delete valorID
   ```


## Backend

- [Node.js](https://nodejs.dev/)


## Dependencies

- ID generator for JavaScript [Nano ID](https://www.npmjs.com/package/nanoid)
- To install dependencies run: `npm install`

