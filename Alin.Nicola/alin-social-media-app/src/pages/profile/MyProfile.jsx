import { useParams } from "react-router-dom";

const ProfilePage = () => {

    const id = useParams().id;
    console.log(id)
    return (
        <div>Profile page {id}</div>
    )
}

export default ProfilePage;