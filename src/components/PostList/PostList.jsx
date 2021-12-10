import React from "react";
import PostItem from "../PostItem/PostItem";


const cat = [
    {
        text: `Смотрит котик - красота , 
    Только вот не для кота !
    Мне бы подойти к окошку ,
    Только чтоб не понарошку ,
    Сам в тепле , за оконной рамой ,
    А рядом миска со сметаной!!!`,
        picture: "https://nypost.com/wp-content/uploads/sites/2/2021/12/cat-mad_13.jpg?quality=80&strip=all",
    },
    {
        text: `Cats became domestic about 9500 years ago in the East. People valued a lot cats' abilities to catch mice and rats.`,
        picture: "https://cdn.mos.cms.futurecdn.net/KYEJp9vem3QQFGhi25SYx4-1200-80.jpg",
    },
    {
        text: `Живёт у меня кошечка Соня. Она милая, игривая и очень пушистая. Мы забрали ее из приюта, когда Соне было 3 месяца. Она трехцветная. Соня любит играть с игрушками, особенно, с удочкой-дразнилкой и запрыгивает либо на кровать, либо на стену. У моей кошечки есть одна особенность: она пьёт воду только из крана или из стакана обмакивая лапку и облизывая ее.`,
        picture: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
    }
]

const PostList = () => {
    return (
        <div className="post__list">
            {cat.map( (cat,index) =>{
                return <PostItem text={cat.text} picture={cat.picture} key={index}/>
            })}
        </div>
    )
}

export default PostList;