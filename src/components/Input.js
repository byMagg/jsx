export default function Input() {
    const inputType = 'number';
    const minValue = 5;

    return <input
        style={{ border: '2px solid red' }}
        type={inputType}
        min={minValue} />;
}