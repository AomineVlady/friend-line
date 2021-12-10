import React from 'react';
import "./UserDetails.css";
const UserDetails = () => {

    return (
        <div className="profile__information__other">
            <h3 className="profile__information__other-legend">
                Краткая информация
            </h3>
            <p className="profile__information__other brif">День рождения: <span className="brif-response">16 апреля 1978г.</span></p>
            <p className="profile__information__other brif">Город: <span className="brif-response">Санкт-Петербург, Россия</span></p>
            <p className="profile__information__other brif">Семейное положение: <span className="brif-response">женат на Наталье Автандиловне Кикнадзе</span></p>
        </div>
    );
}

export default UserDetails;
