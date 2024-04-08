import { useNavigate} from 'react-router-dom'
import { useCreateUserMutation,useUploadAvatarMutation} from '../../features/api/apiSlice';
import Swal from 'sweetalert2';
import UserForm from './UserForm';
import { useState } from 'react';


export default function UserFormCreate() {

    const navigate = useNavigate();
    const [createUser] = useCreateUserMutation();
    const [file, setFile] = useState(null);
    const [updateAvatar] = useUploadAvatarMutation();
   
    
    const handleChangeAvatar = (e) => {
        setFile(e.target.files);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            id: e.target.id.value,
            password: e.target.password.value
        }
        try {
            const response = await createUser(newUser);
            if(file){
                const formdata = new FormData();
                formdata.append('file', file[0]);
                updateAvatar({_id: response.data._id,file: formdata});
            }
            if (response.status === 'error') {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: response.message,
                    showConfirmButton: false,
                    
                })
            } else {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/user')
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire(
                'Error',
                'There was an error creating the user',
                'error'
            )
        }
    }
    return (
        <UserForm props={{ handleSubmit : handleSubmit, handleChangeAvatar: handleChangeAvatar, user:null }} /> 
    );
}