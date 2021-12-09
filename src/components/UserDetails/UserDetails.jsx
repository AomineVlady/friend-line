import React from 'react';
import "./UserDetails.css";
const UserDetails = () => {

    return (
        <div className="profile__information__other">
            <h3 className="profile__information__other-legend">
                Краткая информация
            </h3>
            <p className="profile__information__other brif">День рождения: <span className="brif-response">01 января 2001</span></p>
            <p className="profile__information__other brif">Город: <span className="brif-response">Гродно</span></p>
            <p className="profile__information__other brif">Семейное положение: <span className="brif-response">всё сложно</span></p>
        </div>
    );
}

export default UserDetails;
