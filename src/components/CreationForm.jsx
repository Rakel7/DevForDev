import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { FormControlLabel, InputLabel, Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreationForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [url, setUrl] = useState("");
    const [select, setSelect] = useState('FrontEnd');
    const [publish, setPublish] = useState(false);

    const titleChange = (event) => {
        setTitle(event.target.value);
    };

    const contentChange = (event) => {
        setContent(event.target.value);
    };

    const selectChange = (event) => {
        setSelect(event.target.value);
    };

    const urlChange = (event) => {
        setUrl(event.target.value);
    };

    // const toggleChange = () => {
    //     setPublish(true);
    // };

    let navigate = useNavigate();

    function handleClick() {
        navigate('/remerciement', { state: { title: title , content: content, url: url, select: select, publish : publish}})
}

return (
    <div>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <fieldset style={{ borderRadius: "10px" }}>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Titre"
                        multiline
                        maxRows={4}
                        value={title}
                        onChange={titleChange}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Corps du texte"
                        placeholder="Veuillez saisir votre texte ici..."
                        multiline
                        rows={4}
                        value={content}
                        onChange={contentChange}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Url"
                        multiline
                        maxRows={2}
                        value={url}
                        onChange={urlChange}
                    />
                    <InputLabel id="demo-simple-select-autowidth-label">Catégorie</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={select}
                        onChange={selectChange}
                        autoWidth

                    >
                        <MenuItem value={"FrontEnd"}>FrontEnd</MenuItem>
                        <MenuItem value={"BackEnd"}>BackEnd</MenuItem>
                        <MenuItem value={"Design"}>Design</MenuItem>
                    </Select>

                    <FormControlLabel
                        sx={{
                            display: 'block',
                        }}
                        control={
                            <Switch
                                checked={publish}
                                onChange={() => setPublish(!publish)}
                                name="publish"
                                color="primary"
                            />
                        }
                        label="Publier"
                    />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={handleClick}
                    // onClick={() => <Remerciement title={title} input={input} url={url} select={select} publish={publish}/>}
                    >
                        Envoyé
                    </Button>
                </div>
            </fieldset>
        </Box >
    </div >
);
};

export default CreationForm;