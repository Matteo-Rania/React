export function Sum({numbers = [2,4,6,8,12]}) {
    return (
        <h1>{numbers.reduce((prev,curr) => prev + curr )}</h1>
    )
}