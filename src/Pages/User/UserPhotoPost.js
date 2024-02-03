// estilos
import styles from './UserPhotoPost.module.css';
// dependências
import React from 'react';
import { useNavigate } from 'react-router-dom';
// componentes
import Input from './../../Components/Form/Input';
import Button from './../../Components/Form/Button';
import Error from './../../Components/Helper/Error';

const UserPhotoPost = () => {
    const [nome, setNome] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [img, setImg] = React.useState('');
    const navigate = useNavigate()

    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const photoPost = () => {
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome);
        formData.append('peso', peso);
        formData.append('idade', idade);

        const token = window.localStorage.getItem('token');
        try {
            setError(null);
            setLoading(true);
            fetch('https://dogsapi.origamid.dev/json/api/photo', {
                method: 'POST',
                headers: { Authorization: 'Bearer ' + token },
                body: formData,
            })
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((result) => {
                    console.log(result);
                    setData(result)
                    return result;
                });
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        photoPost();
    }

    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }

    React.useEffect(() => {
        if(data) navigate('/conta');
    }, [data, navigate]);

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <Input type='text' label='Nome' name='nome' id='nome'
                    value={nome} onChange={({ target }) => setNome(target.value)} />
                <Input type='number' label='Peso' name='peso' id='peso'
                    value={peso} onChange={({ target }) => setPeso(target.value)} />
                <Input type='number' label='Idade' name='idade' id='idade'
                    value={idade} onChange={({ target }) => setIdade(target.value)} />
                <input type='file' name='img' id='img' className={styles.file}
                    onChange={handleImgChange} />
                {loading ? <Button disabled>Postando...</Button> : <Button>Postar</Button>}
                {error && <Error />}
            </form>
            <div>
                {
                    img.preview && (
                        <div className={`${styles.preview}`}
                            style={{ backgroundImage: `url('${img.preview}')` }}
                        ></div>
                    )
                }
            </div>
        </section>
    );
}

export default UserPhotoPost;













// // styles
// import styles from './UserPhotoPost.module.css';
// // dependencies
// import React from 'react';
// // components
// import Input from './../../Components/Form/Input';
// import Button from './../../Components/Form/Button';
// // hooks
// import useFetch from './../../Hooks/useFetch';
// import { PHOTO_POST } from '../../api';
// import Error from './../../Components/Helper/Error';

// const UserPhotoPost = () => {
//     const [nome, setNome] = React.useState();
//     const [peso, setPeso] = React.useState();
//     const [idade, setIdade] = React.useState();
//     const [img, setImg] = React.useState({});
//     const { data, error, loading, request } = useFetch();

//     function handleSubmit(e) {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('img', img.raw);
//         formData.append('nome', nome.value);
//         formData.append('peso', peso.value);
//         formData.append('idade', idade.value);

//         const token = window.localStorage.getItem('token');
//         const { url, options } = PHOTO_POST(formData, token);
//         request(url, options)
//     }

//     function handleImgChange({ target }) {
//         setImg({
//             raw: target.files[0],
//         });
//     }

//     return (
//         <section className={`${styles.photoPost} animeLeft`}>
//             <form onSubmit={handleSubmit}>
//                 <Input type='text' label='Nome' name='nome' id='nome' error={error}
//                     value={nome} onChange={({ target }) => setNome(target.value)} />

//                 <Input type='number' label='Peso' name='peso' id='peso' error={error}
//                     value={peso} onChange={({ target }) => setPeso(target.value)} />

//                 <Input type='number' label='Idade' name='idade' id='idade' error={error}
//                     value={idade} onChange={({ target }) => setIdade(target.value)} />

//                 <input type='file' name='img' id='img' className={styles.file}
//                     onChange={handleImgChange} />

//                 <Button>Postar</Button>

//                 {error && <Error />}
//             </form>
//         </section>
//     )
// }

// export default UserPhotoPost