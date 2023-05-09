![Tutorial sobre Callbacks en Javascript imagen 1](https://raw.githubusercontent.com/sergiecode/callback-tutorial/master/1.jpg)

![Tutorial sobre Callbacks en Javascript imagen 2](https://raw.githubusercontent.com/sergiecode/callback-tutorial/master/2.jpg)

![Tutorial sobre Callbacks en Javascript imagen 3](https://raw.githubusercontent.com/sergiecode/callback-tutorial/master/3.jpg)

# Callbacks en JavaScript

En JavaScript, un **callback** es una función que se pasa como argumento a otra función y que se ejecuta después de que se complete cierta acción.

## ¿Para qué sirven los callbacks?

Los callbacks son útiles en situaciones en las que no sabemos exactamente cuándo se completará una tarea, como cuando se realiza una llamada a una API o se espera una respuesta del usuario.

Por ejemplo, supongamos que tenemos una función que realiza una llamada a una API para obtener los datos de un usuario. La respuesta de la API puede tardar un tiempo desconocido en llegar, por lo que no podemos simplemente esperar a que llegue antes de continuar con la ejecución del resto del código. En su lugar, podemos usar un callback para que se ejecute después de que se reciba la respuesta de la API.

    function obtenerDatosUsuario(userId, callback) {
      // Hacer una llamada a la API para obtener los datos del usuario
      // ...
      
      // Cuando se recibe la respuesta de la API, se llama al callback con los datos del usuario
      callback(datosUsuario);
    }
    
    obtenerDatosUsuario(123, function(datosUsuario) {
      console.log(datosUsuario);
    });

En este ejemplo, la función `obtenerDatosUsuario` recibe dos argumentos: el `userId` del usuario que se desea obtener y un `callback` que se ejecutará después de que se reciba la respuesta de la API. El callback en este caso es una función anónima que simplemente imprime los datos del usuario en la consola.

## ¿Cómo se definen los callbacks?

Los callbacks se definen como cualquier otra función en JavaScript. La única diferencia es que se pasan como argumento a otra función en lugar de ser llamados directamente.

    function hacerAlgo(callback) {
      // Hacer algo...
      
      // Cuando se complete, llamar al callback
      callback();
    }
    
    hacerAlgo(function() {
      console.log('Se completó hacerAlgo');
    });

En este ejemplo, la función `hacerAlgo` recibe un `callback` como argumento y lo llama después de que se completa la tarea. El callback en este caso simplemente imprime un mensaje en la consola.

## ¿Qué son los callbacks de error?

Los callbacks de error son una convención común en JavaScript para manejar errores que puedan ocurrir en una función asíncrona. En lugar de lanzar una excepción, se llama a un callback de error para informar al usuario o al desarrollador que algo salió mal.


    function hacerAlgo(callbackExito, callbackError) {
      // Hacer algo...
      
      if (huboError) {
        // Si hay un error, llamar al callback de error con un objeto de error
        callbackError(new Error('Ocurrió un error'));
      } else {
        // Si todo salió bien, llamar al callback de éxito
        callbackExito();
      }
    }
    
    hacerAlgo(function() {
      console.log('Se completó hacerAlgo');
    }, function(error) {
      console.error(error);
    });

En este ejemplo, la función `hacerAlgo` recibe dos callbacks como argumentos: uno para cuando la tarea se completa exitosamente y otro para cuando ocurre un error. Si hay un error, se llama al callback de error con un objeto de error que describe lo que salió mal. Si todo sale bien, se llama al callback de éxito sin pasarle ningún argumento adicional.

En el ejemplo anterior, el callback de éxito simplemente imprime un mensaje en la consola, mientras que el callback de error imprime el objeto de error en la consola de errores.

## Conclusión

Los callbacks son una herramienta fundamental en JavaScript para trabajar con funciones asíncronas. Al entender cómo funcionan los callbacks y cómo se definen, podrás escribir código más limpio y efectivo en tus proyectos. Espero que este README te haya sido de ayuda. ¡Gracias por leer!
