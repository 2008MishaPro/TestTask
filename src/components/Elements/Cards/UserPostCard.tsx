interface PostProps{
    id: string;
    title: string;
    body: string;
}

export const UserPostCard= ({id,title,body}:PostProps) =>{

    return(
        <div className="userPost">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}