/*---------------------------------
            PROMESAS
---------------------------------*/

// Definición de una promesa con una función para recibir parámetros
const toast = (message) => {
    return new Promise((resolve, reject) => {
        // Similitudes con un termiandores que ya conocemos.
        // resolve() = return
        // reject() = throw new Error(error)
        
        if(!message)
            reject('Debes iniciar el toast con un mensaje');
        
        setTimeout(() => {
            resolve({
                status: 200,
                message
            });
        }, 5000);
    })

} 

const message = 'Hola Chicxs';

// Promise en forma tradicional
toast(message)
.then(response => {
    console.log('response', response)
    if(response.status === 200)
        alert(response.message)

    // throw new Error('Lo fallo a proposito.')
    return 'segunda promesa';
}).then((response) => {
    alert(response);
})
.catch(error => {
    alert(`Ocurrió un error al procesar la promesa: ${error}`);
    throw new Error(`Ocurrió un error al procesar la promesa: ${error}`)
}).finally(() => console.log('terminamos'));

// Promise con sugar syntax
async function useToast(){
    try{
        const toastResponse = await toast(message);

        
        alert(toastResponse.message);
    } catch (error) {
        alert(`Ocurrió un error al procesar la promesa: ${error}`);
        throw new Error(`Ocurrió un error al procesar la promesa: ${error}`)
    }
    
    alert('segunda ejecución')
}

// ejemplo de Array.map()
const objetoMapeado = [
    {
        status: 200,
        message: 'soy un mensaje'
    },
    {
        status: 300,
        message: 'soy un mensaje2'
    }
];
let i = 1;
console.log(objetoMapeado)
console.log(objetoMapeado.map(response => {
    const output = `response ${i}: ${response.message}`;
    i++;
    return output;
}).join(', '));