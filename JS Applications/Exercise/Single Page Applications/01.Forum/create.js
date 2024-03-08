export async function createPost(event){
    const formData = new FormData(event.target.parentElement.parentElement);
    const data = Object.fromEntries(formData.entries());

    try{
        await fetch(endpoints.allPosts,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }catch(err){
        console.log(err);
    }
}