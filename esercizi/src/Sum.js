export function Sum({numbers}) {
    return (
        <h1>{numbers.reduce((prev,curr) => prev + curr )}</h1>
    )
}