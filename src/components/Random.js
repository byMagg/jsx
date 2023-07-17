export default function Random() {
    let message = 'Adios!';
    if (Math.random() > 0.5) message = 'Hola!'
    return <h1>{message}</h1>
}