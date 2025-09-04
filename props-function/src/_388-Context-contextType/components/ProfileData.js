import ContentData from './ContentData';

const ProfileData = (props) => {
    return (
        <div>
            <p>
                <a className='btn btn-primary' data-bs-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'>
                    Informations sur {props.welcome.name} ?
                </a>
            </p>

            <ContentData userData={props.welcome}/>
        </div>
    )
}

export default ProfileData;