import React from 'react';
import first from "../../assets/audio/010 - На небі зірка ясна засіяла.mp3";
import second from "../../assets/audio/012 - Нова радість стала.mp3";
import third from "../../assets/audio/016 - Зірка чудна..mp3";
import fourth from "../../assets/audio/047 - Там за Віфлеємом.mp3";
import fifth from "../../assets/audio/051 - Три славних царі.mp3";
import sixth from "../../assets/audio/052 - Старий рік минає.mp3";
import seventh from "../../assets/audio/brati-monahi-chsvv-stariy-rik.mp3";
import eighth from "../../assets/audio/Mad-heads-xl-noviy-rk-vsya-planeta-kliche_[www.Bisyor.net].mp3";
import nine from "../../assets/audio/ukranski_koljadki_-_nehaj_rizdvo_u_vashu_hatu_(zf.fm).mp3";
import ten from "../../assets/audio/Колядки рина Федишин – Україна колядує.mp3";
import {Container} from "reactstrap";

const audioArray = [
    {id: 1, url: first, title: 'На небі зірка ясна засіяла'},
    {id: 2, url: second, title: 'Нова радість стала'},
    {id: 3, url: third, title: 'Зірка чудна'},
    {id: 4, url: fourth, title: 'Там за Віфлеємом'},
    {id: 5, url: fifth, title: 'Три славних царі'},
    {id: 6, url: sixth, title: 'Старий рік минає'},
    {id: 7, url: seventh, title: 'Брати монахи-Старий рік'},
    {id: 8, url: eighth, title: 'Mad-heads-Новий рік'},
    {id: 9, url: nine, title: 'Різдво у хату'},
    {id: 10, url: ten, title: 'Україна колядує'},
];

const Music = (props) => {
    return (
        <Container>
            <h2 className='text-center mb-3'>Best ukrainian songs</h2>
            <div className='d-flex flex-wrap justify-content-between'>
                {audioArray.map((audio) => (
                    <div key={audio.id}>
                        <audio className='mt-1' style={{outline: 'none'}} controls>
                            <source src={audio.url}/>
                        </audio>
                        <p className='text-center'>{audio.title}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
};

export default Music;
