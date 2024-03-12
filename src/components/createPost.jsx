import { useEffect, useState } from 'react';
import cat from '../axios'
import ListOfUsers from './listOfUsers';

const CreatePost = (props) => {

    const [searchName, setSearchName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const apiurl = 'http://localhost:8000';
    const [labels, setLabels] = useState([])
    const [tag, setTag] = useState("");
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        label: '',
        tagged: '',
    });
    const {title, body, label, tagged} = formData;

    useEffect(() => {
        cat.get(apiurl + '/post/labels/')
            .then((resp) => {
                setLabels(resp.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };

    const handleSearch = (e) => {
        if(e.code=='Enter') {
            cat.get(apiurl+'/user/whois/'+searchName+'/')
            .then((resp) => {
                setSearchResults(resp.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSelectChange = (event) => {
        const { value } = event.target;
        setFormData({
          ...formData,
          label: value,
        });
    };

    useEffect(() => {
        if(searchResults.length==0) {
            document.getElementById('tagUser').value = tag;
            setFormData({
                ...formData,
                tagged: tag,
            });
        }
    },[searchResults])

    const handleSubmit = () => {
        console.log(formData);
        // cat.post((apiurl+'/post/'),formData)
        // .then((resp) => {
        //     console.log(resp);
        // })
        // .catch((err) => {
        //     console.log(err.message);
        // });
        props.setIsCreating(false);
    }

    const handleCancel = () => {
        props.setIsCreating(false);
    }
    
    return (
        <div className="flex flex-col p-2 space-y-2">
            <input
                className="rounded-[100px] p-2"
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={handleInputChange}
            />
            <input
                className="rounded-[100px] p-2"
                type="text"
                name="body"
                placeholder="Body"
                value={body}
                onChange={handleInputChange}
            />
            <select className="rounded-[100px] p-2" name="Labels" value={label} onChange={handleSelectChange}>
                <option value="">Select Label</option>
                {labels.map((option, index) => (
                    <option key={index} value={index}>
                        {option.name}
                    </option>
                ))}
            </select>
            <input className="rounded-[100px] p-2" type="text" name='tagUser' id='tagUser' placeholder='Tag an account' onChange={handleSearchChange} onKeyDown={handleSearch} />
            {searchResults && <ListOfUsers list={searchResults} setTag={setTag} setSearchResults={setSearchResults}/>}
            <div className='flex'>
                <button className="rounded-[100px] p-2 grow" onClick={handleCancel}>Cancel</button>
                <button className="rounded-[100px] p-2 grow" onClick={handleSubmit}>Post</button>
            </div>
        </div>
    )
}

export default CreatePost