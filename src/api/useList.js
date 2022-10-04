export const useList = async () => {
    const response = await fetch(
        'https://oril-coins-test.herokuapp.com/list'
    )
    if (!response.ok) {
        throw new Error(
            `This is an HTTP error: The status is ${response.status}`
        )
    }
    const data = await response.json()
    return data
}