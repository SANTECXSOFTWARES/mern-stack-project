import { setMessages } from "app/utils/translator"

const loadLanguage = () => {
    return fetch('http://localhost:3001/resources/language.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
        .then((response) => {
            return response.json().then((jsonData) => {
                console.log('DATA ::', jsonData)
                setMessages(jsonData)
            })
        })
        .catch((error) => {
            return error
        })
}

export default loadLanguage
