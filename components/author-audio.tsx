interface AuthorAudioI{
    author:{
        img: string;
        name: string;
        value: string;
    }
    authorAudio:(authorAudio:string)=> void
}

const AuthorAudio = ({author,authorAudio}:AuthorAudioI) => {
    return (
        <div className="author-audio flex flex-col items-center justify-between space-y-3 cursor-pointer sm:w-48 w-28 h-44 flex-shrink-0" onClick={()=> authorAudio(author.value)}>
            <img src={author.img} className="w-24 h-24 rounded-full"  alt="" />
            <p className="text-base font-bold text-center">{author.name}</p>
        </div>
    )
}
export default AuthorAudio