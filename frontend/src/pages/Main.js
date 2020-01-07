import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev logo" />
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/24740101?v=4" alt="" />
                    <footer>
                        <strong>Yago Santos</strong>
                        <p>I am a Software Development student at Mohawk College.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars0.githubusercontent.com/u/24740101?v=4" alt="" />
                    <footer>
                        <strong>Yago Santos</strong>
                        <p>I am a Software Development student at Mohawk College.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars0.githubusercontent.com/u/24740101?v=4" alt="" />
                    <footer>
                        <strong>Yago Santos</strong>
                        <p>I am a Software Development student at Mohawk College.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Main;