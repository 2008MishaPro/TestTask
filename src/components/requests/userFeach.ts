
export async function GetUsers(url:string) {
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Ошибка ${response.status}`);
        }
        const data = await response.json();
        return data
    }catch (error) {
        alert(`Не удалось получить данные: ${error}`)
    }
}