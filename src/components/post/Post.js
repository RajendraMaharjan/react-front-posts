import '../../assets/css/dashboard.css'


function Post(props) {

    const element = <div className='box' onClick={props.onClick}>
        <p><strong>Id:</strong> {props.post.id}</p>
        <p><strong>Title:</strong> {props.post.title}</p>
        <p><strong>Author:</strong> {props.post.author}</p>
    </div>;

    return element;
}

export default Post;