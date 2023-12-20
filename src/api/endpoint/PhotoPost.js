import React, { useState } from 'react'

const PhotoPost = () => {

    const [token, setToken] = useState('');
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [idade, setIdade] = useState('');
    const [img, setImg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('img', img);
        formData.append('nome', nome);
        formData.append('peso', peso);
        formData.append('idade', idade);

        fetch(`https://dogsapi.origamid.dev/json/api/photo`, {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + token },
            body: formData,
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((json) => {
            console.log(json);
            return json;
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={token} placeholder='Token'
                onChange={({ target }) => setToken(target.value)} />

            <input type='text' value={nome} placeholder='Nome'
                onChange={({ target }) => setNome(target.value)} />

            <input type='text' value={peso} placeholder='Peso'
                onChange={({ target }) => setPeso(target.value)} />

            <input type='text' value={idade} placeholder='Idade'
                onChange={({ target }) => setIdade(target.value)} />

            <input type='file' onChange={({ target }) => setImg(target.files[0])} />
            <button>Envia</button>
        </form>
    )
}

export default PhotoPost;